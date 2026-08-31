import { defineStore } from "pinia";

export interface Transaction {
  id: number;
  dateTime: string | any;
  amount: number;
  status: "deposit" | "withdraw";
  email: string;
}

export const useTransactionStore = defineStore("transactions", {
  state: () => ({
    data: [] as Transaction[],
  }),

  // fn balance
  getters: {
    balance: (state) => {
      let total = 0;

      state.data.forEach((transactions) => {
        if (transactions.status === "deposit") {
          total += transactions.amount;
        } else {
          total -= transactions.amount;
        }
      });

      return total;
    },
  },

  actions: {
    // create
    addTransaction(
      status: "deposit" | "withdraw",
      amount: number,
      email: string,
    ) {
      // validate amount
      if (amount < 0 || amount > 100000) {
        throw new Error("จำนวนเงินต้องอยู่ระหว่าง 0 - 100,000 บาท");
      }

      // check balance
      if (status === "withdraw" && amount > this.balance) {
        throw new Error("ยอดเงินคงเหลือไม่เพียงพอ");
      }

      const transaction: Transaction = {
        id: this.data.length + 1,
        dateTime: new Date().toLocaleDateString("th-TH", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Bangkok",
        }),
        amount: amount,
        status: status,
        email: email,
      };

      this.data.push(transaction);
    },

    // find id
    getTransactionById(id: number) {
      const transaction = this.data.find((item) => item.id === id);
      return transaction;
    },

    updateTransactionById(id: number, amount: number) {
      const transaction = this.data.find((item) => item.id === id);

      if (!transaction) {
        throw new Error("ไม่พบ Id ของ Transaction");
      }

      transaction.amount -= amount
    },

    // delete
    deleteTransaction(id: number) {
      const transaction = this.data.find((item) => item.id === id);

      if (!transaction) {
        throw new Error("ไม่พบ Id ของ Transaction");
      }

      this.data = this.data.filter((transaction) => transaction.id !== id);
    },
  },
});
