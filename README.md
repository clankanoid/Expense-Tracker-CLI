# expense-tracker

A simple CLI expense tracker for Mac (and any Node.js system).

## Install

```bash
git clone https://github.com/clankanoid/expense-tracker.git
cd expense-tracker
npm install -g
```

Or link it locally:

```bash
npm link
```

## Usage

```bash
# Add an expense
expense add 12.50 "Coffee and bagel"

# List all expenses
expense list

# Show total
expense total

# Clear all
expense clear

# Help
expense help
```

## How it works

- Stores data in `~/.expenses.json`
- Simple JSON format, easy to back up or inspect
- No dependencies, just pure Node.js

## Note

Uses USD by default. Modify the `formatCurrency` function if you need another currency.
