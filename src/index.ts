import type { Stop } from "./types/Stop";
// stop to tylko typ, dlatego dodajemy type 

const appName: string = "Czydojadę?";
console.log(`Welcome to ${appName}!`);

const stop: Stop = {
    id: "01",
    name: "Dw. Centralny 01",
    latitude: 52.2296756,
    longitude: 21.0122287
};

console.log(stop);