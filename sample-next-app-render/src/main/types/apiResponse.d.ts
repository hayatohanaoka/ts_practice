export interface SearchQueryResponse {
  readonly searchQuery: string;
}

export interface CompanyResponseInterface {
  name: string;
}

export interface CompaniesResponseInterface {
  companies: CompanyResponseInterface[];
}
