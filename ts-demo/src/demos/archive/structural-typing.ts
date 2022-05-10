// class Person {

//   firstName: string;
//   lastName: string;

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

// }

// interface Person {
//   firstName: string,
//   lastName: string,
// }

type Person = {
  firstName: string,
  lastName: string,
};

// interface Student extends Person {
//   studentId: number;
// }

type Student = Person & { studentId: number };

const person: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  studentId: 1,
};

console.log(person.firstName);

// const person2 = new Person('Sally', 'Smith');


