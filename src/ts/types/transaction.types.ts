import { CategoryIcon } from "./category-icon.types";

export type Transaction = {
  id: number;
  icon: CategoryIcon;
  description: string;
  value: number;
  transactionDate: Date;
  type: "EXPENSE" | "INCOME";
};


