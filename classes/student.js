const Person = require('./person');

class Student extends Person{
  constructor(firstName, lastName, major, GPA){
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2){
    let GPA1 = student1.GPA;
    let GPA2 = student2.GPA;

    if (GPA1 > GPA2){
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`
    } else if (GPA2 > GPA1){
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`
    } else if (GPA1 === GPA2) {
      return 'Both students have the same GPA'
    }
  }
}
// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
