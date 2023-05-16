export class createFacility {
  name!: string;
  address!: AddressInput;
}

class AddressInput {
  line1!: string;
  line2: string;
  city!: string;
  state!: string;
  zip!: number;
  country!: string;
}
