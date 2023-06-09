import { Transaction } from "../../ts/types/transaction.types";
import { Category } from "../../ts/types/category.types";

class StaticData {
  static transactions: Transaction[] = [];
  static categories: Category[] = [
    {
      description: "Outros",
      icon: "MdOutlineAttachMoney",
      type: "EXPENSE",
      id: 11,
    },
    {
      description: "Mercado",
      icon: "BsFillCartFill",
      type: "EXPENSE",
      id: 23,
    },
    {
      description: "Combustível",
      icon: "RiGasStationFill",
      type: "EXPENSE",
      id: 54,
    },
    {
      description: "Salário",
      icon: "MdOutlineAttachMoney",
      type: "INCOME",
      id: 28,
    },
    {
      description: "Presente",
      icon: "AiFillGift",
      type: "INCOME",
      id: 90,
    },
  ];

  static saveDefaultCategoriesToLocalStorage = () => {
    if (window.localStorage.getItem("_categories")) {
      return;
    }

    window.localStorage.setItem("_categories", JSON.stringify(this.categories));
  };

  static saveCategoriesToLocalStorage = () => {
    window.localStorage.setItem("_categories", JSON.stringify(this.categories));
  };

  static saveToLocalStorage = () => {
    window.localStorage.setItem(
      "_transactions",
      JSON.stringify(this.transactions)
    );
  };

  static loadFromLocalStorage = () => {
    //reset transactions array
    this.transactions = [];

    const transactionsStrJson =
      window.localStorage.getItem("_transactions") || "[]";

    const transactionsParsed: any[] = JSON.parse(transactionsStrJson);

    transactionsParsed.map((t) => {
      this.transactions.push({
        id: t.id,
        category: t.category,
        description: t.description,
        value: t.value,
        transactionDate: new Date(t.transactionDate),
        type: t.type,
      });
    });
  };

  static loadCategories = () => {
    //reset categories array
    this.categories = [];

    const categoriesStrJson =
      window.localStorage.getItem("_categories") || "[]";

    const categoriesParsed: any[] = JSON.parse(categoriesStrJson);

    categoriesParsed.map((c) => {
      this.categories.push({
        id: c.id,
        icon: c.icon,
        description: c.description,
        type: c.type,
      });
    });
  };

  static addCategory = (category: Category) => {
    this.loadCategories();
    this.categories.push(category);
    this.saveCategoriesToLocalStorage();
  };

  static addTransaction = (transaction: Transaction) => {
    this.transactions.push(transaction);
    this.saveToLocalStorage();
  };

  static updateCategory = (category: Category) => {
    const index = this.categories.findIndex((c) => c.id === category.id);

    if (index !== null && index !== undefined) {
      this.categories[index] = category;
      this.saveCategoriesToLocalStorage();

      return;
    } else {
      console.log(`Index not found for category id: ${category.id}`);
    }
  };

  static updateTransaction = (transaction: Transaction) => {
    const index = this.transactions.findIndex((t) => t.id === transaction.id);

    if (index !== null && index !== undefined) {
      this.transactions[index] = transaction;
      this.saveToLocalStorage();

      return;
    } else {
      console.log(`Index not found for transaction id: ${transaction.id}`);
    }
  };

  static deleteTransaction = (id: number) => {
    this.transactions = this.transactions.filter((t) => t.id !== id);
    this.saveToLocalStorage();
  };

  static deleteCategory = (id: number) => {
    this.categories = this.categories.filter((c) => c.id !== id);
    this.saveCategoriesToLocalStorage();
  };

  static findAllTransactions = () => {
    this.loadFromLocalStorage();
    return this.transactions;
  };

  static findAllCategories = () => {
    this.loadCategories();
    return this.categories;
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

  static getCurrency = () => {
    return window.localStorage.getItem("currency");
  };

  static saveCurrency = (currency: string) => {
    window.localStorage.setItem("currency", currency);
  };

  static saveDefaultCurrency = (currency: string) => {
    if (!this.getCurrency()) {
      window.localStorage.setItem("currency", currency);
    }
  };
}

export default StaticData;
