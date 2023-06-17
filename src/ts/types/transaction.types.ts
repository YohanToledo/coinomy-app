import { Category } from "./category.types";

export type Transaction = {
  id: number;
  description: string;
  value: number;
  transactionDate: Date;
  type: "EXPENSE" | "INCOME";
  category: Category;
};
