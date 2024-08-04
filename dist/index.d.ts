import { type BadgeDto, type CategoriesGroupsTagsBadgesDto, type CategoryDto, type GroupDto, type TagDto } from './dtos/fronts';
import { ProductCardDto, ProductCardOnHomepageDto, ProductDto, ScheduleSlotDto } from './dtos/products';
import UnixTimestamp from './unixtimestamp';
export default class DclApi {
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
//# sourceMappingURL=index.d.ts.map