// var student = {
//     firstName: "Vaibhav",
//     lastName: "Mahmia",
//     age: 21,
//     greeting: function(){
//         return "Hi im "+this.firstName+" and im "+this.age+" years old.";
//     }
// };

// console.log(student.greeting());
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.age);

// console.log(student["firstName"]);

// var student1 = new Object();
// student1.firstName = "John";
// student1.lastName = "Parker";
// student1.age = 7;

// var student2 = {}
// student2.firstName = "Zack";

// console.log(student);
// console.log(student1);
// console.log(student2);

var students = [];

function student(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, Im "+this.firstName+" and im "+this.age+" years old.";
    };
}

var s1 = new student("Jenny","Laga",5);
// console.log(s1);
// console.log(s1.greeting);

students.push(s1);
students.push(new student("Timmy", "Turner", 8));

// console.log(students);

for(var index = 0; index < students.length; index++){
    var student = students[index];
    console.log(student.greeting());
}

var student = students[0];
for(var key in student){
    console.log(student[key]);
}

for(var key in students){
    console.log(students[key].firstName);
}