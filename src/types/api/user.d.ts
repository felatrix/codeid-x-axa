export interface AddressInterface {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

export interface CompanyInterface {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressInterface;
    phone: string;
    website: string;
    company: CompanyInterface;
}
