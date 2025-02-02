import { PlanType } from "../../../billing/enums/plan-type";

import { OrganizationKeysRequest } from "./organization-keys.request";

export class OrganizationUpgradeRequest {
  businessName: string;
  planType: PlanType;
  additionalSeats: number;
  additionalStorageGb: number;
  premiumAccessAddon: boolean;
  billingAddressCountry: string;
  billingAddressPostalCode: string;
  keys: OrganizationKeysRequest;
}
