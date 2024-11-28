import { SearchQueryDriver } from "./driverPort/searchQuery";
import { SearchQueryDriverImpl } from "./driver/searchQuerDriver";
import { SearchQueryGateway } from "./gateway/queryGateway";
import { SearchQueryPort } from "./port/searchQueryPort";

export const searchQueryPort: SearchQueryPort = new SearchQueryGateway();
export const searchQueryDriver: SearchQueryDriver = new SearchQueryDriverImpl();
