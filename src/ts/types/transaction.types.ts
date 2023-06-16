import { CategoryIcon } from "./category-icon.types";
import { Category } from "./category.types";

export type Transaction = {
  id: number;
  //  icon: CategoryIcon;
  description: string;
  value: number;
  transactionDate: Date;
  type: "EXPENSE" | "INCOME";
  category: Category;
};
