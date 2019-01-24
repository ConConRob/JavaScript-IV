// CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
class Person {
    constructor({name, age, location, gender}){
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}
// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
    constructor({name, age, location, gender, specialty, favLanguage, catchPhrase}){
        super({name, age, location, gender});
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    changeGrade(student){
        student.grade += (Math.random()-.5)*10;
    }
}

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
class Student extends Person {
    constructor({name, age, location, gender, previousBackground, className, favSubjects}){
        super({name, age, location, gender});
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = Math.random()*100;
        this.isGrad = false;
    }
    listsSubjects(){
        this.favSubjects.forEach(favSubject => {console.log(favSubject)});
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    graduate(){
        if(this.grade>70 ||this.isGrad){
            this.isGrad=true;
            console.log(`${this.name} graduated`)
        }else{
            console.log('Not ready to grad');
        }
    }
}
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
class ProjectManager extends Instructor {
    constructor({name, age, location, gender, specialty, favLanguage, catchPhrase, gradClassName, favInstructor}){
        super({name, age, location, gender, specialty, favLanguage, catchPhrase});
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

//================================TESTS============================================
//PERSONS
const tim = new Person({
    name: 'Tim',
    location: 'Canada',
    age: 37,
    gender: 'male',
});
const jim = new Person({
    name: 'Jim',
    location: 'Nanaimo',
    age: 23,
    gender: 'male',
});
const kim = new Person({
    name: 'Kim',
    location: 'Vancouver',
    age: 26,
    gender: 'female',
});

//Instructors
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  const ted = new Instructor({
    name: 'Ted',
    location: 'New York',
    age: 80,
    gender: 'male',
    favLanguage: 'machine code',
    specialty: 'Old stuff',
    catchPhrase: `Forgot all the homies`
  });

//students
const connor = new Student({
    name: 'Connor',
    location: 'Moffat',
    age: 25,
    gender: 'male',
    previousBackground: 'MECH ENG', 
    className: 'WEBEU1', 
    favSubjects: 'javascript'
});

const baxtor = new Student({
    name: 'Baxtor',
    location: 'London',
    age: 35,
    gender: 'male',
    previousBackground: 'cool things', 
    className: 'to cool for school', 
    favSubjects: 'whatever is in'
});
//PMS
const orlando = new ProjectManager({
    name: 'Orlando',
    location: 'USA',
    age: '?',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'everything',
    catchPhrase: `Don't forget the homies`,
    gradClassName:'the best one',
    favInstructor:'Gabe'
});
const stranger = new ProjectManager({
    name: '...',
    location: '...',
    age: '...',
    gender: '...',
    favLanguage: '...',
    specialty: '...',
    catchPhrase: `...`,
    gradClassName: '...',
    favInstructor: '...',
});



tim.speak();//Hello my name is Tim, I am from Canada
jim.speak();//Hello my name is Jim, I am from Nanaimo
kim.speak();//Hello my name is Kim, I am from Vancouver
ted.demo('old stuff');//Today we are learning about old stuff
fred.grade(connor, 'javascript'); //Connor receives a perfect score on javascript
stranger.standUp('weird channel');//... announces to weird channel, @channel standy times!​​​​​
orlando.debugsCode(baxtor, "js"); //Orlando debugs Baxtor's code on js
//STRETCH test
console.log(connor.grade);
orlando.changeGrade(connor);
console.log(connor.grade);
connor.graduate()
// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.