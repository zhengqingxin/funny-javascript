function insertInto(arr, index, values) {
  values = Array.isArray(values) ? values : [values];
  arr = Array.from(arr);
  arr.splice(index, 0, ...values);
  return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(insertInto(arr, 2, 99));              //[ 1, 2, 99, 3, 4, 5 ]
console.log(insertInto(arr, 3, [100, 99, 98]));   //[ 1, 2, 3, 100, 99, 98, 4, 5 ]

//**********************************************萌萌的分隔线************************************************************//

Array.prototype.insertInto = function (index, values) {
  values = Array.isArray(values) ? values : [values];
  this.splice(index, 0, ...values);
};

let arr2 = [1, 2, 3, 4, 5];
arr2.insertInto(2, 99);               //[ 1, 2, 99, 3, 4, 5 ]
console.log(arr2);
arr2.insertInto(3, [100, 99, 98]);
console.log(arr2);                    //[ 1, 2, 99, 100, 99, 98, 3, 4, 5 ]
