const incomeColors = ['#154360', '#1A5276', '#1F618D', '#2471A3', '#2980B9 ', '#5499C7', '#7FB3D5 ', '#A9CCE3', '#D4E6F1'];
const expenseColors = ['#E74C3C', '#EC7063 ', '#D98880', '#F1948A', '#E59866', '#FAD7A0', '#F5B7B1', '#F2D7D5 ', '#FADBD8', '#F6DDCC', '#FDF2E9'];

export const incomeCategories = [
    { type: 'Business', amount: 0, color: incomeColors[0] },
    { type: 'Investments', amount: 0, color: incomeColors[1] },
    { type: 'Extra income', amount: 0, color: incomeColors[2] },
    { type: 'Deposits', amount: 0, color: incomeColors[3] },
    { type: 'Lottery', amount: 0, color: incomeColors[4] },
    { type: 'Gifts', amount: 0, color: incomeColors[5] },
    { type: 'Salary', amount: 0, color: incomeColors[6] },
    { type: 'Savings', amount: 0, color: incomeColors[7] },
    { type: 'Rental income', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
    { type: 'Bills', amount: 0, color: expenseColors[0] },
    { type: 'Car', amount: 0, color: expenseColors[1] },
    { type: 'Clothes', amount: 0, color: expenseColors[2] },
    { type: 'Travel', amount: 0, color: expenseColors[3] },
    { type: 'Food', amount: 0, color: expenseColors[4] },
    { type: 'Shopping', amount: 0, color: expenseColors[5] },
    { type: 'House', amount: 0, color: expenseColors[6] },
    { type: 'Entertainment', amount: 0, color: expenseColors[7] },
    { type: 'Phone', amount: 0, color: expenseColors[8] },
    { type: 'Pets', amount: 0, color: expenseColors[9] },
    { type: 'Other', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
    incomeCategories.forEach((c) => c.amount = 0);
    expenseCategories.forEach((c) => c.amount = 0);
};