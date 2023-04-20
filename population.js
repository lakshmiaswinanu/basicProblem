const population=[
  {
    "state": "UttarPradesh",
    "estimate2011": 19.98,
    "estimate2022": 23.32
  },
  {
    "state": "Maharashtra",
    "estimate2011": 11.23,
    "estimate2022": 12.54
  },
  {
    "state": "Bihar",
    "estimate2011": 10.4,
    "estimate2022": 12.49
  },
  {
    "state": "WestBengal",
    "estimate2011": 9.12,
    "estimate2022": 9.86
  },
  {
    "state": "MadhyaPradesh",
    "estimate2011": 7.26,
    "estimate2022": 8.55
  },
  {
    "state": "TamilNadu",
    "estimate2011": 7.21,
    "estimate2022": 7.66
  },
  {
    "state": "Rajashtan",
    "estimate2011": 6.8,
    "estimate2022": 8
  },
  {
    "state": "Karnataka",
    "estimate2011": 6.1,
    "estimate2022": 6.72
  },
  {
    "state": "Gujarat",
    "estimate2011": 6.04,
    "estimate2022": 7
  },
  {
    "state": "Odisha",
    "estimate2011": 4.19,
    "estimate2022": 4.6
  }
]
const getDifferent = (population)=>{

const getDifferent = (Number(population.estimate2022)-Number(population.estimate2011));

const getPrecentage = (getDifferent/(population.estimate2011))*100;

return {...population,Precentage:getPrecentage};
}
const getMax2011 = Math.max(...population.map((population)=>population.estimate2011));
const getMin2011 = Math.min(...population.map((population)=>population.estimate2011));
const getMax2022 = Math.max(...population.map((population)=>population.estimate2022));

const getMin2022 = Math.min(...population.map((population)=>population.estimate2022));
 
const sortTotal = (different) => {
  
	const getSort =different.sort((a, b) => b.total - a.total);
  var i= 1;
  rank = getSort.map((x) => ({
		...x,
		rank: i++ 
  }))
  return rank;
}
const main=()=>{
    const different = population.map(getDifferent);
    const sortedTotal = sortTotal(different);
    console.table(sortedTotal);
  
}
main();