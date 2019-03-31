import selectExpensesTotal from '../selectors/expenses-total'
import expenses from './fixtures/expenses'
import { database } from 'firebase'

beforeEach(() => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  })
  database
    .ref('expenses')
    .set(expensesData)
    .then(() => done())
})
