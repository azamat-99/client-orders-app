export interface IOrder {
  uud: string; // Unique order identifier
  lastname: string; // Last name of the person
  email: string; // Email address
  phone: string | number; // Phone number (string or number)
  from: string; // Departure country (e.g., "Россия")
  fromCountryId: number; // ID for the departure country
  to: string; // Destination country (e.g., "Франция")
  toCountryId: number; // ID for the destination country
  goodname: string; // Name of the product (e.g., "Ноутбук")
  goodCategory: string; // Category of the product (e.g., "Электроника")
  categoryId: number; // ID of the product category
  date: string; // Order creation date (e.g., "2025-02-21")
  expireDate: string; // Expiry date (e.g., "2025-03-01")
  isExpired: boolean; // Whether the order has expired (true/false)
  id: string | number;
}

export interface ISelectAll {
  name: string;
  id: number;
}
