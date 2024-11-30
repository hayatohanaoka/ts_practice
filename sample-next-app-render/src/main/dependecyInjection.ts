import { SearchQueryDriverImpl } from "./driver/searchQuerDriver";
import { SearchQueryGateway } from "./gateway/searchQueryGateway";
import { SearchQueryPort } from "./port/searchQueryPort";
import { SearchQueryUseCase } from "./usecase/searchQueryUseCase";

export const searchQueryDriver  = new SearchQueryDriverImpl();
export const searchQueryGateway: SearchQueryPort = new SearchQueryGateway(searchQueryDriver);
export const searchQueryUseCase = new SearchQueryUseCase(searchQueryGateway);
