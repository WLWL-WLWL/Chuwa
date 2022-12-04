const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
   ];

// Q1. Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
const doubleQuantityAndPrice = (array)=>{
    return array.map((ele)=>{
        return {
            quantity: ele.quantity * 2,
            price: ele.price * 2 
        }
    });
};
console.log(`Q1: `,doubleQuantityAndPrice(itemsObject));

// Q2. Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
const filterArray = (array) => {
    return array.filter((ele) => {
        return ele.quantity > 2 && ele.price > 300;
    });
};
console.log(`Q2: `,filterArray(itemsObject));

// Q3. Given the array, implement a function to calculate the total value of the items.
const countValue = (array) => {
    return array.reduce((accum, cur) => {
       return  accum + cur.quantity * cur.price;
    },0)
};
console.log(`Q3: `,countValue(itemsObject));

//===================================
const string = ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';

//Q4. Given the string, implement a function to remove all the non-alphabet characters 
//and extra space in the string and convert the string to all lowercase.

const removeAndConvert = (str) => {
 return str.split(/[ -]+/).join(" ").trim().toLowerCase();
};
console.log(`Q4: `,removeAndConvert(string));


//===================================
const first = [
    { uuid: 2, name: "test" }, { uuid: 5, name: "test5" }, { uuid: 3, name: "test3" }
];

const second = [
        { uuid: 6, role: "pm" },
        { uuid: 4, role: "engineer" },
        { uuid: 1, role: "manager" },
        { uuid: 2, role: "associate" }
];

//Q5. Implement a function to merge two arrays of objects on uuid, 
//but first has uuid and name, second has uuid and role. With the not existing property, 
//fill with null. Sort according to uuid after merge.

const mergeTwoArrays = (arr1,arr2) => {
    let obj = {};
    const mergedArray = [...arr1, ...arr2];
    //console.log(mergedArray)
    mergedArray.forEach((ele) => {
    if (!obj[ele.uuid]) {
        obj[ele.uuid] = {
        uuid: ele.uuid,
        name: ele.name ?? null,
        role: ele.role ?? null,
      };
    } else {
      obj[ele.uuid] = { ...obj[ele.uuid], ...ele };
    }
    });
  return Object.values(obj);
  //.sort((a,b)=> b.uuid - a.uuid);
}

console.log(`Q5: `,mergeTwoArrays(first, second));