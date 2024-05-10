const Person = require('./person');

class Teacher extends Person{
  constructor(firstName, lastName, subject, yearsOfExperience){
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers){
    return teachers.reduce((sum, teacher) => sum + teacher.yearsOfExperience, 0);
  }
}
// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
