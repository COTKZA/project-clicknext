import { defineStore } from "pinia";

export interface Transaction {
  id: number;
  dateTime: string;
  amount: number;
  status: "deposit" | "withdraw";
  email: string;
}

export const useTransactionStore = defineStore("transactions", {
    
  state: () => ({
    data: [
      {
        id: 1,
        dateTime: "2026-08-31 10:30:00",
        amount: 5000,
        status: "deposit",
        email: "test1234@gmail.com",
      },
      {
        id: 2,
        dateTime: "2026-08-31 10:30:00",
        amount: 3000,
        status: "withdraw",
        email: "test1234@gmail.com",
      },
    ] as Transaction[],
  }),
});
