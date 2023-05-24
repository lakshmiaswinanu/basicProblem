
const marksheets = [
	{
		rollno: 1,
		class: 'I',
		section: 'A',
		tamil: 78,
		english: 78,
		maths: 45,
		science: 51,
		social: 71,
	},
	{
		rollno: 2,
		class: 'I',
		section: 'A',
		tamil: 68,
		english: 87,
		maths: 48,
		science: 45,
		social: 91,
	},
	{
		rollno: 3,
		class: 'I',
		section: 'B',
		tamil: 78,
		english: 68,
		maths: 56,
		science: 58,
		social: 30,
	},
	{
		rollno: 4,
		class: 'I',
		section: 'B',
		tamil: 78,
		english: 88,
		maths: 59,
		science: 75,
		social: 81,
	},
{
		rollno: 5,
		class: 'III',
		section: 'A',
		tamil: 78,
		english: 78,
		maths: 45,
		science: 51,
		social: 41,
	},
	{
		rollno: 6,
		class: 'III',
		section: 'A',
		tamil: 78,
		english: 88,
		maths: 67,
		science: 51,
		social: 71,
	},
	{
		rollno: 7,
		class: 'III',
		section: 'B',
		tamil: 78,
		english: 78,
		maths: 45,
		science: 51,
		social: 41,
	},
	{
		rollno: 8,
		class: 'III',
		section: 'B',
		tamil: 78,
		english: 58,
		maths: 99,
		science: 71,
		social: 81,
	},

{
		rollno: 9,
		class: 'IV',
		section: 'A',
		tamil: 78,
		english: 95,
		maths: 30,
		science: 77,
		social: 86,
	},
	{
		rollno: 10,
		class: 'IV',
		section: 'B',
		tamil: 78,
		english: 86,
		maths: 69,
		science: 34,
		social: 54,
	},
	{
		rollno: 11,
		class: 'IV',
		section: 'B',
		tamil: 78,
		english: 46,
		maths: 96,
		science: 84,
		social: 74,
	},

];
const arrangePapers = (marks)=>{
	const trays = [];
	const findTrays =(mark)=>trays.find((tray)=> mark.class === tray.class && mark.section === tray.section);
	const addTrays = (mark)=>{
		const newTray= {class : mark.class, section : mark.section, papers: []
		};
trays.push(newTray);
return newTray;	
	};
const processPapers =(mark)=>{
	const findPapers=  findTrays(mark) || addTrays(mark)
findPapers.papers.push(mark);
};
marks.forEach(processPapers);
return trays;
};
const processMark =(findPapers)=>{


const getTotalMark = (x) => x.tamil + x.english + x.science + x.maths + x.social;

const getResult = (x) => Math.min(x.tamil, x.english, x.science, x.maths, x.social) >= 40 ? 'pass' : 'Fail';

const displayMark = (markSheet) =>{

	markSheet.total= getTotalMark(markSheet);
	markSheet.result= getResult(markSheet);

	return markSheet;
}
return findPapers.papers.map(displayMark);
}
const main = () => {
	const getPapers = arrangePapers(marksheets);

	const totalResult = getPapers.map(processMark);

	console.log(totalResult);
}
	main();
