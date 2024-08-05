import { z } from 'zod';

declare const CategorySchema: z.ZodObject<{
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
type CategoryDto = z.infer<typeof CategorySchema>;
declare enum CardTypes {
    Regular = 1,
    Main = 2,
    Featured = 3
}
declare const GroupSchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    name: z.ZodString;
    cardType: z.ZodNativeEnum<typeof CardTypes>;
}, "strip", z.ZodTypeAny, {
    id: number;
    slug: string;
    name: string;
    cardType: CardTypes;
}, {
    id: number;
    slug: string;
    name: string;
    cardType: CardTypes;
}>;
type GroupDto = z.infer<typeof GroupSchema>;
declare const TagSchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    slug: string;
    name: string;
}, {
    id: number;
    slug: string;
    name: string;
}>;
type TagDto = z.infer<typeof TagSchema>;
declare const BadgeSchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    name: z.ZodString;
    color: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    slug: string;
    name: string;
    color: string;
}, {
    id: number;
    slug: string;
    name: string;
    color: string;
}>;
type BadgeDto = z.infer<typeof BadgeSchema>;
declare const CategoriesGroupsTagsBadgesSchema: z.ZodObject<{
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
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }, {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }>, "many">;
    tags: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        name: string;
    }, {
        id: number;
        slug: string;
        name: string;
    }>, "many">;
    badges: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        name: string;
        color: string;
    }, {
        id: number;
        slug: string;
        name: string;
        color: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    categories: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }[];
    groups: {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }[];
    tags: {
        id: number;
        slug: string;
        name: string;
    }[];
    badges: {
        id: number;
        slug: string;
        name: string;
        color: string;
    }[];
}, {
    categories: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }[];
    groups: {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }[];
    tags: {
        id: number;
        slug: string;
        name: string;
    }[];
    badges: {
        id: number;
        slug: string;
        name: string;
        color: string;
    }[];
}>;
type CategoriesGroupsTagsBadgesDto = z.infer<typeof CategoriesGroupsTagsBadgesSchema>;

