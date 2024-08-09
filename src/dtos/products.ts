import {z} from 'zod';
import {BadgeSchema, CategorySchema, GroupSchema, TagSchema} from './fronts.js';

export enum SaleSchemas {
    Free = 1,
    Sale = 2,
    Registration = 3,
    ExternalSale = 4,
    ExternalRegistration = 5,
    Onsite = 6,
}

export const SaleSchemasEnumSchema = z.nativeEnum(SaleSchemas);

export enum ImageTypes {
    Original = 1,
    Micro = 2,
    Thumbnail = 3,
    Card = 4,
    Regular = 5,
    Background = 6,
}

export const ImageTypesEnumSchema = z.nativeEnum(ImageTypes);

export enum AccessTypes {
    Free = 1,
    Paid = 2,
    Registration = 3,
}

export const AccessTypesEnumSchema = z.nativeEnum(AccessTypes);

export enum ScheduleSlotTariffsStatuses {
    AwaitingStart = 1,
    Active = 2,
    SoldOut = 3,
}

export const ScheduleSlotTariffsStatusesEnumSchema = z.nativeEnum(ScheduleSlotTariffsStatuses);

export enum SoonFilter {
    Today = 'Сегодня',
    Tomorrow = 'Завтра',
    Weekend = 'Выходные'
}

export const SoonFilterEnumSchema = z.nativeEnum(SoonFilter);

export const PeriodSchema = z.object({
    from: z.coerce.date().nullable(),
    until: z.coerce.date().nullable(),
});

export type PeriodDto = z.infer<typeof PeriodSchema>;

export const PeriodTimeSchema = z.object({
    from: z.string().nullable(),
    until: z.string().nullable(),
});

export type PeriodTimeDto = z.infer<typeof PeriodTimeSchema>;

export const ImageSchema = z.object({
    id: z.coerce.number(),
    type: ImageTypesEnumSchema,
    url: z.string(),
    altText: z.string(),
    copyright: z.string().nullable(),
    copyrightUrl: z.string().nullable(),
});

export type ImageDto = z.infer<typeof ImageSchema>;

export const GeoSchema = z.object({
    lat: z.coerce.number(),
    lon: z.coerce.number(),
});

export type GeoDto = z.infer<typeof GeoSchema>;

export const WorkingHourBreakSchema = z.object({
    id: z.coerce.number(),
    period: PeriodTimeSchema,
});

export type WorkingHourBreakDto = z.infer<typeof WorkingHourBreakSchema>;

export const WorkingHourSchema = z.object({
    id: z.coerce.number(),
    dayOfWeek: z.coerce.number(),
    period: PeriodTimeSchema,
    breaks: WorkingHourBreakSchema.array(),
});

export type WorkingHourDto = z.infer<typeof WorkingHourSchema>;

export const OpenPeriodExclusionSchema = z.object({
    id: z.coerce.number(),
    period: PeriodSchema,
});

export type OpenPeriodExclusionDto = z.infer<typeof OpenPeriodExclusionSchema>;

export const OpenPeriodSchema = z.object({
    id: z.coerce.number(),
    period: PeriodSchema,
    exclusions: OpenPeriodExclusionSchema.array(),
    workingHours: WorkingHourSchema.array(),
});

export type OpenPeriodDto = z.infer<typeof OpenPeriodSchema>;

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

export type InventoryItemDto = z.infer<typeof InventoryItemSchema>;

export const InventoryItemFirstSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
});

export type InventoryItemFirstDto = z.infer<typeof InventoryItemFirstSchema>;

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
    priceFrom: z.coerce.number().nullable(),
    soldOut: z.coerce.boolean(),
    images: ImageSchema.array(),
    inventoryItems: InventoryItemSchema.array(),
});

export type ProductDto = z.infer<typeof ProductSchema>;

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
    priceFrom: z.coerce.number().nullable(),
    soldOut: z.coerce.boolean(),
    scheduleSlotNext: PeriodSchema,
    scheduleSlotsMulti: z.coerce.boolean(),
    image: ImageSchema.nullable(),
    inventoryItemFirst: InventoryItemFirstSchema,
    inventoryItemsMulti: z.coerce.boolean(),
    categories: CategorySchema.array(),
    groups: GroupSchema.array(),
    tags: TagSchema.array(),
    badges: BadgeSchema.array(),
});

export type ProductCardDto = z.infer<typeof ProductCardSchema>;

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
    priceFrom: z.coerce.number().nullable(),
    soldOut: z.coerce.boolean(),
    image: ImageSchema.nullable(),
    inventoryItemFirst: InventoryItemFirstSchema,
    inventoryItemsMulti: z.coerce.boolean(),
    categories: CategorySchema.array(),
    groups: GroupSchema.array(),
    tags: TagSchema.array(),
    badges: BadgeSchema.array(),
    scheduleSlotNext: PeriodSchema,
    scheduleSlotsMulti: z.coerce.boolean(),
    scheduleSlotToday: PeriodSchema.nullable(),
    scheduleSlotsTodayMulti: z.coerce.boolean().nullable(),
    scheduleSlotTomorrow: PeriodSchema.nullable(),
    scheduleSlotsTomorrowMulti: z.coerce.boolean().nullable(),
    scheduleSlotWeekend: PeriodSchema.nullable(),
    scheduleSlotsWeekendMulti: z.coerce.boolean().nullable(),
});

export type ProductCardOnHomepageDto = z.infer<typeof ProductCardOnHomepageSchema>;

export const ScheduleSlotSchema = z.object({
    id: z.coerce.number(),
    slot: PeriodSchema,
    capacityAvailable: z.coerce.number().nullable(),
    soldOut: z.coerce.boolean().nullable(),
});

export type ScheduleSlotDto = z.infer<typeof ScheduleSlotSchema>;

export const TariffSchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    nameShort: z.string(),
    nameFiscal: z.string(),
    description: z.string().nullable(),
    price: z.coerce.number(),
    vatName: z.string().nullable(),
    vatValue: z.coerce.number().nullable(),
    multiplier: z.coerce.number(),
    firstEnterWindow: PeriodSchema.nullable(),
    lifetimeWindowAfterFirstEnter: PeriodSchema.nullable(),
    exitEnterAllowed: z.coerce.boolean(),
    ticketGrouping: z.coerce.boolean(),
    limitPerPerson: z.coerce.number().nullable(),
    quotaAvailable: z.coerce.number().nullable(),
    soldOut: z.coerce.boolean(),
});
export type TariffDto = z.infer<typeof TariffSchema>;

export const TariffGroupSchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    slug: z.string(),
    tariffs: TariffSchema.array(),
});
export type TariffGroupDto = z.infer<typeof TariffGroupSchema>;

export const ScheduleSlotTariffsSchema = z.object({
    status: ScheduleSlotTariffsStatusesEnumSchema,
    startOn: z.coerce.date().nullable(),
    groups: TariffGroupSchema.array(),
});
export type ScheduleSlotTariffsDto = z.infer<typeof ScheduleSlotTariffsSchema>;
