import { z } from 'zod';
export declare enum SaleSchemas {
    Free = 1,
    Sale = 2,
    Registration = 3,
    ExternalSale = 4,
    ExternalRegistration = 5,
    Onsite = 6
}
export declare const SaleSchemasEnumSchema: z.ZodNativeEnum<typeof SaleSchemas>;
export declare enum ImageTypes {
    Original = 1,
    Micro = 2,
    Thumbnail = 3,
    Card = 4,
    Regular = 5,
    Background = 6
}
export declare const ImageTypesEnumSchema: z.ZodNativeEnum<typeof ImageTypes>;
export declare enum AccessTypes {
    Free = 1,
    Paid = 2,
    Registration = 3
}
export declare const AccessTypesEnumSchema: z.ZodNativeEnum<typeof AccessTypes>;
export declare const PeriodSchema: z.ZodObject<{
    from: z.ZodNullable<z.ZodDate>;
    until: z.ZodNullable<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    from: Date | null;
    until: Date | null;
}, {
    from: Date | null;
    until: Date | null;
}>;
export type PeriodDto = z.infer<typeof PeriodSchema>;
export declare const ImageSchema: z.ZodObject<{
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
}>;
export type ImageDto = z.infer<typeof ImageSchema>;
export declare const GeoSchema: z.ZodObject<{
    lat: z.ZodNumber;
    lon: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    lat: number;
    lon: number;
}, {
    lat: number;
    lon: number;
}>;
export type GeoDto = z.infer<typeof GeoSchema>;
export declare const WorkingHourBreakSchema: z.ZodObject<{
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
export type WorkingHourBreakDto = z.infer<typeof WorkingHourBreakSchema>;
export declare const WorkingHourSchema: z.ZodObject<{
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
}>;
export type WorkingHourDto = z.infer<typeof WorkingHourSchema>;
export declare const OpenPeriodExclusionSchema: z.ZodObject<{
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
export type OpenPeriodExclusionDto = z.infer<typeof OpenPeriodExclusionSchema>;
export declare const OpenPeriodSchema: z.ZodObject<{
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
}>;
export type OpenPeriodDto = z.infer<typeof OpenPeriodSchema>;
export declare const InventoryItemSchema: z.ZodObject<{
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
    name: string;
    id: number;
    address: string;
    description: string;
    slug: string;
    category: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    };
    accessType: AccessTypes;
    ageRating: number;
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
    images: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }[];
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
    name: string;
    id: number;
    address: string;
    description: string;
    slug: string;
    category: {
        id: number;
        slug: string;
        nameSingular: string;
        namePlural: string;
    };
    accessType: AccessTypes;
    ageRating: number;
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
    images: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }[];
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
}>;
export type InventoryItemDto = z.infer<typeof InventoryItemSchema>;
export declare const InventoryItemFirstSchema: z.ZodObject<{
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
export type InventoryItemFirstDto = z.infer<typeof InventoryItemFirstSchema>;
export declare const ProductSchema: z.ZodObject<{
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
        cardType: z.ZodNativeEnum<typeof import("./fronts").CardTypes>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        slug: string;
        cardType: import("./fronts").CardTypes;
    }, {
        name: string;
        id: number;
        slug: string;
        cardType: import("./fronts").CardTypes;
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
        name: string;
        id: number;
        address: string;
        description: string;
        slug: string;
        category: {
            id: number;
            slug: string;
            nameSingular: string;
            namePlural: string;
        };
        accessType: AccessTypes;
        ageRating: number;
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
        images: {
            type: ImageTypes;
            id: number;
            url: string;
            altText: string;
            copyright: string | null;
            copyrightUrl: string | null;
        }[];
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
        name: string;
        id: number;
        address: string;
        description: string;
        slug: string;
        category: {
            id: number;
            slug: string;
            nameSingular: string;
            namePlural: string;
        };
        accessType: AccessTypes;
        ageRating: number;
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
        images: {
            type: ImageTypes;
            id: number;
            url: string;
            altText: string;
            copyright: string | null;
            copyrightUrl: string | null;
        }[];
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
    groups: {
        name: string;
        id: number;
        slug: string;
        cardType: import("./fronts").CardTypes;
    }[];
    name: string;
    id: number;
    paused: boolean;
    description: string | null;
    slug: string;
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
    ageRating: number;
    images: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }[];
    saleSchema: SaleSchemas;
    externalUrl: string | null;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    lead: string | null;
    pushka: boolean;
    soldOut: boolean;
    inventoryItems: {
        name: string;
        id: number;
        address: string;
        description: string;
        slug: string;
        category: {
            id: number;
            slug: string;
            nameSingular: string;
            namePlural: string;
        };
        accessType: AccessTypes;
        ageRating: number;
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
        images: {
            type: ImageTypes;
            id: number;
            url: string;
            altText: string;
            copyright: string | null;
            copyrightUrl: string | null;
        }[];
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
    groups: {
        name: string;
        id: number;
        slug: string;
        cardType: import("./fronts").CardTypes;
    }[];
    name: string;
    id: number;
    paused: boolean;
    description: string | null;
    slug: string;
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
    ageRating: number;
    images: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    }[];
    saleSchema: SaleSchemas;
    externalUrl: string | null;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    lead: string | null;
    pushka: boolean;
    soldOut: boolean;
    inventoryItems: {
        name: string;
        id: number;
        address: string;
        description: string;
        slug: string;
        category: {
            id: number;
            slug: string;
            nameSingular: string;
            namePlural: string;
        };
        accessType: AccessTypes;
        ageRating: number;
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
        images: {
            type: ImageTypes;
            id: number;
            url: string;
            altText: string;
            copyright: string | null;
            copyrightUrl: string | null;
        }[];
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
export type ProductDto = z.infer<typeof ProductSchema>;
export declare const ProductCardSchema: z.ZodObject<{
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
        name: string;
        id: number;
        slug: string;
    }, {
        name: string;
        id: number;
        slug: string;
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
        cardType: z.ZodNativeEnum<typeof import("./fronts").CardTypes>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        slug: string;
        cardType: import("./fronts").CardTypes;
    }, {
        name: string;
        id: number;
        slug: string;
        cardType: import("./fronts").CardTypes;
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
        cardType: import("./fronts").CardTypes;
    }[];
    name: string;
    id: number;
    paused: boolean;
    image: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    } | null;
    slug: string;
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
    ageRating: number;
    featured: boolean;
    saleSchema: SaleSchemas;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    pushka: boolean;
    soldOut: boolean;
    banner: boolean;
    inventoryItemFirst: {
        name: string;
        id: number;
        slug: string;
    };
    inventoryItemsMulti: boolean;
    priceFrom: number | null;
}, {
    groups: {
        name: string;
        id: number;
        slug: string;
        cardType: import("./fronts").CardTypes;
    }[];
    name: string;
    id: number;
    paused: boolean;
    image: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    } | null;
    slug: string;
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
    ageRating: number;
    featured: boolean;
    saleSchema: SaleSchemas;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    pushka: boolean;
    soldOut: boolean;
    banner: boolean;
    inventoryItemFirst: {
        name: string;
        id: number;
        slug: string;
    };
    inventoryItemsMulti: boolean;
    priceFrom: number | null;
}>;
export type ProductCardDto = z.infer<typeof ProductCardSchema>;
export declare const ProductCardOnHomepageSchema: z.ZodObject<{
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
        name: string;
        id: number;
        slug: string;
    }, {
        name: string;
        id: number;
        slug: string;
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
        cardType: z.ZodNativeEnum<typeof import("./fronts").CardTypes>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        slug: string;
        cardType: import("./fronts").CardTypes;
    }, {
        name: string;
        id: number;
        slug: string;
        cardType: import("./fronts").CardTypes;
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
        cardType: import("./fronts").CardTypes;
    }[];
    name: string;
    id: number;
    paused: boolean;
    image: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    } | null;
    slug: string;
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
    ageRating: number;
    featured: boolean;
    saleSchema: SaleSchemas;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    pushka: boolean;
    soldOut: boolean;
    banner: boolean;
    inventoryItemFirst: {
        name: string;
        id: number;
        slug: string;
    };
    inventoryItemsMulti: boolean;
    priceFrom: number | null;
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
}, {
    groups: {
        name: string;
        id: number;
        slug: string;
        cardType: import("./fronts").CardTypes;
    }[];
    name: string;
    id: number;
    paused: boolean;
    image: {
        type: ImageTypes;
        id: number;
        url: string;
        altText: string;
        copyright: string | null;
        copyrightUrl: string | null;
    } | null;
    slug: string;
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
    ageRating: number;
    featured: boolean;
    saleSchema: SaleSchemas;
    scheduleSlotNext: {
        from: Date | null;
        until: Date | null;
    };
    scheduleSlotsMulti: boolean;
    pushka: boolean;
    soldOut: boolean;
    banner: boolean;
    inventoryItemFirst: {
        name: string;
        id: number;
        slug: string;
    };
    inventoryItemsMulti: boolean;
    priceFrom: number | null;
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
}>;
export type ProductCardOnHomepageDto = z.infer<typeof ProductCardOnHomepageSchema>;
export declare const ScheduleSlotSchema: z.ZodObject<{
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
    slot: {
        from: Date | null;
        until: Date | null;
    };
    soldOut: number | null;
    capacity: number | null;
    capacityBooked: number | null;
    capacityAvailable: number | null;
}, {
    id: number;
    slot: {
        from: Date | null;
        until: Date | null;
    };
    soldOut: number | null;
    capacity: number | null;
    capacityBooked: number | null;
    capacityAvailable: number | null;
}>;
export type ScheduleSlotDto = z.infer<typeof ScheduleSlotSchema>;
//# sourceMappingURL=products.d.ts.map