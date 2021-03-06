export interface Fare {
    id: string;
    title: string;
    subtitle: string;
    content: string[];
    prices: FarePrices[];
}

export interface FarePrices {
    zone: string;
    price: number;
}