import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ExpenseType } from "@/Types";

const initialExpenses: ExpenseType[] = [
  {
    id: "e1",
    amount: 50,
    title: "Groceries",
    date: new Date("2024-03-5").toISOString(),
  },
  {
    id: "e2",
    amount: 20,
    title: "Transport",
    date: new Date("2024-02-5").toISOString(),
  },
  {
    id: "e3",
    amount: 100,
    title: "Utilities",
    date: new Date("2024-07-5").toISOString(),
  },
];

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: initialExpenses,
  },
  reducers: {
    addExpense: (state, action: PayloadAction<ExpenseType>) => {
      const id = new Date().toString() + Math.random().toString();
      const newExpense = {
        ...action.payload,
        id: id,
        date: new Date().toISOString(),
      };
      state.expenses.push(newExpense);
    },
    updateExpense: (state, action: PayloadAction<ExpenseType>) => {
      const index = state.expenses.findIndex(
        (exp) => exp.id === action.payload.id
      );
      if (index !== -1) {
        state.expenses[index] = {
          ...action.payload,
          date: new Date().toISOString(),
        };
      } else {
        console.error("Expense not found");
      }
    },
    deleteExpenses: (state, action: PayloadAction<ExpenseType>) => {
      const index = state.expenses.findIndex(
        (exp) => exp.id === action.payload.id
      );
      state.expenses.splice(index, 1);
    },
  },
});

export const { addExpense, updateExpense, deleteExpenses } =
  expenseSlice.actions;

export default expenseSlice.reducer;
