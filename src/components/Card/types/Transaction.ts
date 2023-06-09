export type Transaction = {
  id: number;
  icon: TransactionIcon;
  description: string;
  value: number;
  transactionDate: Date;
  type: "EXPENSE" | "INCOME";
};

export type TransactionIcon =
  | "BsFillCartFill"
  | "RiGasStationFill"
  | "MdOutlineAttachMoney";