declare enum SaleSchemas {
    Free = 1,
    Sale = 2,
    Registration = 3,
    ExternalSale = 4,
    ExternalRegistration = 5,
    Onsite = 6
}
declare enum ImageTypes {
    Original = 1,
    Micro = 2,
    Thumbnail = 3,
    Card = 4,
    Regular = 5,
    Background = 6
}
declare enum AccessTypes {
    Free = 1,
    Paid = 2,
    Registration = 3
}
declare const ProductSchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    name: z.ZodString;
    saleSchema: z.ZodNativeEnum<typeof SaleSchemas>;
    externalUrl: z.ZodNullable<z.ZodString>;
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
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }, {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }>, "many">;
    tags: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        name: string;
    }, {
        id: number;
        slug: string;
        name: string;
    }>, "many">;
    badges: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        name: string;
        color: string;
    }, {
        id: number;
        slug: string;
        name: string;
        color: string;
    }>, "many">;
    ageRating: z.ZodNumber;
    scheduleSlotNext: z.ZodObject<{
        from: z.ZodNullable<z.ZodDate>;
        until: z.ZodNullable<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        from: Date | null;
        until: Date | null;
    }, {
        from: Date | null;
        until: Date | null;
    }>;
    scheduleSlotsMulti: z.ZodBoolean;
    lead: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    pushka: z.ZodBoolean;
    paused: z.ZodBoolean;
    soldOut: z.ZodBoolean;
    images: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        type: z.ZodNativeEnum<typeof ImageTypes>;
        url: z.ZodString;
        altText: z.ZodString;
        copyright: z.ZodNullable<z.ZodString>;
        copyrightUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }, {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }>, "many">;
    inventoryItems: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
        category: z.ZodObject<{
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
        description: z.ZodString;
        accessType: z.ZodNativeEnum<typeof AccessTypes>;
        ageRating: z.ZodNumber;
        address: z.ZodString;
        geo: z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            lat: number;
            lon: number;
        }, {
            lat: number;
            lon: number;
        }>;
        mapUrl: z.ZodString;
        outside: z.ZodBoolean;
        animalsAllowed: z.ZodBoolean;
        animalsRecommended: z.ZodBoolean;
        kidsAllowed: z.ZodBoolean;
        kidsRecommended: z.ZodBoolean;
        featured: z.ZodBoolean;
        images: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            type: z.ZodNativeEnum<typeof ImageTypes>;
            url: z.ZodString;
            altText: z.ZodString;
            copyright: z.ZodNullable<z.ZodString>;
            copyrightUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: ImageTypes;
            id: number;
            url: string;
            altText: string;
            copyright: string | null;
            copyrightUrl: string | null;
        }, {
            type: ImageTypes;
            id: number;
            url: string;
            altText: string;
            copyright: string | null;
            copyrightUrl: string | null;
        }>, "many">;
        openPeriods: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            period: z.ZodObject<{
                from: z.ZodNullable<z.ZodDate>;
                until: z.ZodNullable<z.ZodDate>;
            }, "strip", z.ZodTypeAny, {
                from: Date | null;
                until: Date | null;
            }, {
                from: Date | null;
                until: Date | null;
            }>;
            exclusions: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                period: z.ZodObject<{
                    from: z.ZodNullable<z.ZodDate>;
                    until: z.ZodNullable<z.ZodDate>;
                }, "strip", z.ZodTypeAny, {
                    from: Date | null;
                    until: Date | null;
                }, {
                    from: Date | null;
                    until: Date | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
            }, {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
            }>, "many">;
            workingHours: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                dayOfWeek: z.ZodNumber;
                period: z.ZodObject<{
                    from: z.ZodNullable<z.ZodDate>;
                    until: z.ZodNullable<z.ZodDate>;
                }, "strip", z.ZodTypeAny, {
                    from: Date | null;
                    until: Date | null;
                }, {
                    from: Date | null;
                    until: Date | null;
                }>;
                breaks: z.ZodObject<{
                    id: z.ZodNumber;
                    period: z.ZodObject<{
                        from: z.ZodNullable<z.ZodDate>;
                        until: z.ZodNullable<z.ZodDate>;
                    }, "strip", z.ZodTypeAny, {
                        from: Date | null;
                        until: Date | null;
                    }, {
                        from: Date | null;
                        until: Date | null;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    period: {
                        from: Date | null;
                        until: Date | null;
                    };
                }, {
                    id: number;
                    period: {
                        from: Date | null;
                        until: Date | null;
                    };
                }>;
            }, "strip", z.ZodTypeAny, {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
                dayOfWeek: number;
                breaks: {
                    id: number;
                    period: {
                        from: Date | null;
                        until: Date | null;
                    };
                };
            }, {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
                dayOfWeek: number;
                breaks: {
                    id: number;
                    period: {
                        from: Date | null;
                        until: Date | null;
                    };
                };
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: number;
            period: {
                from: Date | null;
                until: Date | null;
            };
            exclusions: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
            }[];
            workingHours: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
                dayOfWeek: number;
                breaks: {
                    id: number;
                    period: {
                        from: Date | null;
                        until: Date | null;
                    };
                };
            }[];
        }, {
            id: number;
            period: {
                from: Date | null;
                until: Date | null;
            };
            exclusions: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
            }[];
            workingHours: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
                dayOfWeek: number;
                breaks: {
                    id: number;
                    period: {
                        from: Date | null;
                        until: Date | null;
                    };
                };
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        name: string;
        ageRating: number;
        description: string;
        images: {
            type: ImageTypes;
            id: number;
            url: string;
            altText: string;
            copyright: string | null;
            copyrightUrl: string | null;
        }[];
        category: {
            id: number;
            slug: string;
            nameSingular: string;
            namePlural: string;
        };
        accessType: AccessTypes;
        address: string;
        geo: {
            lat: number;
            lon: number;
        };
        mapUrl: string;
        outside: boolean;
        animalsAllowed: boolean;
        animalsRecommended: boolean;
        kidsAllowed: boolean;
        kidsRecommended: boolean;
        featured: boolean;
        openPeriods: {
            id: number;
            period: {
                from: Date | null;
                until: Date | null;
            };
            exclusions: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
            }[];
            workingHours: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
                dayOfWeek: number;
                breaks: {
                    id: number;
                    period: {
                        from: Date | null;
                        until: Date | null;
                    };
                };
            }[];
        }[];
    }, {
        id: number;
        slug: string;
        name: string;
        ageRating: number;
        description: string;
        images: {
            type: ImageTypes;
            id: number;
            url: string;
            altText: string;
            copyright: string | null;
            copyrightUrl: string | null;
        }[];
        category: {
            id: number;
            slug: string;
            nameSingular: string;
            namePlural: string;
        };
        accessType: AccessTypes;
        address: string;
        geo: {
            lat: number;
            lon: number;
        };
        mapUrl: string;
        outside: boolean;
        animalsAllowed: boolean;
        animalsRecommended: boolean;
        kidsAllowed: boolean;
        kidsRecommended: boolean;
        featured: boolean;
        openPeriods: {
            id: number;
            period: {
                from: Date | null;
                until: Date | null;
            };
            exclusions: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
            }[];
            workingHours: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
                dayOfWeek: number;
                breaks: {
                    id: number;
                    period: {
                        from: Date | null;
                        until: Date | null;
                    };
                };
            }[];
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    slug: string;
    name: string;
    categories: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }[];
    groups: {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }[];
    tags: {
        id: number;
        slug: string;
        name: string;
    }[];
    badges: {
        id: number;
        slug: string;
        name: string;
        color: string;
    }[];
    saleSchema: SaleSchemas;
    externalUrl: string | null;
    ageRating: number;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    lead: string | null;
    description: string | null;
    pushka: boolean;
    paused: boolean;
    soldOut: boolean;
    images: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }[];
    inventoryItems: {
        id: number;
        slug: string;
        name: string;
        ageRating: number;
        description: string;
        images: {
            type: ImageTypes;
            id: number;
            url: string;
            altText: string;
            copyright: string | null;
            copyrightUrl: string | null;
        }[];
        category: {
            id: number;
            slug: string;
            nameSingular: string;
            namePlural: string;
        };
        accessType: AccessTypes;
        address: string;
        geo: {
            lat: number;
            lon: number;
        };
        mapUrl: string;
        outside: boolean;
        animalsAllowed: boolean;
        animalsRecommended: boolean;
        kidsAllowed: boolean;
        kidsRecommended: boolean;
        featured: boolean;
        openPeriods: {
            id: number;
            period: {
                from: Date | null;
                until: Date | null;
            };
            exclusions: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
            }[];
            workingHours: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
                dayOfWeek: number;
                breaks: {
                    id: number;
                    period: {
                        from: Date | null;
                        until: Date | null;
                    };
                };
            }[];
        }[];
    }[];
}, {
    id: number;
    slug: string;
    name: string;
    categories: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }[];
    groups: {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }[];
    tags: {
        id: number;
        slug: string;
        name: string;
    }[];
    badges: {
        id: number;
        slug: string;
        name: string;
        color: string;
    }[];
    saleSchema: SaleSchemas;
    externalUrl: string | null;
    ageRating: number;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    lead: string | null;
    description: string | null;
    pushka: boolean;
    paused: boolean;
    soldOut: boolean;
    images: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }[];
    inventoryItems: {
        id: number;
        slug: string;
        name: string;
        ageRating: number;
        description: string;
        images: {
            type: ImageTypes;
            id: number;
            url: string;
            altText: string;
            copyright: string | null;
            copyrightUrl: string | null;
        }[];
        category: {
            id: number;
            slug: string;
            nameSingular: string;
            namePlural: string;
        };
        accessType: AccessTypes;
        address: string;
        geo: {
            lat: number;
            lon: number;
        };
        mapUrl: string;
        outside: boolean;
        animalsAllowed: boolean;
        animalsRecommended: boolean;
        kidsAllowed: boolean;
        kidsRecommended: boolean;
        featured: boolean;
        openPeriods: {
            id: number;
            period: {
                from: Date | null;
                until: Date | null;
            };
            exclusions: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
            }[];
            workingHours: {
                id: number;
                period: {
                    from: Date | null;
                    until: Date | null;
                };
                dayOfWeek: number;
                breaks: {
                    id: number;
                    period: {
                        from: Date | null;
                        until: Date | null;
                    };
                };
            }[];
        }[];
    }[];
}>;
type ProductDto = z.infer<typeof ProductSchema>;
declare const ProductCardSchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    name: z.ZodString;
    ageRating: z.ZodNumber;
    saleSchema: z.ZodNativeEnum<typeof SaleSchemas>;
    featured: z.ZodBoolean;
    banner: z.ZodBoolean;
    pushka: z.ZodBoolean;
    paused: z.ZodBoolean;
    soldOut: z.ZodBoolean;
    scheduleSlotNext: z.ZodObject<{
        from: z.ZodNullable<z.ZodDate>;
        until: z.ZodNullable<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        from: Date | null;
        until: Date | null;
    }, {
        from: Date | null;
        until: Date | null;
    }>;
    scheduleSlotsMulti: z.ZodBoolean;
    image: z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        type: z.ZodNativeEnum<typeof ImageTypes>;
        url: z.ZodString;
        altText: z.ZodString;
        copyright: z.ZodNullable<z.ZodString>;
        copyrightUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }, {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }>>;
    inventoryItemFirst: z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        name: string;
    }, {
        id: number;
        slug: string;
        name: string;
    }>;
    inventoryItemsMulti: z.ZodBoolean;
    priceFrom: z.ZodNullable<z.ZodNumber>;
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
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }, {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }>, "many">;
    tags: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        name: string;
    }, {
        id: number;
        slug: string;
        name: string;
    }>, "many">;
    badges: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        name: string;
        color: string;
    }, {
        id: number;
        slug: string;
        name: string;
        color: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    slug: string;
    name: string;
    categories: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }[];
    groups: {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }[];
    tags: {
        id: number;
        slug: string;
        name: string;
    }[];
    badges: {
        id: number;
        slug: string;
        name: string;
        color: string;
    }[];
    saleSchema: SaleSchemas;
    ageRating: number;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    pushka: boolean;
    paused: boolean;
    soldOut: boolean;
    featured: boolean;
    banner: boolean;
    image: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    } | null;
    inventoryItemFirst: {
        id: number;
        slug: string;
        name: string;
    };
    inventoryItemsMulti: boolean;
    priceFrom: number | null;
}, {
    id: number;
    slug: string;
    name: string;
    categories: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }[];
    groups: {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }[];
    tags: {
        id: number;
        slug: string;
        name: string;
    }[];
    badges: {
        id: number;
        slug: string;
        name: string;
        color: string;
    }[];
    saleSchema: SaleSchemas;
    ageRating: number;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    pushka: boolean;
    paused: boolean;
    soldOut: boolean;
    featured: boolean;
    banner: boolean;
    image: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    } | null;
    inventoryItemFirst: {
        id: number;
        slug: string;
        name: string;
    };
    inventoryItemsMulti: boolean;
    priceFrom: number | null;
}>;
type ProductCardDto = z.infer<typeof ProductCardSchema>;
declare const ProductCardOnHomepageSchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    name: z.ZodString;
    ageRating: z.ZodNumber;
    saleSchema: z.ZodNativeEnum<typeof SaleSchemas>;
    featured: z.ZodBoolean;
    banner: z.ZodBoolean;
    pushka: z.ZodBoolean;
    paused: z.ZodBoolean;
    soldOut: z.ZodBoolean;
    scheduleSlotNext: z.ZodObject<{
        from: z.ZodNullable<z.ZodDate>;
        until: z.ZodNullable<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        from: Date | null;
        until: Date | null;
    }, {
        from: Date | null;
        until: Date | null;
    }>;
    scheduleSlotsMulti: z.ZodBoolean;
    scheduleSlotToday: z.ZodNullable<z.ZodObject<{
        from: z.ZodNullable<z.ZodDate>;
        until: z.ZodNullable<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        from: Date | null;
        until: Date | null;
    }, {
        from: Date | null;
        until: Date | null;
    }>>;
    scheduleSlotsTodayMulti: z.ZodNullable<z.ZodBoolean>;
    scheduleSlotTomorrow: z.ZodNullable<z.ZodObject<{
        from: z.ZodNullable<z.ZodDate>;
        until: z.ZodNullable<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        from: Date | null;
        until: Date | null;
    }, {
        from: Date | null;
        until: Date | null;
    }>>;
    scheduleSlotsTomorrowMulti: z.ZodNullable<z.ZodBoolean>;
    scheduleSlotWeekend: z.ZodNullable<z.ZodObject<{
        from: z.ZodNullable<z.ZodDate>;
        until: z.ZodNullable<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        from: Date | null;
        until: Date | null;
    }, {
        from: Date | null;
        until: Date | null;
    }>>;
    scheduleSlotsWeekendMulti: z.ZodNullable<z.ZodBoolean>;
    image: z.ZodNullable<z.ZodObject<{
        id: z.ZodNumber;
        type: z.ZodNativeEnum<typeof ImageTypes>;
        url: z.ZodString;
        altText: z.ZodString;
        copyright: z.ZodNullable<z.ZodString>;
        copyrightUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }, {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }>>;
    inventoryItemFirst: z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        name: string;
    }, {
        id: number;
        slug: string;
        name: string;
    }>;
    inventoryItemsMulti: z.ZodBoolean;
    priceFrom: z.ZodNullable<z.ZodNumber>;
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
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }, {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }>, "many">;
    tags: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        name: string;
    }, {
        id: number;
        slug: string;
        name: string;
    }>, "many">;
    badges: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        slug: z.ZodString;
        name: z.ZodString;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        slug: string;
        name: string;
        color: string;
    }, {
        id: number;
        slug: string;
        name: string;
        color: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    slug: string;
    name: string;
    categories: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }[];
    groups: {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }[];
    tags: {
        id: number;
        slug: string;
        name: string;
    }[];
    badges: {
        id: number;
        slug: string;
        name: string;
        color: string;
    }[];
    saleSchema: SaleSchemas;
    ageRating: number;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    pushka: boolean;
    paused: boolean;
    soldOut: boolean;
    featured: boolean;
    banner: boolean;
    scheduleSlotToday: {
        from: Date | null;
        until: Date | null;
    } | null;
    scheduleSlotsTodayMulti: boolean | null;
    scheduleSlotTomorrow: {
        from: Date | null;
        until: Date | null;
    } | null;
    scheduleSlotsTomorrowMulti: boolean | null;
    scheduleSlotWeekend: {
        from: Date | null;
        until: Date | null;
    } | null;
    scheduleSlotsWeekendMulti: boolean | null;
    image: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    } | null;
    inventoryItemFirst: {
        id: number;
        slug: string;
        name: string;
    };
    inventoryItemsMulti: boolean;
    priceFrom: number | null;
}, {
    id: number;
    slug: string;
    name: string;
    categories: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    }[];
    groups: {
        id: number;
        slug: string;
        name: string;
        cardType: CardTypes;
    }[];
    tags: {
        id: number;
        slug: string;
        name: string;
    }[];
    badges: {
        id: number;
        slug: string;
        name: string;
        color: string;
    }[];
    saleSchema: SaleSchemas;
    ageRating: number;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    pushka: boolean;
    paused: boolean;
    soldOut: boolean;
    featured: boolean;
    banner: boolean;
    scheduleSlotToday: {
        from: Date | null;
        until: Date | null;
    } | null;
    scheduleSlotsTodayMulti: boolean | null;
    scheduleSlotTomorrow: {
        from: Date | null;
        until: Date | null;
    } | null;
    scheduleSlotsTomorrowMulti: boolean | null;
    scheduleSlotWeekend: {
        from: Date | null;
        until: Date | null;
    } | null;
    scheduleSlotsWeekendMulti: boolean | null;
    image: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    } | null;
    inventoryItemFirst: {
        id: number;
        slug: string;
        name: string;
    };
    inventoryItemsMulti: boolean;
    priceFrom: number | null;
}>;
type ProductCardOnHomepageDto = z.infer<typeof ProductCardOnHomepageSchema>;
declare const ScheduleSlotSchema: z.ZodObject<{
    id: z.ZodNumber;
    slot: z.ZodObject<{
        from: z.ZodNullable<z.ZodDate>;
        until: z.ZodNullable<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        from: Date | null;
        until: Date | null;
    }, {
        from: Date | null;
        until: Date | null;
    }>;
    capacity: z.ZodNullable<z.ZodNumber>;
    capacityBooked: z.ZodNullable<z.ZodNumber>;
    capacityAvailable: z.ZodNullable<z.ZodNumber>;
    soldOut: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: number;
    soldOut: number | null;
    slot: {
        from: Date | null;
        until: Date | null;
    };
    capacity: number | null;
    capacityBooked: number | null;
    capacityAvailable: number | null;
}, {
    id: number;
    soldOut: number | null;
    slot: {
        from: Date | null;
        until: Date | null;
    };
    capacity: number | null;
    capacityBooked: number | null;
    capacityAvailable: number | null;
}>;
type ScheduleSlotDto = z.infer<typeof ScheduleSlotSchema>;

