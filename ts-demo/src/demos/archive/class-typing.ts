
class Person2 {

  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

}

 class Student extends Person2 {
   studentId: number;

   constructor(studentId: number, firstName: string, lastName: string) {
     super(firstName, lastName);
     this.studentId= studentId;
   }
 }

//  const student: Student = new Student(1, "Bob", "Smith");

const student: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  studentId: 1,
};

 console.log(student);
 console.log(student instanceof Student);






