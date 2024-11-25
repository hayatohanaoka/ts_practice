import { SearchQueryPort } from "@/main/port/searchQueryPort";
import { SearchQueryDriver } from "@/main/driver/searchQuerDriver";

export class SearchQueryGateway implements SearchQueryPort {
  async fetchSearchQuery(searchQueryPath: string): Promise<string> {
    return await SearchQueryDriver.getSearchQuery(searchQueryPath);
  }
}
