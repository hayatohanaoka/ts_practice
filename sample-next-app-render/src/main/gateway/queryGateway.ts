import { SearchQueryPort } from "@/main/port/searchQueryPort";
import { searchQueryDriver } from "../dependecyInjection";

export class SearchQueryGateway implements SearchQueryPort {
  async fetchSearchQuery(searchQueryPath: string): Promise<string> {
    return await searchQueryDriver.getSearchQuery(searchQueryPath);
  }
}
