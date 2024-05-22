import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
