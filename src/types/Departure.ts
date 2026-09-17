import type { Stop } from "./Stop";
import type {Route} from "./Route";
import type {DepartureTime} from "./DepartureTime";

export type Departure = {
    id: string;
    stop: Stop;
    route: Route;
    departureTime: DepartureTime;
}