// src/index.ts
import { createHash, createHmac } from "crypto";

// src/dtos/fronts.ts
import { z } from "zod";
var CategorySchema = z.object({
  id: z.coerce.number(),
  slug: z.string(),
  nameSingular: z.string(),
  namePlural: z.string()
});
var CardTypes = /* @__PURE__ */ ((CardTypes2) => {
  CardTypes2[CardTypes2["Regular"] = 1] = "Regular";
  CardTypes2[CardTypes2["Main"] = 2] = "Main";
  CardTypes2[CardTypes2["Featured"] = 3] = "Featured";
  return CardTypes2;
})(CardTypes || {});
var CardTypesEnumSchema = z.nativeEnum(CardTypes);
var GroupSchema = z.object({
  id: z.coerce.number(),
  slug: z.string(),
  name: z.string(),
  cardType: CardTypesEnumSchema
});
var TagSchema = z.object({
  id: z.coerce.number(),
  slug: z.string(),
  name: z.string()
});
var BadgeSchema = z.object({
  id: z.coerce.number(),
  slug: z.string(),
  name: z.string(),
  color: z.string()
});
var CategoriesGroupsTagsBadgesSchema = z.object({
  categories: CategorySchema.array(),
  groups: GroupSchema.array(),
  tags: TagSchema.array(),
  badges: BadgeSchema.array()
});

