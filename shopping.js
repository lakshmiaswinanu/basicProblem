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
];
const getPurchases = purchases.map((x) => x.item);

const getRates = (x) => rates[x];

const getTaxes = (x)=> (taxes[x]||0)/100;

const getDiscounts =(x)=> (discounts[x]||0)/100;

const getUnitsRate =(x)=>{
   const discount = getDiscounts(x.item) * getRates(x.item)
  const tax = getTaxes(x.item) * getRates(x.item)
   const productSum = x.units * getRates(x.item) - discount *x.units + tax * x.units; 
   console.log(productSum);
    return productSum;
};
 let total = 0;
const totalAmount =(itemRates)=>{
for( let i = 0;i <itemRates.length; i++)
{
       total = total + itemRates[i];
   //console.log(total);
} 
return total;
}
const main=()=>{
const unitsRates = purchases.map(getUnitsRate);
const bill = totalAmount(unitsRates);
console.log(bill);
}
main();


