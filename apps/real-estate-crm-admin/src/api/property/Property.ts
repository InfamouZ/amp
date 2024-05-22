import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  details: string | null;
  id: string;
  price: number | null;
  propertyType: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
