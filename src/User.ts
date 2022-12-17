import { faker } from "@faker-js/faker";
import { Mappble } from "./CustomMap";

export class User implements Mappble {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = "green";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
