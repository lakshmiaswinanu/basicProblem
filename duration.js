
const monday = [
  {
      'name'     : 'Write a tutorial',
      'duration' : 180
  },
  {
      'name'     : 'Some web development',
      'duration' : 120
  }
];

const tuesday = [
  {
      'name'     : 'Keep writing that tutorial',
      'duration' : 240
  },
  {
      'name'     : 'Some more web development',
      'duration' : 180
  },
  {
      'name'     : 'A whole lot of no',
      'duration'  :120
  },
{
      'name'     : 'A whole lot of nothing',
      'duration'  : 240
  }
];

const duration =monday.map((x)=> x.duration/60);
const greatDuration = ((x) => Math.min(x.duration) >= 2);
console.log(greatDuration);
const getDuration =tuesday.map((x)=> x.duration/60);
console.log(getDuration);

