import { z } from 'zod';
export declare const CategorySchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    nameSingular: z.ZodString;
    namePlural: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    slug: string;
    nameSingular: string;
    namePlural: string;
}, {
    id: number;
    slug: string;
    nameSingular: string;
    namePlural: string;
}>;
export type CategoryDto = z.infer<typeof CategorySchema>;
export declare enum CardTypes {
    Regular = 1,
    Main = 2,
    Featured = 3
}
export declare const CardTypesEnumSchema: z.ZodNativeEnum<typeof CardTypes>;
export declare const GroupSchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    name: z.ZodString;
    cardType: z.ZodNativeEnum<typeof CardTypes>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    slug: string;
    cardType: CardTypes;
}, {
    name: string;
    id: number;
    slug: string;
    cardType: CardTypes;
}>;
export type GroupDto = z.infer<typeof GroupSchema>;
export declare const TagSchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    slug: string;
}, {
    name: string;
    id: number;
    slug: string;
}>;
export type TagDto = z.infer<typeof TagSchema>;
export declare const BadgeSchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    name: z.ZodString;
    color: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    color: string;
    slug: string;
}, {
    name: string;
    id: number;
    color: string;
    slug: string;
}>;
export type BadgeDto = z.infer<typeof BadgeSchema>;
export declare const CategoriesGroupsTagsBadgesSchema: z.ZodObject<{
    categories: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        nameSingular: z.ZodString;
        namePlural: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }, {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }>, "many">;
    groups: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
        cardType: z.ZodNativeEnum<typeof CardTypes>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        slug: string;
        cardType: CardTypes;
    }, {
        name: string;
        id: number;
        slug: string;
        cardType: CardTypes;
    }>, "many">;
    tags: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        slug: string;
    }, {
        name: string;
        id: number;
        slug: string;
    }>, "many">;
    badges: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        color: string;
        slug: string;
    }, {
        name: string;
        id: number;
        color: string;
        slug: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    groups: {
        name: string;
        id: number;
        slug: string;
        cardType: CardTypes;
    }[];
    categories: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }[];
    tags: {
        name: string;
        id: number;
        slug: string;
    }[];
    badges: {
        name: string;
        id: number;
        color: string;
        slug: string;
    }[];
}, {
    groups: {
        name: string;
        id: number;
        slug: string;
        cardType: CardTypes;
    }[];
    categories: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }[];
    tags: {
        name: string;
        id: number;
        slug: string;
    }[];
    badges: {
        name: string;
        id: number;
        color: string;
        slug: string;
    }[];
}>;
export type CategoriesGroupsTagsBadgesDto = z.infer<typeof CategoriesGroupsTagsBadgesSchema>;
//# sourceMappingURL=fronts.d.ts.map