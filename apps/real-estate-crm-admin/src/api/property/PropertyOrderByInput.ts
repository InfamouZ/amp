import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  propertyType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
