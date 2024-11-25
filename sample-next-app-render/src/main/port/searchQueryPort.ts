export interface SearchQueryPort {
  fetchSearchQuery(searchQueryUrl: string): Promise<string>
}