// src/dtos/products.ts
import { z as z2 } from "zod";
var SaleSchemas = /* @__PURE__ */ ((SaleSchemas2) => {
  SaleSchemas2[SaleSchemas2["Free"] = 1] = "Free";
  SaleSchemas2[SaleSchemas2["Sale"] = 2] = "Sale";
  SaleSchemas2[SaleSchemas2["Registration"] = 3] = "Registration";
  SaleSchemas2[SaleSchemas2["ExternalSale"] = 4] = "ExternalSale";
  SaleSchemas2[SaleSchemas2["ExternalRegistration"] = 5] = "ExternalRegistration";
  SaleSchemas2[SaleSchemas2["Onsite"] = 6] = "Onsite";
  return SaleSchemas2;
})(SaleSchemas || {});
var SaleSchemasEnumSchema = z2.nativeEnum(SaleSchemas);
var ImageTypes = /* @__PURE__ */ ((ImageTypes2) => {
  ImageTypes2[ImageTypes2["Original"] = 1] = "Original";
  ImageTypes2[ImageTypes2["Micro"] = 2] = "Micro";
  ImageTypes2[ImageTypes2["Thumbnail"] = 3] = "Thumbnail";
  ImageTypes2[ImageTypes2["Card"] = 4] = "Card";
  ImageTypes2[ImageTypes2["Regular"] = 5] = "Regular";
  ImageTypes2[ImageTypes2["Background"] = 6] = "Background";
  return ImageTypes2;
})(ImageTypes || {});
var ImageTypesEnumSchema = z2.nativeEnum(ImageTypes);
var AccessTypes = /* @__PURE__ */ ((AccessTypes2) => {
  AccessTypes2[AccessTypes2["Free"] = 1] = "Free";
  AccessTypes2[AccessTypes2["Paid"] = 2] = "Paid";
  AccessTypes2[AccessTypes2["Registration"] = 3] = "Registration";
  return AccessTypes2;
})(AccessTypes || {});
var AccessTypesEnumSchema = z2.nativeEnum(AccessTypes);
var PeriodSchema = z2.object({
  from: z2.coerce.date().nullable(),
  until: z2.coerce.date().nullable()
});
var ImageSchema = z2.object({
  id: z2.coerce.number(),
  type: ImageTypesEnumSchema,
  url: z2.string(),
  altText: z2.string(),
  copyright: z2.string().nullable(),
  copyrightUrl: z2.string().nullable()
});
var GeoSchema = z2.object({
  lat: z2.coerce.number(),
  lon: z2.coerce.number()
});
var WorkingHourBreakSchema = z2.object({
  id: z2.coerce.number(),
  period: PeriodSchema
});
var WorkingHourSchema = z2.object({
  id: z2.coerce.number(),
  dayOfWeek: z2.coerce.number(),
  period: PeriodSchema,
  breaks: WorkingHourBreakSchema
});
var OpenPeriodExclusionSchema = z2.object({
  id: z2.coerce.number(),
  period: PeriodSchema
});
var OpenPeriodSchema = z2.object({
  id: z2.coerce.number(),
  period: PeriodSchema,
  exclusions: OpenPeriodExclusionSchema.array(),
  workingHours: WorkingHourSchema.array()
});
var InventoryItemSchema = z2.object({
  id: z2.coerce.number(),
  slug: z2.string(),
  name: z2.string(),
  category: CategorySchema,
  description: z2.string(),
  accessType: AccessTypesEnumSchema,
  ageRating: z2.coerce.number(),
  address: z2.string(),
  geo: GeoSchema,
  mapUrl: z2.string(),
  outside: z2.coerce.boolean(),
  animalsAllowed: z2.coerce.boolean(),
  animalsRecommended: z2.coerce.boolean(),
  kidsAllowed: z2.coerce.boolean(),
  kidsRecommended: z2.coerce.boolean(),
  featured: z2.coerce.boolean(),
  images: ImageSchema.array(),
  openPeriods: OpenPeriodSchema.array()
});
var InventoryItemFirstSchema = z2.object({
  id: z2.coerce.number(),
  slug: z2.string(),
  name: z2.string()
});
var ProductSchema = z2.object({
  id: z2.coerce.number(),
  slug: z2.string(),
  name: z2.string(),
  saleSchema: SaleSchemasEnumSchema,
  externalUrl: z2.string().nullable(),
  categories: CategorySchema.array(),
  groups: GroupSchema.array(),
  tags: TagSchema.array(),
  badges: BadgeSchema.array(),
  ageRating: z2.coerce.number(),
  scheduleSlotNext: PeriodSchema,
  scheduleSlotsMulti: z2.coerce.boolean(),
  lead: z2.string().nullable(),
  description: z2.string().nullable(),
  pushka: z2.coerce.boolean(),
  paused: z2.coerce.boolean(),
  soldOut: z2.coerce.boolean(),
  images: ImageSchema.array(),
  inventoryItems: InventoryItemSchema.array()
});
var ProductCardSchema = z2.object({
  id: z2.coerce.number(),
  slug: z2.string(),
  name: z2.string(),
  ageRating: z2.coerce.number(),
  saleSchema: SaleSchemasEnumSchema,
  featured: z2.coerce.boolean(),
  banner: z2.coerce.boolean(),
  pushka: z2.coerce.boolean(),
  paused: z2.coerce.boolean(),
  soldOut: z2.coerce.boolean(),
  scheduleSlotNext: PeriodSchema,
  scheduleSlotsMulti: z2.coerce.boolean(),
  image: ImageSchema.nullable(),
  inventoryItemFirst: InventoryItemFirstSchema,
  inventoryItemsMulti: z2.coerce.boolean(),
  priceFrom: z2.coerce.number().nullable(),
  categories: CategorySchema.array(),
  groups: GroupSchema.array(),
  tags: TagSchema.array(),
  badges: BadgeSchema.array()
});
var ProductCardOnHomepageSchema = z2.object({
  id: z2.coerce.number(),
  slug: z2.string(),
  name: z2.string(),
  ageRating: z2.coerce.number(),
  saleSchema: SaleSchemasEnumSchema,
  featured: z2.coerce.boolean(),
  banner: z2.coerce.boolean(),
  pushka: z2.coerce.boolean(),
  paused: z2.coerce.boolean(),
  soldOut: z2.coerce.boolean(),
  scheduleSlotNext: PeriodSchema,
  scheduleSlotsMulti: z2.coerce.boolean(),
  scheduleSlotToday: PeriodSchema.nullable(),
  scheduleSlotsTodayMulti: z2.coerce.boolean().nullable(),
  scheduleSlotTomorrow: PeriodSchema.nullable(),
  scheduleSlotsTomorrowMulti: z2.coerce.boolean().nullable(),
  scheduleSlotWeekend: PeriodSchema.nullable(),
  scheduleSlotsWeekendMulti: z2.coerce.boolean().nullable(),
  image: ImageSchema.nullable(),
  inventoryItemFirst: InventoryItemFirstSchema,
  inventoryItemsMulti: z2.coerce.boolean(),
  priceFrom: z2.coerce.number().nullable(),
  categories: CategorySchema.array(),
  groups: GroupSchema.array(),
  tags: TagSchema.array(),
  badges: BadgeSchema.array()
});
var ScheduleSlotSchema = z2.object({
  id: z2.coerce.number(),
  slot: PeriodSchema,
  capacity: z2.coerce.number().nullable(),
  capacityBooked: z2.coerce.number().nullable(),
  capacityAvailable: z2.coerce.number().nullable(),
  soldOut: z2.coerce.number().nullable()
});