declare class UnixTimestamp {
    unixTimestamp: number;
    dateTime: Date;
    constructor(dt: number | string | Date);
    toUnixTimestamp(): number;
    toIsoDateTimeString(): string;
    toIsoDateString(): string;
}

declare class DclApi {
    private readonly base_url;
    private readonly front;
    private readonly key;
    private readonly secret;
    constructor(base_url: string, front: string, key: string, secret: string);
    private signRequest;
    private prepareRequest;
    private get;
    private create;
    getCategories(): Promise<CategoryDto[]>;
    getGroups(): Promise<GroupDto[]>;
    getTags(): Promise<TagDto[]>;
    getBadges(): Promise<BadgeDto[]>;
    getCategoriesGroupsTagsBadges(): Promise<CategoriesGroupsTagsBadgesDto>;
    getProducts(): Promise<ProductDto[]>;
    getProduct(slug: string): Promise<ProductDto>;
    getProductScheduleSlots(slug: string): Promise<ScheduleSlotDto[]>;
    getProductCardsOnHomepage(): Promise<ProductCardOnHomepageDto[]>;
    getProductCardsInCategory(slug: string): Promise<ProductCardDto[]>;
    getProductCardsInGroup(slug: string): Promise<ProductCardDto[]>;
    getProductCardsWithTag(slug: string): Promise<ProductCardDto[]>;
    getProductCardsWithBadge(slug: string): Promise<ProductCardDto[]>;
    getProductCardsOnDate(timestamp: UnixTimestamp): Promise<ProductCardDto[]>;
}

export { DclApi as default };
