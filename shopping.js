var rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

var discounts = {
  // values are in percentages.
  Apple: 10,
};

var taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
};

var purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  },
]

const getPurchases = purchases.map((purchase) => purchase.item);

const getRates = (purchase) => rates[purchase];

const getTaxes = (purchase) => (taxes[purchase] || 0) / 100;

const getDiscounts = (purchase) => (discounts[purchase] || 0) / 100;

const getUnitsRate = (purchase) => {
  const discount = getDiscounts(purchase.item) * getRates(purchase.item)
  const tax = getTaxes(purchase.item) * getRates(purchase.item)
  const productSum = purchase.units * getRates(purchase.item) - discount * purchase.units + tax * purchase.units;
  console.log(productSum);
  return productSum;
}

let total = 0;
const totalAmount = (itemRates) => {
  for (let i = 0; i < itemRates.length; i++) {
    total = total + itemRates[i];
    //console.log(total);
  }
  return total;
}

const main = () => {
  const unitsRates = purchases.map(getUnitsRate);
  const bill = totalAmount(unitsRates);
  console.log(bill);
}

main();


