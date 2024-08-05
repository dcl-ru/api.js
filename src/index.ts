import {createHash, createHmac} from 'crypto';
import {
    type BadgeDto,
    BadgeSchema,
    type CategoriesGroupsTagsBadgesDto,
    CategoriesGroupsTagsBadgesSchema,
    type CategoryDto,
    CategorySchema,
    type GroupDto,
    GroupSchema,
    type TagDto,
    TagSchema
} from './dtos/fronts.js';
import {
    ProductCardDto,
    ProductCardOnHomepageDto,
    ProductCardOnHomepageSchema,
    ProductCardSchema,
    ProductDto,
    ProductSchema,
    ScheduleSlotDto,
    ScheduleSlotSchema,
} from './dtos/products.js';
import {APIErrorSchema} from './dtos/errors.js';
import APIError from './error.js';
import UnixTimestamp from './unixtimestamp.js';

const VERSION: string = '3';

export default class DclApi {
    private readonly base_url: string;
    private readonly front: string;
    private readonly key: string;
    private readonly secret: string;

    constructor(base_url: string, front: string, key: string, secret: string) {
        this.base_url = base_url;
        this.front = front;
        this.key = key;
        this.secret = secret;
    }

    private signRequest(request: Request): string {
        const u = new URL(request.url);
        u.searchParams.sort();
        const canonicalUri: string = u.pathname.trim();
        const canonicalQueryString: string = u.searchParams.toString().trim();
        const canonicalHeaders: string = [...request.headers.keys()]
            .sort()
            .reduce((acc, obj) => acc += `${obj.toLowerCase().trim()}:${request.headers.get(obj)?.toLowerCase().trim().replace(/\s\s+/g, ' ')}\n`, '')
            .trim();
        const signedHeaders: string = [...request.headers.keys()]
            .sort()
            .reduce((acc, obj) => acc += `${obj.toLowerCase().trim()};`, '').slice(0, -1)
            .trim();
        const payload: string = request.body ? JSON.stringify(request.body) : '';
        const hashedPayload: string = createHash('sha256')
            .update(new TextEncoder().encode(payload))
            .digest('hex');
        const canonicalRequest: string = `${request.method.trim()}\n${canonicalUri}\n${canonicalQueryString}\n${canonicalHeaders}\n${signedHeaders}\n${hashedPayload}`;
        return createHmac('sha256', this.secret)
            .update(new TextEncoder().encode(canonicalRequest))
            .digest('hex');
    }

    private prepareRequest(method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', url: string, body: BodyInit | null): Request {
        const headersInit: HeadersInit = {
            'Accept': 'application/json; charset=UTF-8',
            'X-Front': this.front,
            'X-API-Version': VERSION,
            'X-API-Key': this.key,
            'X-API-Timestamp': new Date().toISOString(),
            'X-API-Signed-Headers': '',
        };

        const reqInit: RequestInit = {
            method: method,
            mode: 'cors',
            redirect: 'follow',
            headers: headersInit,
            body: body,
        };

        const req = new Request(url, reqInit);

        req.headers.set('X-API-Signed-Headers',
            [...req.headers.keys()]
                .sort()
                .reduce((acc, obj) => acc += `${obj.toLowerCase().trim()};`, '')
                .slice(0, -1)
                .trim()
        );
        const signature = this.signRequest(req);
        req.headers.set('X-API-Signature', signature);

        return req;
    }

    private async get(url: string): Promise<any> {
        const req = this.prepareRequest('GET', url, null);
        const res = await fetch(req);
        if (res.ok) {
            return res.json();
        } else {
            const ae = await APIErrorSchema.parseAsync(await res.json());
            throw new APIError(ae);
        }
    }

    private async create(fetch: any, url: string, body: any): Promise<any> {
        const req = this.prepareRequest('POST', url, JSON.stringify(body));
        const res = await fetch(req);
        if (res.ok) {
            return res.json();
        } else {
            const ae = await APIErrorSchema.parseAsync(await res.json());
            throw new APIError(ae);
        }
    }

    public async getCategories(): Promise<CategoryDto[]> {
        const res = await this.get(`${this.base_url}/fronts/categories/`);
        return CategorySchema.array().parseAsync(res);
    }

    public async getGroups(): Promise<GroupDto[]> {
        const res = await this.get(`${this.base_url}/fronts/groups/`);
        return GroupSchema.array().parseAsync(res);
    }

    public async getTags(): Promise<TagDto[]> {
        const res = await this.get(`${this.base_url}/fronts/tags/`);
        return TagSchema.array().parseAsync(res);
    }

    public async getBadges(): Promise<BadgeDto[]> {
        const res = await this.get(`${this.base_url}/fronts/badges/`);
        return BadgeSchema.array().parseAsync(res);
    }

    public async getCategoriesGroupsTagsBadges(): Promise<CategoriesGroupsTagsBadgesDto> {
        const res = await this.get(`${this.base_url}/fronts/categories-groups-tags-badges/`);
        return CategoriesGroupsTagsBadgesSchema.parseAsync(res);
    }

    public async getProducts(): Promise<ProductDto[]> {
        const res = await this.get(`${this.base_url}/products/`);
        return ProductSchema.array().parseAsync(res);
    }

    public async getProduct(slug: string): Promise<ProductDto> {
        const res = await this.get(`${this.base_url}/products/${slug}/`);
        return ProductSchema.parseAsync(res);
    }

    public async getProductScheduleSlots(slug: string): Promise<ScheduleSlotDto[]> {
        const res = await this.get(`${this.base_url}/schedule-slots/${slug}/`);
        return ScheduleSlotSchema.array().parseAsync(res);
    }

    public async getProductCardsOnHomepage(): Promise<ProductCardOnHomepageDto[]> {
        const res = await this.get(`${this.base_url}/products/cards/`);
        return ProductCardOnHomepageSchema.array().parseAsync(res);
    }

    public async getProductCardsInCategory(slug: string): Promise<ProductCardDto[]> {
        const res = await this.get(`${this.base_url}/products/cards/categories/${slug}/`);
        return ProductCardSchema.array().parseAsync(res);
    }

    public async getProductCardsInGroup(slug: string): Promise<ProductCardDto[]> {
        const res = await this.get(`${this.base_url}/products/cards/groups/${slug}/`);
        return ProductCardSchema.array().parseAsync(res);
    }

    public async getProductCardsWithTag(slug: string): Promise<ProductCardDto[]> {
        const res = await this.get(`${this.base_url}/products/cards/tags/${slug}/`);
        return ProductCardSchema.array().parseAsync(res);
    }

    public async getProductCardsWithBadge(slug: string): Promise<ProductCardDto[]> {
        const res = await this.get(`${this.base_url}/products/cards/badges/${slug}/`);
        return ProductCardSchema.array().parseAsync(res);
    }

    public async getProductCardsOnDate(timestamp: UnixTimestamp): Promise<ProductCardDto[]> {
        const res = await this.get(`${this.base_url}/products/cards/on/${timestamp.toUnixTimestamp()}/`);
        return ProductCardSchema.array().parseAsync(res);
    }
}
