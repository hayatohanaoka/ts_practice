import { apiUrls } from "@/app/urls";
import { queryPort } from "@/port/queryPort";

export class SearchQueryGateway implements queryPort {

  constructor() {}

  async fetchSearchQuery(index: number): Promise<string> {
    const responseJson = await fetch(apiUrls[index]).then(
      (res) => res.json()
    );
    return responseJson.searchQuery;
  }
}
