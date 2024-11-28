export interface SearchQueryDriver {
    getSearchQuery(searchQueryPath: string): Promise<string>;
}
