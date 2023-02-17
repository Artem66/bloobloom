export interface CostBreakdown {
  bloobloom_price: number
}

export interface Glasses {
  glasses(glasses: any): unknown;
  id: number;
  name: string;
  configuration_name: string;
  cost_breakdown?: CostBreakdown;
  default_collection_name: null;
  glass_variants: any;
}
