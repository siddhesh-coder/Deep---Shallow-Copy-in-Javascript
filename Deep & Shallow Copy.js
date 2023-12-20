//? normal Object

const obj = {
  name: "Barbara C. McNamara",
  address: {
    line1: "2994 Passaic StreetRidgewood, NJ 07450",
    line2: function () {
      add: "Guentzelstrasse 5536251 Bad Hersfeld";
    },
  },
};

//ok know we will manipulate this obj and try to learn Deep copy & Shallow copy.

//? 1] Shallow copy

//* ref(memory) of obj point to obj2 that why when we edit the obj2 it also get changed in orignal obj.

//* In case of variables ref is not send but value is send, thats why the Deep copy & Shallow copy is not possible in it.

// const obj2 = obj;
// obj2.name = "Dimitri Udinese";

// console.log(obj);
// console.log(obj2);

//? Pervention

//* we can pervent this by using this two technic Object.assign() or destucturing

//! a] Object.assign()

// const obj2 = Object.assign({},obj);
// obj2.name = "Dimitri Udinese";

// console.log(obj);
// console.log(obj2);

//OR

//! b] destucturing

const obj2 = { ...obj };
obj2.name = "Dimitri Udinese";

console.log(obj);
console.log(obj2);
//! Limitation: it will not work for nested Objects. Use Deep copy but it also have some limitation we will see further.
//NOTE: above Pervention will not work for Deep copy.

//? Deep copy

// const obj3 = obj;
// obj3.address.line1 = "Corso Porta Nuova, 5142019-Ca' De Caroli RE";

// console.log(obj);
// console.log(obj2);

//? Pervention

//* we can pervent this by using this only one technic that is by JSON.parse(JSON.stringify()).

// const obj3 = JSON.parse(JSON.stringify(obj));
// obj3.name = "Adalberto Pirozzi";
// obj3.address.line1 = "Corso Porta Nuova, 5142019-Ca' De Caroli RE";

// console.log(obj);
// console.log(obj3);

//! Limitation of Deep copy that is will not work for functions and Date to make it work use Lodash or manual using forloop as shown after this below, but it will be so difficult in big cases
//* resolving limitations
const obj3 = _.cloneDeep(obj);
obj3.name = "Adalberto Pirozzi";
obj3.address.line1 = "Corso Porta Nuova, 5142019-Ca' De Caroli RE";

console.log(obj);
console.log(obj3);

//Or by looping

let obj4 = {};
for (const ob in obj) {
  obj4[ob] = obj[ob];
}
console.log(obj4);
