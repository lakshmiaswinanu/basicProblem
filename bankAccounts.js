
const accounts = [
  {
    name: 'Babu',
    accountNo: 2,
  },
  {
    name: 'Chandra',
    accountNo: 3,
  },
  {
    name: 'Arun',
    accountNo: 1,
  },
];
const balances = {
  //accountNo: balance
  '1': 5000,
  '2': 2000,
  '3': 0,
};

const transactions = [
  {
    accountNo: 1,
    type: 'withdrawal',
    amount: 1000,
  },
  {
    accountNo: 1,
    type: 'deposit',
    amount: 500,
  },
  {
    accountNo: 1,
    type: 'withdrawal',
    amount: 1000,
  },
  {
    accountNo: 2,
    type: 'deposit',
    amount: 300,
  },
  {
    accountNo: 2,
    type: 'withdrawal',
    amount: 200,
  },
  {
    accountNo: 3,
    type: 'deposit',
    amount: 200,
  },
];

var updateBalancesWithTransactions = function () {	// Implement transaction code here.}; var displayBalances = function() {	// Implement display code here.}; // Do not change below this line.var main = function() {	console.log('Balances before transactions');	displayBalances();	updateBalancesWithTransactions();	console.log('Balances after transactions');	displayBalances();} main();
}

var updateBalancesWithTransactions = function () {
  // Implement transaction code here.
};

const getName = accounts.map((x) => x.name);
const getAccountNo = (x) => x.accountNo;
const getBalance = (x) => balances[x];



const displayBalance = (accounts) => accounts.map((acc) => ({ ...acc, balances: getBalance([acc.accountNo]) }));


const updateBalances = (transactions) => transactions.map((acc) => {
  const transaction = acc.type === 'withdrawal'
    ? balances[acc.accountNo] = getBalance([acc.accountNo]) - acc.amount
    : balances[acc.accountNo] = getBalance([acc.accountNo]) + acc.amount;
  return transaction;
})

// Do not change below this line.
var main = function () {

  console.log('Balances before transactions');
  console.log(displayBalance(accounts));
  console.log('Balances after transactions');
  updateBalances(transactions);
  console.log(displayBalance(accounts));
}

main();


