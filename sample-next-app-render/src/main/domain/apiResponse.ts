import { CompaniesResponseInterface, CompanyResponseInterface, SearchQueryResponse } from "@/main/types/apiResponse";

export class SearchQuery implements SearchQueryResponse{
  searchQuery: string;

  constructor(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

}

class Company implements CompanyResponseInterface {
  name: string;

  constructor(companyResponse: {name: string}) {
    this.name = companyResponse.name;
  }

}

export class Companies implements CompaniesResponseInterface {
  companies: Company[];

  constructor(companies: {name: string}[]) {
    this.companies = companies.map((company) => {
      return new Company(company);
    })
  }

}
