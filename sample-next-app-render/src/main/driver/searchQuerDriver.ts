
export class SearchQueryDriver {

  public static async getSearchQuery(searchQueryPath: string): Promise<string> {
    return await fetch(new URL(searchQueryPath, this._getBaseUrl()), {cache: "no-store"}).then(
      (response) => response.json()
    ).then(
      (json) => json.searchQuery
    );
  }

  static _getBaseUrl() {
    return new URL("http://0.0.0.0:8080/");
  }

}
