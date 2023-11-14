//! Основы 
//* 1

const num = 1

const string = "Islam"

const bolean = true

console.log(num, string, bolean);

//* 2

const num2 = 123

const numToString = parseInt(num2)

console.log(numToString);

//! Массивы

//* 3

const someArray = [1,2,3,4,5]

for (let index = 0; index < someArray.length; index++) {
    console.log(someArray[index]);
}

//! Объекты

//* 4

const someObject = {
    name: "Islam",
    age: 24,
    city: "Bishkek"
}

console.log(someObject.name, someObject.age, someObject.city);
console.log(someObject);

//! Условные операторы 

//* 5

const evenNumbers = 3

function checkEvenNumbers(number) {
    if(number % 2 === 0) {
        console.log(number + " Четное");
    } else {
        console.log(number + " Нечет");
    }
}

const result5 = checkEvenNumbers(evenNumbers)

//! Цикллы

//* 6

for (let i = 1; i < 11; i++) {
    console.log(i);
}

//! Function

//* 7

const arrowFunction = () => {
    console.log("Hello World");
}

arrowFunction()

function declorationfun() {
    console.log("Hello World");
}

declorationfun()

function expressionFun() {
    console.log("Hello World");
}

expressionFun()

//! Промисы

//* 8

const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Успешно")
    })
})


somePromise
    .then((result8) => {
        console.log(result8);
    })

const owibkaPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Ошибка")
    })
})

owibkaPromise
    .catch((error) => {
        console.log(error);
    })

//! Доп


//* 2

function UpperCase(string) {
    return string.map(str => str.toUpperCase())   
}

const words = ["abs","banan","qwerty"]
const returnTo = UpperCase(words)

console.log(returnTo);

//* 6

function array6(numbers6) {
    return numbers6.filter(num => num % 2 === 0)
}

const number6 = [1,2,3,4,5,6,7]
const evenNumbers6 = array6(number6)

console.log(evenNumbers6);

//* 7

function filterSalary(salary) {
    return salary.filter(sal => sal.name > 50000)
}

const salary = [
    {name: "Расул", salary: "45000"},
    {name: "Турсунбек", salary: "200000"},
    {name: "Аттокур ака", salary: "150000"}
]
const result7 = filterSalary(salary)

console.log(result7);

//* 8

function filterNums(someNum) {
    return someNum.filter(sNum => sNum > 10 && sNum < 20)
}

const numbers8 = [5,8,12,15,16,19,25,141,23]

const result8 = filterNums(numbers8)

console.log(result8);

//* 9 

function filterString(strings9) {
    return strings9.filter(str9 => str9.length > 5)
}

const someString = ["Зима","Мандарин", "Апельсин", "Киви"]
const result9 = filterString(someString)

console.log(result9);




