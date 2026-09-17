import type { Stop } from "./types/Stop"; // stop to tylko typ, dlatego dodajemy type 
import type { Route } from "./types/Route";
import type { TransportType } from "./types/TransportType";
import type { Departure } from "./types/Departure";
import type { DepartureTime } from "./types/DepartureTime";


const appName: string = "Czydojadę?";
console.log(`Welcome to ${appName}!`);

const stop1: Stop = {
    id: "pp01",
    name: "Pl. Piłsudskiego 01",
    latitude: 52.2296756,
    longitude: 21.0122287
};


const stop2: Stop = {
    id: "pp02",
    name: "Pl. Piłsudskiego 02",
    latitude: 54.2296756,
    longitude: 22.0122287
};


const route: Route = {
    id: "b175",
    shortName: "175",
    longName: "Pl. Piłsudskiego - Lotnisko Chopina",
    stops: [stop1, stop2],
    transportType: "bus" 
};





// dzieki temu ze zadeklarowalismy to jako tablice typow Departure, nie wkradnie sie nam tam stop1 czy cos
// console.log(route);
// console.log(departure);

//console.dir(departure1, { depth: null }); //depth: null - pokazuje wszystkie zagnieżdżone obiekty



const createDeparture = (id: string, stop: Stop, route: Route, departureTime: DepartureTime): Departure => {
    const departure: Departure ={
        id: id,
        stop: stop,
        route: route,
        departureTime: departureTime
    };
    return departure;
}


const departure1: Departure = createDeparture("d001", stop1, route, "14:30");

const departure2: Departure = createDeparture("d002", stop1, route, "14:40");

const departure3: Departure = createDeparture("d003", stop2, route, "14:50");

const departures: Departure[] = [departure1, departure2, departure3];

for (const departure of departures) {
    console.log(`Departure ID: ${departure.id}`);
    console.log(`Stop: ${departure.stop.name}`);
    console.log(`Route: ${departure.route.shortName} - ${departure.route.longName}`);
    console.log(`Departure Time: ${departure.departureTime}`);
    console.log('-------------------------');
}