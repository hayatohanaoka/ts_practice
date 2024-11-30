import { SearchQueryPort } from "@/main/port/searchQueryPort";
import { SearchQueryDriverImpl } from "../driver/searchQuerDriver";

export class SearchQueryGateway implements SearchQueryPort {
  constructor(private searchQueryDriver: SearchQueryDriverImpl) {}

  async fetchSearchQuery(searchQueryPath: string): Promise<string> {
    return await this.searchQueryDriver.getSearchQuery(searchQueryPath);
  }
}
