import { faker } from "@faker-js/faker";
import { Mappble } from "./CustomMap";

export class Company implements Mappble {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = "blue";

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.companyName}</h1>
    <h3>Catchphrase = ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
