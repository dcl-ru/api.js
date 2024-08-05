"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => DclApi
});
module.exports = __toCommonJS(src_exports);
var import_crypto = require("crypto");

// src/dtos/fronts.ts
var import_zod = require("zod");
var CategorySchema = import_zod.z.object({
  id: import_zod.z.coerce.number(),
  slug: import_zod.z.string(),
  nameSingular: import_zod.z.string(),
  namePlural: import_zod.z.string()
});
var CardTypes = /* @__PURE__ */ ((CardTypes2) => {
  CardTypes2[CardTypes2["Regular"] = 1] = "Regular";
  CardTypes2[CardTypes2["Main"] = 2] = "Main";
  CardTypes2[CardTypes2["Featured"] = 3] = "Featured";
  return CardTypes2;
})(CardTypes || {});
var CardTypesEnumSchema = import_zod.z.nativeEnum(CardTypes);
var GroupSchema = import_zod.z.object({
  id: import_zod.z.coerce.number(),
  slug: import_zod.z.string(),
  name: import_zod.z.string(),
  cardType: CardTypesEnumSchema
});
var TagSchema = import_zod.z.object({
  id: import_zod.z.coerce.number(),
  slug: import_zod.z.string(),
  name: import_zod.z.string()
});
var BadgeSchema = import_zod.z.object({
  id: import_zod.z.coerce.number(),
  slug: import_zod.z.string(),
  name: import_zod.z.string(),
  color: import_zod.z.string()
});
var CategoriesGroupsTagsBadgesSchema = import_zod.z.object({
  categories: CategorySchema.array(),
  groups: GroupSchema.array(),
  tags: TagSchema.array(),
  badges: BadgeSchema.array()
});

