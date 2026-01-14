export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string; // 注意：虽然是坐标，但 API 返回的是字符串
    lng: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
