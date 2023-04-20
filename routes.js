const distances = [
  {
    start: 'chennai',
    end: 'villupuram',
    distance: 166,
  },
  {
    start: 'villupuram',
    end: 'trichy',
    distance: 165,
  },
  {
    start: 'trichy',
    end: 'madurai',
    distance: 138,
  },
  {
    start: 'madurai',
    end: 'thirunelvelli',
    distance: 171,
  },
  {
    start: 'thirunelvelli',
    end: 'kanyakumari',
    distance: 85,

  },
  {
    start: 'trichy',
    end: 'karur',
    distance: 83,
  },
];
const routes = [
  {
    start: 'chennai',
    end: 'trichy',
    stops: ['chennai', 'villupuram', 'trichy'],
  },
  {
    start: 'chennai',
    end: 'karur',
    stops: ['chennai', 'villupuram', 'trichy', 'karur'],
  },
  {
    start: 'trichy',
    end: 'thirunelvelli',
    stops: ['trichy', 'madurai', 'thirunelvelli'],
  },
];

const getDistance = (stops) => stops.map((stop, index, array) =>
  (distances.find((distance) => distance.start === stop && distance.end === array[index + 1]) || { distance: 0 }).distance);

const getTotalDistance = (totalDistance) => totalDistance.reduce((acc, cur) => acc + cur);

const totalDistance = routes.map(route => getTotalDistance(getDistance(route.stops)));

const main = () => console.log(totalDistance);

main();

