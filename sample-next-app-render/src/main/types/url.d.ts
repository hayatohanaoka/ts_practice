import { IndustryId } from "./industryId";

export interface BackendUrlsInterface {
  urls: Array<SearchQueryUrlInterface>
}

export interface BackendUrlInterface {
  baseUrl: URL;
  endpointUrl: URL;
  getEndpointUrl(): URL;
}
