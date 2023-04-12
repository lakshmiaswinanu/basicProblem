
const input = [
	{
		name: 'John',
		age: 13,
	},
	{
		name: 'Mark',
		age: 56,
	},
	{
		name: 'Rachel',
		age: 45,
	},
	{
		name: 'Nate',
		age: 67,
	},
	{
		name: 'Jeniffer',
		age: 65,
	},
];
const getMinAge = input.map((x) =>x.age);
console.log([Math.min(...getMinAge)]);
console.log([Math.max(...getMinAge)]);
console.log([Math.max(...getMinAge)-Math.min(...getMinAge)]);