// src/dtos/errors.ts
import { z as z3 } from "zod";
var APIErrorSchema = z3.object({
  code: z3.coerce.number(),
  error: z3.string()
});

// src/error.ts
var APIError = class _APIError extends Error {
  code;
  constructor(apiError) {
    super(apiError.error);
    this.code = apiError.code;
    Error.captureStackTrace(this, _APIError);
  }
};

// src/index.ts
var VERSION = "3";
var DclApi = class {
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
    const canonicalHeaders = [...request.headers.keys()].sort().reduce((acc, obj) => acc += `${obj.toLowerCase().trim()}:${request.headers.get(obj)?.toLowerCase().trim().replace(/\s\s+/g, " ")}
`, "").trim();
    const signedHeaders = [...request.headers.keys()].sort().reduce((acc, obj) => acc += `${obj.toLowerCase().trim()};`, "").slice(0, -1).trim();
    const payload = request.body ? JSON.stringify(request.body) : "";
    const hashedPayload = createHash("sha256").update(new TextEncoder().encode(payload)).digest("hex");
    const canonicalRequest = `${request.method.trim()}
${canonicalUri}
${canonicalQueryString}
${canonicalHeaders}
${signedHeaders}
${hashedPayload}`;
    return createHmac("sha256", this.secret).update(new TextEncoder().encode(canonicalRequest)).digest("hex");
  }
  prepareRequest(method, url, body) {
    const headersInit = {
      "Accept": "application/json; charset=UTF-8",
      "X-Front": this.front,
      "X-API-Version": VERSION,
      "X-API-Key": this.key,
      "X-API-Timestamp": (/* @__PURE__ */ new Date()).toISOString(),
      "X-API-Signed-Headers": ""
    };
    const reqInit = {
      method,
      mode: "cors",
      redirect: "follow",
      headers: headersInit,
      body
    };
    const req = new Request(url, reqInit);
    req.headers.set(
      "X-API-Signed-Headers",
      [...req.headers.keys()].sort().reduce((acc, obj) => acc += `${obj.toLowerCase().trim()};`, "").slice(0, -1).trim()
    );
    const signature = this.signRequest(req);
    req.headers.set("X-API-Signature", signature);
    return req;
  }
  async get(url) {
    const req = this.prepareRequest("GET", url, null);
    const res = await fetch(req);
    if (res.ok) {
      return res.json();
    } else {
      const ae = await APIErrorSchema.parseAsync(await res.json());
      throw new APIError(ae);
    }
  }
  async create(fetch2, url, body) {
    const req = this.prepareRequest("POST", url, JSON.stringify(body));
    const res = await fetch2(req);
    if (res.ok) {
      return res.json();
    } else {
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
};
export {
  DclApi as default
};
//# sourceMappingURL=index.js.map