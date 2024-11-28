import { searchQueryPort } from "../dependecyInjection";

export class SearQueryUseCase {
  public static async getSearchQuery(searchQueryPath: string): Promise<string> {
    return await searchQueryPort.fetchSearchQuery(searchQueryPath);
  }
}
