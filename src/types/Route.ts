import type { Stop } from "./Stop";
import type { TransportType } from "./TransportType";

export type Route = {
    id: string;
    shortName: string;
    longName: string;
    stops: Stop[];
    transportType: TransportType;
}