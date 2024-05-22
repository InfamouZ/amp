import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  details?: string | null;
  price?: number | null;
  propertyType?: string | null;
  status?: "Option1" | null;
};
