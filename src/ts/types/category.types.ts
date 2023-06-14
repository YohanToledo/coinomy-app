import { CategoryIcon } from "./category-icon.types";

export type Category = {
    id?: number;
    description: string;
    type: "INCOME" | "EXPENSE";
    icon: CategoryIcon;
}