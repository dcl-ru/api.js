import {z} from 'zod';

export const CategorySchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    nameSingular: z.string(),
    namePlural: z.string(),
});

export type CategoryDto = z.infer<typeof CategorySchema>;

export enum CardTypes {
    Regular = 1,
    Main = 2,
    Featured = 3,
}
export const CardTypesEnumSchema = z.nativeEnum(CardTypes);

export const GroupSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
    cardType: CardTypesEnumSchema,
});

export type GroupDto = z.infer<typeof GroupSchema>;


export const TagSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
});

export type TagDto = z.infer<typeof TagSchema>;

export const BadgeSchema = z.object({
    id: z.coerce.number(),
    slug: z.string(),
    name: z.string(),
    color: z.string(),
});

export type BadgeDto = z.infer<typeof BadgeSchema>;

export const CategoriesGroupsTagsBadgesSchema = z.object({
    categories: CategorySchema.array(),
    groups: GroupSchema.array(),
    tags: TagSchema.array(),
    badges: BadgeSchema.array(),
});

export type CategoriesGroupsTagsBadgesDto = z.infer<typeof CategoriesGroupsTagsBadgesSchema>;
