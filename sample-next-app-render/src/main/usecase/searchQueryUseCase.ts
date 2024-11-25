import { SearchQueryPort } from "@/main/port/searchQueryPort";
import { SearchQueryGateway } from "@/main/gateway/queryGateway";

export class SearQueryUseCase {
  public static async getSearchQuery(searchQueryPath: string): Promise<string> {
    return await new SearchQueryGateway().fetchSearchQuery(searchQueryPath);
  }
}
