import { z } from 'zod';
export const CategorySchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    nameSingular: z.string(),
    namePlural: z.string(),
});
export var CardTypes;
(function (CardTypes) {
    CardTypes[CardTypes["Regular"] = 1] = "Regular";
    CardTypes[CardTypes["Main"] = 2] = "Main";
    CardTypes[CardTypes["Featured"] = 3] = "Featured";
})(CardTypes || (CardTypes = {}));
export const CardTypesEnumSchema = z.nativeEnum(CardTypes);
export const GroupSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
    cardType: CardTypesEnumSchema,
});
export const TagSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
});
export const BadgeSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
    color: z.string(),
});
export const CategoriesGroupsTagsBadgesSchema = z.object({
    categories: CategorySchema.array(),
    groups: GroupSchema.array(),
    tags: TagSchema.array(),
    badges: BadgeSchema.array(),
});
//# sourceMappingURL=fronts.js.map