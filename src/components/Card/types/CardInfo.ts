export type CardInfo = {
    icon: CardIcon;
    description: string;
    value: number;
    transactionDate: Date;
    type: "EXPENSE" | "INCOME";
};

export type CardIcon = "BsFillCartFill" | "RiGasStationFill" | "MdOutlineAttachMoney";