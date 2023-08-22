// //1:
// function add (num1:number ,num2:number) :number {
//     return num1 + num2
// }

// console.log(add(2,5));

//// 2:
// function bigger (num1:number ,num2:number) :number {
//     if (num1 > num2){
//         return num1
//     }
//     else {
//         return num2
//     }
// }

// console.log(bigger(6 ,8));

//// 3:
// function evenUneven(num:number) :string {
//     if (num % 2 == 0){
//         return "even"
//     }
//     else {
//         return "uneven"
//     }
// }
// console.log(evenUneven(7));

//// 4:
// function lenString( word:string) :number {
//     const a = word.length
//     return a
// }
// console.log(lenString('lobuvich'));

//// 5:
// function generateArray(n :number): number[] {
//     const resold: number[] = []
//     for (let i = 1; i <= n ; i++) {
//         resold.push(i)
//     }
//     return resold
// }
// console.log(generateArray(7));

// 6:
// function findHighestNumber(numbers:[number]) {
//     if (numbers.length === 0) {
//         throw new Error("arr is empty");

//     }
//     let highest = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > highest) {
//             highest = numbers[i];
//         }
//     }
//     return highest;
// }
// console.log(findHighestNumber([2,3,4,5,6,7,8]));

// 7:
// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };
// const person: Person = {
//   name: "israel",
//   age: 24,
//   isStudent: false,
// };
// console.log(person);

// 8:
// function stringPer({name,age,isStudent}):Person {
//   console.log(`name: ${person.name}`);
//   console.log(`age: ${person.age}`);
//   console.log(`isStudent ${person.isStudent}`);
// }

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// const person: Person = {
//   name: "israel",
//   age: 24,
//   isStudent: true,
// };
// stringPer(person);

// 9:
// type Person = {
//     name: string;
//     age: number;
//     isStudent: boolean;
//   };
//   const person1: Person = {
//     name: "israel",
//     age: 26,
//     isStudent: false,
//   };

// function isMinor (person:Person):boolean {
//     return person.age < 18
// }
// console.log(isMinor(person1));

// 10:
interface Book {
  title: string;
  author: string;
  year: number;
}

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type Reader = Person & {
  favoriteBook: Book;
};

const book1: Book = {
  title: "licotei umarim",
  author: "Rabbi Shnior Zalman",
  year: 1815,
};
const book2: Book = {
  title: "reshmese",
  author: "Rabbi Menachem Mendel Schneerson",
  year: 1996,
};
const reader1: Reader = {
  name: "david",
  age: 40,
  isStudent: false,
  favoriteBook: book1,
};
const reader2: Reader = {
  name: "Alice",
  age: 90,
  isStudent: false,
  favoriteBook: book2,
};
const readers: Reader[] = [reader1, reader2];
function hiage(reader1: Person, reader2: Person): string {
  if (reader1.age > reader2.age) {
    return reader1.name;
  } else {
    return reader2.name;
  }
}
console.log(hiage(reader1, reader2));

const books: Book[] = [book1, book2];
function oldBook(book1: Book, book2: Book): string {
  if (book1.year < book2.year) {
    return book1.title;
  } else {
    return book2.title;
  }
}
console.log(oldBook(book1 , book2));