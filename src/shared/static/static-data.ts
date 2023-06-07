const transactionsExample: Transaction[] = [
  {
    icon: "BsFillCartFill",
    description: "Mercado",
    value: 89.5,
    transactionDate: new Date("2023-04-17T12:00:00"),
    type: "EXPENSE",
  },
  {
    icon: "MdOutlineAttachMoney",
    description: "Freela dev",
    value: 750,
    transactionDate: new Date("2023-04-05T12:00:00"),
    type: "INCOME",
  },
  {
    icon: "RiGasStationFill",
    description: "Gasolina",
    value: 200,
    transactionDate: new Date("2023-03-24T12:00:00"),
    type: "EXPENSE",
  },
  {
    icon: "MdOutlineAttachMoney",
    description: "Salario",
    value: 10.0,
    transactionDate: new Date(),
    type: "INCOME",
  },
  {
    icon: "BsFillCartFill",
    description: "Mercado",
    value: 250,
    transactionDate: new Date(),
    type: "EXPENSE",
  },
  {
    icon: "BsFillCartFill",
    description: "Mercado",
    value: 27.85,
    transactionDate: new Date(),
    type: "EXPENSE",
  },
  {
    icon: "MdOutlineAttachMoney",
    description: "freela",
    value: 200,
    transactionDate: new Date(),
    type: "INCOME",
  },
];

class StaticData {
  static transactions: Transaction[] = transactionsExample;

  static addTransaction = (transaction: Transaction) => {
    this.transactions.push(transaction);
  };

  static findAllTransactions = () => {
    return this.transactions;
  };

  static totalExpenseValue = (date: Date) => {
    let sum = 0;
    this.transactions.map((t) => {
      const validTypeAndDate =
        t.type === "EXPENSE" &&
        this.compareMonthAndYear(date, t.transactionDate);

      if (validTypeAndDate) {
        sum += t.value;
      }
    });
    return sum;
  };

  static totalIncomeValue = (date: Date) => {
    let sum = 0;
    this.transactions.map((t) => {
      const validTypeAndDate =
        t.type === "INCOME" &&
        this.compareMonthAndYear(date, t.transactionDate);

      if (validTypeAndDate) {
        sum += t.value;
      }
    });
    return sum;
  };

  static totalBalanceValue = (date: Date) => {
    return this.totalIncomeValue(date) - this.totalExpenseValue(date);
  };

  static compareMonthAndYear = (date1: Date, date2: Date) => {
    return (
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };
}

export default StaticData;

type Transaction = {
  icon: TransactionIcon;
  description: string;
  value: number;
  transactionDate: Date;
  type: "EXPENSE" | "INCOME";
};

type TransactionIcon =
  | "BsFillCartFill"
  | "RiGasStationFill"
  | "MdOutlineAttachMoney";