// src/dtos/products.ts
var import_zod2 = require("zod");
var SaleSchemas = /* @__PURE__ */ ((SaleSchemas2) => {
  SaleSchemas2[SaleSchemas2["Free"] = 1] = "Free";
  SaleSchemas2[SaleSchemas2["Sale"] = 2] = "Sale";
  SaleSchemas2[SaleSchemas2["Registration"] = 3] = "Registration";
  SaleSchemas2[SaleSchemas2["ExternalSale"] = 4] = "ExternalSale";
  SaleSchemas2[SaleSchemas2["ExternalRegistration"] = 5] = "ExternalRegistration";
  SaleSchemas2[SaleSchemas2["Onsite"] = 6] = "Onsite";
  return SaleSchemas2;
})(SaleSchemas || {});
var SaleSchemasEnumSchema = import_zod2.z.nativeEnum(SaleSchemas);
var ImageTypes = /* @__PURE__ */ ((ImageTypes2) => {
  ImageTypes2[ImageTypes2["Original"] = 1] = "Original";
  ImageTypes2[ImageTypes2["Micro"] = 2] = "Micro";
  ImageTypes2[ImageTypes2["Thumbnail"] = 3] = "Thumbnail";
  ImageTypes2[ImageTypes2["Card"] = 4] = "Card";
  ImageTypes2[ImageTypes2["Regular"] = 5] = "Regular";
  ImageTypes2[ImageTypes2["Background"] = 6] = "Background";
  return ImageTypes2;
})(ImageTypes || {});
var ImageTypesEnumSchema = import_zod2.z.nativeEnum(ImageTypes);
var AccessTypes = /* @__PURE__ */ ((AccessTypes2) => {
  AccessTypes2[AccessTypes2["Free"] = 1] = "Free";
  AccessTypes2[AccessTypes2["Paid"] = 2] = "Paid";
  AccessTypes2[AccessTypes2["Registration"] = 3] = "Registration";
  return AccessTypes2;
})(AccessTypes || {});
var AccessTypesEnumSchema = import_zod2.z.nativeEnum(AccessTypes);
var PeriodSchema = import_zod2.z.object({
  from: import_zod2.z.coerce.date().nullable(),
  until: import_zod2.z.coerce.date().nullable()
});
var ImageSchema = import_zod2.z.object({
  id: import_zod2.z.coerce.number(),
  type: ImageTypesEnumSchema,
  url: import_zod2.z.string(),
  altText: import_zod2.z.string(),
  copyright: import_zod2.z.string().nullable(),
  copyrightUrl: import_zod2.z.string().nullable()
});
var GeoSchema = import_zod2.z.object({
  lat: import_zod2.z.coerce.number(),
  lon: import_zod2.z.coerce.number()
});
var WorkingHourBreakSchema = import_zod2.z.object({
  id: import_zod2.z.coerce.number(),
  period: PeriodSchema
});
var WorkingHourSchema = import_zod2.z.object({
  id: import_zod2.z.coerce.number(),
  dayOfWeek: import_zod2.z.coerce.number(),
  period: PeriodSchema,
  breaks: WorkingHourBreakSchema
});
var OpenPeriodExclusionSchema = import_zod2.z.object({
  id: import_zod2.z.coerce.number(),
  period: PeriodSchema
});
var OpenPeriodSchema = import_zod2.z.object({
  id: import_zod2.z.coerce.number(),
  period: PeriodSchema,
  exclusions: OpenPeriodExclusionSchema.array(),
  workingHours: WorkingHourSchema.array()
});
var InventoryItemSchema = import_zod2.z.object({
  id: import_zod2.z.coerce.number(),
  slug: import_zod2.z.string(),
  name: import_zod2.z.string(),
  category: CategorySchema,
  description: import_zod2.z.string(),
  accessType: AccessTypesEnumSchema,
  ageRating: import_zod2.z.coerce.number(),
  address: import_zod2.z.string(),
  geo: GeoSchema,
  mapUrl: import_zod2.z.string(),
  outside: import_zod2.z.coerce.boolean(),
  animalsAllowed: import_zod2.z.coerce.boolean(),
  animalsRecommended: import_zod2.z.coerce.boolean(),
  kidsAllowed: import_zod2.z.coerce.boolean(),
  kidsRecommended: import_zod2.z.coerce.boolean(),
  featured: import_zod2.z.coerce.boolean(),
  images: ImageSchema.array(),
  openPeriods: OpenPeriodSchema.array()
});
var InventoryItemFirstSchema = import_zod2.z.object({
  id: import_zod2.z.coerce.number(),
  slug: import_zod2.z.string(),
  name: import_zod2.z.string()
});
var ProductSchema = import_zod2.z.object({
  id: import_zod2.z.coerce.number(),
  slug: import_zod2.z.string(),
  name: import_zod2.z.string(),
  saleSchema: SaleSchemasEnumSchema,
  externalUrl: import_zod2.z.string().nullable(),
  categories: CategorySchema.array(),
  groups: GroupSchema.array(),
  tags: TagSchema.array(),
  badges: BadgeSchema.array(),
  ageRating: import_zod2.z.coerce.number(),
  scheduleSlotNext: PeriodSchema,
  scheduleSlotsMulti: import_zod2.z.coerce.boolean(),
  lead: import_zod2.z.string().nullable(),
  description: import_zod2.z.string().nullable(),
  pushka: import_zod2.z.coerce.boolean(),
  paused: import_zod2.z.coerce.boolean(),
  soldOut: import_zod2.z.coerce.boolean(),
  images: ImageSchema.array(),
  inventoryItems: InventoryItemSchema.array()
});
var ProductCardSchema = import_zod2.z.object({
  id: import_zod2.z.coerce.number(),
  slug: import_zod2.z.string(),
  name: import_zod2.z.string(),
  ageRating: import_zod2.z.coerce.number(),
  saleSchema: SaleSchemasEnumSchema,
  featured: import_zod2.z.coerce.boolean(),
  banner: import_zod2.z.coerce.boolean(),
  pushka: import_zod2.z.coerce.boolean(),
  paused: import_zod2.z.coerce.boolean(),
  soldOut: import_zod2.z.coerce.boolean(),
  scheduleSlotNext: PeriodSchema,
  scheduleSlotsMulti: import_zod2.z.coerce.boolean(),
  image: ImageSchema.nullable(),
  inventoryItemFirst: InventoryItemFirstSchema,
  inventoryItemsMulti: import_zod2.z.coerce.boolean(),
  priceFrom: import_zod2.z.coerce.number().nullable(),
  categories: CategorySchema.array(),
  groups: GroupSchema.array(),
  tags: TagSchema.array(),
  badges: BadgeSchema.array()
});
var ProductCardOnHomepageSchema = import_zod2.z.object({
  id: import_zod2.z.coerce.number(),
  slug: import_zod2.z.string(),
  name: import_zod2.z.string(),
  ageRating: import_zod2.z.coerce.number(),
  saleSchema: SaleSchemasEnumSchema,
  featured: import_zod2.z.coerce.boolean(),
  banner: import_zod2.z.coerce.boolean(),
  pushka: import_zod2.z.coerce.boolean(),
  paused: import_zod2.z.coerce.boolean(),
  soldOut: import_zod2.z.coerce.boolean(),
  scheduleSlotNext: PeriodSchema,
  scheduleSlotsMulti: import_zod2.z.coerce.boolean(),
  scheduleSlotToday: PeriodSchema.nullable(),
  scheduleSlotsTodayMulti: import_zod2.z.coerce.boolean().nullable(),
  scheduleSlotTomorrow: PeriodSchema.nullable(),
  scheduleSlotsTomorrowMulti: import_zod2.z.coerce.boolean().nullable(),
  scheduleSlotWeekend: PeriodSchema.nullable(),
  scheduleSlotsWeekendMulti: import_zod2.z.coerce.boolean().nullable(),
  image: ImageSchema.nullable(),
  inventoryItemFirst: InventoryItemFirstSchema,
  inventoryItemsMulti: import_zod2.z.coerce.boolean(),
  priceFrom: import_zod2.z.coerce.number().nullable(),
  categories: CategorySchema.array(),
  groups: GroupSchema.array(),
  tags: TagSchema.array(),
  badges: BadgeSchema.array()
});
var ScheduleSlotSchema = import_zod2.z.object({
  id: import_zod2.z.coerce.number(),
  slot: PeriodSchema,
  capacity: import_zod2.z.coerce.number().nullable(),
  capacityBooked: import_zod2.z.coerce.number().nullable(),
  capacityAvailable: import_zod2.z.coerce.number().nullable(),
  soldOut: import_zod2.z.coerce.number().nullable()
});

// src/dtos/errors.ts
var import_zod3 = require("zod");
var APIErrorSchema = import_zod3.z.object({
  code: import_zod3.z.coerce.number(),
  error: import_zod3.z.string()
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
    const hashedPayload = (0, import_crypto.createHash)("sha256").update(new TextEncoder().encode(payload)).digest("hex");
    const canonicalRequest = `${request.method.trim()}
${canonicalUri}
${canonicalQueryString}
${canonicalHeaders}
${signedHeaders}
${hashedPayload}`;
    return (0, import_crypto.createHmac)("sha256", this.secret).update(new TextEncoder().encode(canonicalRequest)).digest("hex");
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
//# sourceMappingURL=index.cjs.map