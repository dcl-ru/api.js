import { z } from 'zod';
import { BadgeSchema, CategorySchema, GroupSchema, TagSchema } from './fronts';
export var SaleSchemas;
(function (SaleSchemas) {
    SaleSchemas[SaleSchemas["Free"] = 1] = "Free";
    SaleSchemas[SaleSchemas["Sale"] = 2] = "Sale";
    SaleSchemas[SaleSchemas["Registration"] = 3] = "Registration";
    SaleSchemas[SaleSchemas["ExternalSale"] = 4] = "ExternalSale";
    SaleSchemas[SaleSchemas["ExternalRegistration"] = 5] = "ExternalRegistration";
    SaleSchemas[SaleSchemas["Onsite"] = 6] = "Onsite";
})(SaleSchemas || (SaleSchemas = {}));
export const SaleSchemasEnumSchema = z.nativeEnum(SaleSchemas);
export var ImageTypes;
(function (ImageTypes) {
    ImageTypes[ImageTypes["Original"] = 1] = "Original";
    ImageTypes[ImageTypes["Micro"] = 2] = "Micro";
    ImageTypes[ImageTypes["Thumbnail"] = 3] = "Thumbnail";
    ImageTypes[ImageTypes["Card"] = 4] = "Card";
    ImageTypes[ImageTypes["Regular"] = 5] = "Regular";
    ImageTypes[ImageTypes["Background"] = 6] = "Background";
})(ImageTypes || (ImageTypes = {}));
export const ImageTypesEnumSchema = z.nativeEnum(ImageTypes);
export var AccessTypes;
(function (AccessTypes) {
    AccessTypes[AccessTypes["Free"] = 1] = "Free";
    AccessTypes[AccessTypes["Paid"] = 2] = "Paid";
    AccessTypes[AccessTypes["Registration"] = 3] = "Registration";
})(AccessTypes || (AccessTypes = {}));
export const AccessTypesEnumSchema = z.nativeEnum(AccessTypes);
export const PeriodSchema = z.object({
    from: z.coerce.date().nullable(),
    until: z.coerce.date().nullable(),
});
export const ImageSchema = z.object({
    id: z.coerce.number(),
    type: ImageTypesEnumSchema,
    url: z.string(),
    altText: z.string(),
    copyright: z.string().nullable(),
    copyrightUrl: z.string().nullable(),
});
export const GeoSchema = z.object({
    lat: z.coerce.number(),
    lon: z.coerce.number(),
});
export const WorkingHourBreakSchema = z.object({
    id: z.coerce.number(),
    period: PeriodSchema,
});
export const WorkingHourSchema = z.object({
    id: z.coerce.number(),
    dayOfWeek: z.coerce.number(),
    period: PeriodSchema,
    breaks: WorkingHourBreakSchema,
});
export const OpenPeriodExclusionSchema = z.object({
    id: z.coerce.number(),
    period: PeriodSchema,
});
export const OpenPeriodSchema = z.object({
    id: z.coerce.number(),
    period: PeriodSchema,
    exclusions: OpenPeriodExclusionSchema.array(),
    workingHours: WorkingHourSchema.array(),
});
export const InventoryItemSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
    category: CategorySchema,
    description: z.string(),
    accessType: AccessTypesEnumSchema,
    ageRating: z.coerce.number(),
    address: z.string(),
    geo: GeoSchema,
    mapUrl: z.string(),
    outside: z.coerce.boolean(),
    animalsAllowed: z.coerce.boolean(),
    animalsRecommended: z.coerce.boolean(),
    kidsAllowed: z.coerce.boolean(),
    kidsRecommended: z.coerce.boolean(),
    featured: z.coerce.boolean(),
    images: ImageSchema.array(),
    openPeriods: OpenPeriodSchema.array(),
});
export const InventoryItemFirstSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
});
export const ProductSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
    saleSchema: SaleSchemasEnumSchema,
    externalUrl: z.string().nullable(),
    categories: CategorySchema.array(),
    groups: GroupSchema.array(),
    tags: TagSchema.array(),
    badges: BadgeSchema.array(),
    ageRating: z.coerce.number(),
    scheduleSlotNext: PeriodSchema,
    scheduleSlotsMulti: z.coerce.boolean(),
    lead: z.string().nullable(),
    description: z.string().nullable(),
    pushka: z.coerce.boolean(),
    paused: z.coerce.boolean(),
    soldOut: z.coerce.boolean(),
    images: ImageSchema.array(),
    inventoryItems: InventoryItemSchema.array(),
});
export const ProductCardSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
    ageRating: z.coerce.number(),
    saleSchema: SaleSchemasEnumSchema,
    featured: z.coerce.boolean(),
    banner: z.coerce.boolean(),
    pushka: z.coerce.boolean(),
    paused: z.coerce.boolean(),
    soldOut: z.coerce.boolean(),
    scheduleSlotNext: PeriodSchema,
    scheduleSlotsMulti: z.coerce.boolean(),
    image: ImageSchema.nullable(),
    inventoryItemFirst: InventoryItemFirstSchema,
    inventoryItemsMulti: z.coerce.boolean(),
    priceFrom: z.coerce.number().nullable(),
    categories: CategorySchema.array(),
    groups: GroupSchema.array(),
    tags: TagSchema.array(),
    badges: BadgeSchema.array(),
});
export const ProductCardOnHomepageSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
    ageRating: z.coerce.number(),
    saleSchema: SaleSchemasEnumSchema,
    featured: z.coerce.boolean(),
    banner: z.coerce.boolean(),
    pushka: z.coerce.boolean(),
    paused: z.coerce.boolean(),
    soldOut: z.coerce.boolean(),
    scheduleSlotNext: PeriodSchema,
    scheduleSlotsMulti: z.coerce.boolean(),
    scheduleSlotToday: PeriodSchema.nullable(),
    scheduleSlotsTodayMulti: z.coerce.boolean().nullable(),
    scheduleSlotTomorrow: PeriodSchema.nullable(),
    scheduleSlotsTomorrowMulti: z.coerce.boolean().nullable(),
    scheduleSlotWeekend: PeriodSchema.nullable(),
    scheduleSlotsWeekendMulti: z.coerce.boolean().nullable(),
    image: ImageSchema.nullable(),
    inventoryItemFirst: InventoryItemFirstSchema,
    inventoryItemsMulti: z.coerce.boolean(),
    priceFrom: z.coerce.number().nullable(),
    categories: CategorySchema.array(),
    groups: GroupSchema.array(),
    tags: TagSchema.array(),
    badges: BadgeSchema.array(),
});
export const ScheduleSlotSchema = z.object({
    id: z.coerce.number(),
    slot: PeriodSchema,
    capacity: z.coerce.number().nullable(),
    capacityBooked: z.coerce.number().nullable(),
    capacityAvailable: z.coerce.number().nullable(),
    soldOut: z.coerce.number().nullable(),
});
//# sourceMappingURL=products.js.map