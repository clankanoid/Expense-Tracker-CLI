#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(process.env.HOME || process.env.USERPROFILE, '.expenses.json');

function loadExpenses() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) {}
  return [];
}

function saveExpenses(expenses) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(expenses, null, 2));
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

const args = process.argv.slice(2);
const cmd = args[0];

if (!cmd || cmd === 'list' || cmd === 'ls') {
  const expenses = loadExpenses();
  if (expenses.length === 0) {
    console.log('No expenses yet. Add one with: expense add <amount> <description>');
    process.exit(0);
  }
  console.log('\n📊 Your Expenses:\');
  console.log('─'.repeat(40));
  let total = 0;
  expenses.forEach((e, i) => {
    console.log(`${i + 1}. ${formatCurrency(e.amount)} - ${e.desc}`);
    total += e.amount;
  });
  console.log('─'.repeat(40));
  console.log(`Total: ${formatCurrency(total)}\n`);
} else if (cmd === 'add') {
  const amount = parseFloat(args[1]);
  if (isNaN(amount)) {
    console.log('Usage: expense add <amount> <description>');
    console.log('Example: expense add 12.50 "Coffee"');
    process.exit(1);
  }
  const desc = args.slice(2).join(' ') || 'Untitled';
  const expenses = loadExpenses();
  expenses.push({ amount, desc, date: new Date().toISOString() });
  saveExpenses(expenses);
  console.log(`✅ Added: ${formatCurrency(amount)} - ${desc}`);
} else if (cmd === 'total' || cmd === 'sum') {
  const expenses = loadExpenses();
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  console.log(`Total spending: ${formatCurrency(total)}`);
} else if (cmd === 'clear') {
  saveExpenses([]);
  console.log('🗑️  All expenses cleared!');
} else if (cmd === 'help') {
  console.log(`
📝 Expense Tracker CLI

Commands:
  expense add <amount> <desc>  Add an expense
  expense list                   List all expenses
  expense total                  Show total spending
  expense clear                  Delete all expenses
  expense help                   Show this help
`);
} else {
  console.log('Unknown command. Run: expense help');
}
