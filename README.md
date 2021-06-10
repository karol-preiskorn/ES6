# co zrobić z frontentu


## Code Wars
https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

- msd developer network
- react 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

# Przykład zrobienia
- https://codepen.io/jeepFreeq/pen/VwpegQK?editors=1111
```JavaScript
const arr = [1, 2, 3, 5];

for (let i = 0; i < arr.length; i += 1) {
  setTimeout(() =>
    console.log(`Index: ${i}, element: ${arr[i]}`), 1000)
}
```

- https://codepen.io/jeepFreeq/pen/RwWoEKO?editors=1111
```JavaScript
let attachments = [
	{
		files: [
			{
				id: 1,
				insertDate: 1587387095000,
				name: "OneSpan-Accessibility-withoutspaces.pdf",
				preview: true
			},
			{
				id: 2,
				insertDate: 1587387155000,
				name: "All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			},
			{
				id: 3,
				insertDate: 1587387167000,
				name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			}
		],
		id: "MzssT1vdNMA8",
		name: "test1",
		required: true,
		status: "COMPLETE"
	},
	{
		files: [
			{
				id: 1,
				insertDate: 1587387095000,
				name: "OneSpan-Accessibility-withoutspaces.pdf",
				preview: true
			},
			{
				id: 2,
				insertDate: 1587387155000,
				name: "All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			},
			{
				id: 3,
				insertDate: 1587387167000,
				name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			}
		],
		id: "MzssT1vdNMA8",
		name: "test1",
		required: true,
		status: "COMPLETE"
	},
	{
		files: [
			{
				id: 1,
				insertDate: 1587387095000,
				name: "OneSpan-Accessibility-withoutspaces.pdf",
				preview: true
			},
			{
				id: 2,
				insertDate: 1587387155000,
				name: "All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			},
			{
				id: 3,
				insertDate: 1587387167000,
				name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			}
		],
		id: "MzssT1vdNMA8",
		name: "test1",
		required: true,
		status: "COMPLETE"
	}
];


const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log("sum: " + attachments.reduce(reducer.map());
//try to do it with functional programminlet attachments = [
	{
		files: [
			{
				id: 1,
				insertDate: 1587387095000,
				name: "OneSpan-Accessibility-withoutspaces.pdf",
				preview: true
			},
			{
				id: 2,
				insertDate: 1587387155000,
				name: "All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			},
			{
				id: 3,
				insertDate: 1587387167000,
				name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			}
		],
		id: "MzssT1vdNMA8",
		name: "test1",
		required: true,
		status: "COMPLETE"
	},
	{
		files: [
			{
				id: 1,
				insertDate: 1587387095000,
				name: "OneSpan-Accessibility-withoutspaces.pdf",
				preview: true
			},
			{
				id: 2,
				insertDate: 1587387155000,
				name: "All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			},
			{
				id: 3,
				insertDate: 1587387167000,
				name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			}
		],
		id: "MzssT1vdNMA8",
		name: "test1",
		required: true,
		status: "COMPLETE"
	},
	{
		files: [
			{
				id: 1,
				insertDate: 1587387095000,
				name: "OneSpan-Accessibility-withoutspaces.pdf",
				preview: true
			},
			{
				id: 2,
				insertDate: 1587387155000,
				name: "All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			},
			{
				id: 3,
				insertDate: 1587387167000,
				name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
				preview: true
			}
		],
		id: "MzssT1vdNMA8",
		name: "test1",
		required: true,
		status: "COMPLETE"
	}
];


const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log("sum: " + attachments.reduce(reducer.map());
//try to do it with functional programming
```


