import { Transaction } from "../../components/Card/types/Transaction";

class StaticData {
  static transactions: Transaction[] = [];

  static saveToLocalStorage = () => {
    window.localStorage.setItem(
      "transactions",
      JSON.stringify(this.transactions)
    );
  };

  static loadFromLocalStorage = () => {
    //reset transactions array
    this.transactions = [];

    const transactionsStrVal =
      window.localStorage.getItem("transactions") || "[]";

    const transactionsParsed: any[] = JSON.parse(transactionsStrVal);

    transactionsParsed.map((t) => {
      this.transactions.push({
        id: t.id,
        icon: t.icon,
        description: t.description,
        value: t.value,
        transactionDate: new Date(t.transactionDate),
        type: t.type,
      });
    });

    console.log(this.transactions);
  };

  static addTransaction = (transaction: Transaction) => {
    this.transactions.push(transaction);
    this.saveToLocalStorage();
  };

  static deleteTransaction = (id: number) => {
    this.transactions = this.transactions.filter((t) => t.id !== id);
    this.saveToLocalStorage();
  };

  static findAllTransactions = () => {
    this.loadFromLocalStorage();
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
