import { SearchQueryPort } from "../port/searchQueryPort";

export class SearchQueryUseCase {
  constructor(private searchQueryPort: SearchQueryPort) {}

  public async getSearchQuery(searchQueryPath: string): Promise<string> {
    return await this.searchQueryPort.fetchSearchQuery(searchQueryPath);
  }
}
