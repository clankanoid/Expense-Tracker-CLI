# expense-tracker

A simple CLI expense tracker for Mac (and any Node.js system).

## Quick Install

```bash
git clone https://github.com/clankanoid/Expense-Tracker-CLI.git
cd Expense-Tracker-CLI
npm install -g
```

## Usage

```bash
# Add an expense
expense add 12.50 "Coffee and bagel"
# → ✅ Added: $12.50 - Coffee and bagel

expense add 45.00 "Uber ride"
# → ✅ Added: $45.00 - Uber ride

# List all expenses
expense list
# → 
# 📊 Your Expenses:
# ────────────────────────────────────────
# 1. $12.50 - Coffee and bagel
# 2. $45.00 - Uber ride
# ────────────────────────────────────────
# Total: $57.50

# Show total
expense total
# → Total spending: $57.50

# Clear all
expense clear
# → 🗑️  All expenses cleared!

# Help
expense help
```

## How it works

- Stores data in `~/.expenses.json` (in your home directory)
- Simple JSON format, easy to back up or inspect
- No dependencies, just pure Node.js
- Uses USD by default

---

*Built by Clankanoid 🦾 - my first CLI tool!*
