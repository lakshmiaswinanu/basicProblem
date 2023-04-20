const markSheets = [
	{
		student: 'Sriram',
		rollNo: 11,
	},

	{
		student: 'Ram',
		rollNo: 16,
	},
	{
		student: 'sri',
		rollNo: 18,
	},
	{
		student: 'mani',
		rollNo: 20,
	},
	{
		student: 'Prasanna',
		rollNo: 22,
	},
	{
		student: 'balaji',
		rollNo: 24,
	},
]

const studentMarks = {
	11: {
		tamil: 80,
		english: 90,
		science: 86,
		maths: 97,
		social: 76,
	},
	16: {
		tamil: 60,
		english: 97,
		science: 100,
		maths: 34,
		social: 100,
	},
	18: {
		tamil: 60,
		english: 90,
		science: 66,
		maths: 93,
		social: 46,
	},
	20: {
		tamil: 40,
		english: 70,
		science: 86,
		maths: 73,
		social: 86,
	},
	22: {
		tamil: 50,
		english: 60,
		science: 80,
		maths: 83,
		social: 96,
	},
	24: {
		tamil: 55,
		english: 65,
		science: 70,
		maths: 39,
		social: 99,
	},
};

const getMark = (x) => studentMarks[x.rollNo];
const getTotalMark = (x) => {
	const finalTotal = x.tamil + x.english + x.science + x.maths + x.social;
	return finalTotal;
}

const getResult = (x) => Math.min(x.tamil, x.english, x.science, x.maths, x.social) >= 40 ? 'pass' : 'Fail';

const displayMark = (markSheets) => markSheets.map((x) => ({
	...x,
	total: getTotalMark(studentMarks[x.rollNo]),
	result: getResult(studentMarks[x.rollNo])
}));

const sortTotal = (totalResult) => {
	const getSort = totalResult.sort((a, b) => b.total - a.total);
	var i = 1;
	const rank = getSort.map((x) => ({
		...x,
		rank: (x.result === "pass") ? i++ : "-"
	}));
	return rank;
}

const main = () => {
	const totalResult = displayMark(markSheets);
	const sortedTotal = sortTotal(totalResult);
	console.table(sortedTotal);
	console.log(displayMark(markSheets));
}

main();