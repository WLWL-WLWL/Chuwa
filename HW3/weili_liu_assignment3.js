/*
Question 1
Given the following array and implement the table dynamically
*/
const tableInfo = {
    tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
    tableContent: [
      {
        'Student Name': 'John',
        Age: 19,
        Phone: '455 - 983 - 0903',
        Address: '123 Ave, San Francisco, CA, 94011',
      },
      {
        'Student Name': 'Alex',
        Age: 21,
        Phone: '455 - 983 - 0912',
        Address: '456 Rd, San Francisco, CA, 94012',
      },
      {
        'Student Name': 'Josh',
        Age: 22,
        Phone: '455 - 345 - 0912',
        Address: '789 Dr, Newark, CA, 94016',
      },
      {
        'Student Name': 'Matt',
        Age: 23,
        Phone: '321 - 345 - 0912',
        Address: '223 Dr, Sunnyvale, CA, 94016',
      },
    ],
};

let tableHeader = tableInfo.tableHeader;
let tableContent = tableInfo.tableContent;
  
let newTable = document.createElement("table");
newTable.id = 'table';
  
// table head 
let headRow = document.createElement("tr");
newTable.append(headRow);

let head = tableHeader.map((ele) => {
    let th = document.createElement("th");
    th.textContent = ele;
    if(th.textContent == "Address"){
        th.className = 'address';
    }
    return th;
});
headRow.append(...head);
  
 // table rows
tableContent.map((obj) => {
    let values = Object.values(obj);
    let tr = document.createElement("tr");
      
    let td = values.map((ele) => {
        let td = document.createElement("td");
        td.textContent = ele;
        return td;
    });
    tr.append(...td);
    newTable.append(tr);
});
document.body.append(newTable);


/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/  

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let listDiv = document.createElement("div");

const createElementHelper = (type, textContent) =>{
    let newElement = document.createElement(type);
    newElement .textContent = textContent;
    return newElement;
}

let orderedList = document.createElement("ol");
listDiv.append(orderedList);

let array = list.map((ele) => {
  return createElementHelper('li',ele);
});

orderedList.append(...array);

let unorderedlist = document.createElement("ul");
listDiv.append(unorderedlist);

let array2 = list.map((ele) => {
  return createElementHelper('li',ele);
});
unorderedlist.append(...array2);
document.body.append(listDiv);

/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/
const dropDownList = [
    { value: "newark", content: "Newark" },
    { value: "santaClara", content: "Santa Clara" },
    { value: "unionCity", content: "Union City" },
    { value: "albany", content: "Albany" },
    { value: "dalyCity", content: "Daly City" },
    { value: "sanJose", content: "San Jose" },
  ];

let select = document.createElement("select");
let options = dropDownList.map((ele) => {
    let option = document.createElement("option");
    option.value = ele.value;
    option.textContent = ele.content;
    return option;
});
select.append(...options);
document.body.append(select);