import { createHash, createHmac } from 'crypto';
import { BadgeSchema, CategoriesGroupsTagsBadgesSchema, CategorySchema, GroupSchema, TagSchema } from './dtos/fronts';
import { ProductCardOnHomepageSchema, ProductCardSchema, ProductSchema, ScheduleSlotSchema, } from './dtos/products';
import { APIErrorSchema } from './dtos/errors';
import APIError from './error';
const VERSION = '3';
export default class DclApi {
    base_url;
    front;
    key;
    secret;
    constructor(base_url, front, key, secret) {
        this.base_url = base_url;
        this.front = front;
        this.key = key;
        this.secret = secret;
    }
    signRequest(request) {
        const u = new URL(request.url);
        u.searchParams.sort();
        const canonicalUri = u.pathname.trim();
        const canonicalQueryString = u.searchParams.toString().trim();
        const canonicalHeaders = [...request.headers.keys()]
            .sort()
            .reduce((acc, obj) => acc += `${obj.toLowerCase().trim()}:${request.headers.get(obj)?.toLowerCase().trim().replace(/\s\s+/g, ' ')}\n`, '')
            .trim();
        const signedHeaders = [...request.headers.keys()]
            .sort()
            .reduce((acc, obj) => acc += `${obj.toLowerCase().trim()};`, '').slice(0, -1)
            .trim();
        const payload = request.body ? JSON.stringify(request.body) : '';
        const hashedPayload = createHash('sha256')
            .update(new TextEncoder().encode(payload))
            .digest('hex');
        const canonicalRequest = `${request.method.trim()}\n${canonicalUri}\n${canonicalQueryString}\n${canonicalHeaders}\n${signedHeaders}\n${hashedPayload}`;
        return createHmac('sha256', this.secret)
            .update(new TextEncoder().encode(canonicalRequest))
            .digest('hex');
    }
    prepareRequest(method, url, body) {
        const headersInit = {
            'Accept': 'application/json; charset=UTF-8',
            'X-Front': this.front,
            'X-API-Version': VERSION,
            'X-API-Key': this.key,
            'X-API-Timestamp': new Date().toISOString(),
            'X-API-Signed-Headers': '',
        };
        const reqInit = {
            method: method,
            mode: 'cors',
            redirect: 'follow',
            headers: headersInit,
            body: body,
        };
        const req = new Request(url, reqInit);
        req.headers.set('X-API-Signed-Headers', [...req.headers.keys()]
            .sort()
            .reduce((acc, obj) => acc += `${obj.toLowerCase().trim()};`, '')
            .slice(0, -1)
            .trim());
        const signature = this.signRequest(req);
        req.headers.set('X-API-Signature', signature);
        return req;
    }
    async get(url) {
        const req = this.prepareRequest('GET', url, null);
        const res = await fetch(req);
        if (res.ok) {
            return res.json();
        }
        else {
            const ae = await APIErrorSchema.parseAsync(await res.json());
            throw new APIError(ae);
        }
    }
    async create(fetch, url, body) {
        const req = this.prepareRequest('POST', url, JSON.stringify(body));
        const res = await fetch(req);
        if (res.ok) {
            return res.json();
        }
        else {
            const ae = await APIErrorSchema.parseAsync(await res.json());
            throw new APIError(ae);
        }
    }
    async getCategories() {
        const res = await this.get(`${this.base_url}/fronts/categories/`);
        return CategorySchema.array().parseAsync(res);
    }
    async getGroups() {
        const res = await this.get(`${this.base_url}/fronts/groups/`);
        return GroupSchema.array().parseAsync(res);
    }
    async getTags() {
        const res = await this.get(`${this.base_url}/fronts/tags/`);
        return TagSchema.array().parseAsync(res);
    }
    async getBadges() {
        const res = await this.get(`${this.base_url}/fronts/badges/`);
        return BadgeSchema.array().parseAsync(res);
    }
    async getCategoriesGroupsTagsBadges() {
        const res = await this.get(`${this.base_url}/fronts/categories-groups-tags-badges/`);
        return CategoriesGroupsTagsBadgesSchema.parseAsync(res);
    }
    async getProducts() {
        const res = await this.get(`${this.base_url}/products/`);
        return ProductSchema.array().parseAsync(res);
    }
    async getProduct(slug) {
        const res = await this.get(`${this.base_url}/products/${slug}/`);
        return ProductSchema.parseAsync(res);
    }
    async getProductScheduleSlots(slug) {
        const res = await this.get(`${this.base_url}/schedule-slots/${slug}/`);
        return ScheduleSlotSchema.array().parseAsync(res);
    }
    async getProductCardsOnHomepage() {
        const res = await this.get(`${this.base_url}/products/cards/`);
        return ProductCardOnHomepageSchema.array().parseAsync(res);
    }
    async getProductCardsInCategory(slug) {
        const res = await this.get(`${this.base_url}/products/cards/categories/${slug}/`);
        return ProductCardSchema.array().parseAsync(res);
    }
    async getProductCardsInGroup(slug) {
        const res = await this.get(`${this.base_url}/products/cards/groups/${slug}/`);
        return ProductCardSchema.array().parseAsync(res);
    }
    async getProductCardsWithTag(slug) {
        const res = await this.get(`${this.base_url}/products/cards/tags/${slug}/`);
        return ProductCardSchema.array().parseAsync(res);
    }
    async getProductCardsWithBadge(slug) {
        const res = await this.get(`${this.base_url}/products/cards/badges/${slug}/`);
        return ProductCardSchema.array().parseAsync(res);
    }
    async getProductCardsOnDate(timestamp) {
        const res = await this.get(`${this.base_url}/products/cards/on/${timestamp.toUnixTimestamp()}/`);
        return ProductCardSchema.array().parseAsync(res);
    }
}
//# sourceMappingURL=index.js.map