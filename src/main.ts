type Student = {
    firstName: string;
    lastName: string;
    age: number;
    courses : Course[];
};

type Course = {
    name: string;
    grades: string[];
};

const mathStudent1: Course = {
    name: "Mathe",
    grades: ["A", "", "F", "3"]
};

const sportStudent1: Course = {
    name: "Sport",
    grades: ["1", "B", "2", "5"]
};

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 16,
    courses: [mathStudent1, sportStudent1]
};

const sportStudent2: Course = {
    name: "Sport",
    grades: ["A", "", "1", "2"]
};

const kunstStudent2: Course = {
    name: "Kunst",
    grades: ["1", "4", "3", "1"]
};

const mathStudent2: Course = {
    name: "Mathe",
    grades: ["A", "1", "1", "1"]
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 17,
    courses: [sportStudent2, kunstStudent2, mathStudent2]
};

const biologyStudent3: Course = {
    name: "Bio.",
    grades: ["A", "1", "F", ""]
};

const mathStudent3: Course = {
    name: "Mathe",
    grades: ["D", "", "4", "5"]
};

const student3: Student = {
    firstName: 'Bob',
    lastName: 'Doe',
    age: 17,
    courses: [biologyStudent3, mathStudent3]
};

const sportStudent4: Course = {
    name: "Sport",
    grades: ["A", "1", "1", "1"]
};

const mathStudent4: Course = {
    name: "Mathe",
    grades: ["A", "1", "1", "1"]
};


const student4: Student = {
    firstName: 'Juliette',
    lastName: 'Genius',
    age: 9,
    courses: [sportStudent4, mathStudent4]
};

function printStudent(student: Student) {
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")");
    console.log("=".repeat(student.firstName.length + student.lastName.length + student.age.toString().length + 4));
    console.log();
    console.log("Noten: ");
    student.courses
        .map((course) => course.name + ": " + course.grades
            .map((grade)=> !grade ? "*" : grade)
            .join(", "))
        .forEach((course) => console.log(course));
    console.log();
}

const studentList: Student[] = [student1, student2, student3, student4];

function printStudentList(studentList: Student[]) {
    studentList.forEach((student) => {
        printStudent(student);
        console.log();
    });
}

//printStudentList(studentList);

// Average Grades
const gradeMap: Map<string, number> = new Map<string, number>([
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["A", 1],
    ["B", 2],
    ["C", 3],
    ["D", 4],
    ["E", 5],
    ["F", 6],
    ["", 0]]
);

function calculateAverageGradeForCourse(course:Course){
    let sum:number = course.grades.reduce((acc, grade) => acc + gradeMap.get(grade), 0)
    let numberOfGrades:number = course.grades.reduce((acc, grade) => acc + (grade ? 1 : 0), 0);

    return Number((sum/ numberOfGrades).toFixed(1));
}

function printAverageGradeForStudentCourses(student:Student){
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")");
    console.log("=".repeat(student.firstName.length + student.lastName.length + student.age.toString().length + 4));
    console.log();
    console.log("Noten: ");
    student.courses
        .map((course) => course.name + ": " + calculateAverageGradeForCourse(course))
        .forEach((course) => console.log(course));
    console.log();
}
printAverageGradeForStudentCourses(student1);

function calculateAverageGradeForStudent(student:Student){
    let sum:number = student.courses.reduce((acc, course) => acc + calculateAverageGradeForCourse(course), 0);
    let numberOfCourses:number = student.courses.length;
    return Number((sum/ numberOfCourses).toFixed(1));
}

function printAverageGradeForStudent(student:Student){
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")");
    console.log("=".repeat(student.firstName.length + student.lastName.length + student.age.toString().length + 4));
    console.log("Durchschnittsnote: " + calculateAverageGradeForStudent(student));
    console.log();
}

printAverageGradeForStudent(student1);

function printAverageGradeForStudentList(studentList:Student[]){
    studentList.forEach((student) => {
        printAverageGradeForStudent(student);
    });
}

printAverageGradeForStudentList(studentList);

function calculateAverageGradeForStudentList(studentList:Student[]){
    let sum:number = studentList.reduce((acc, student) => acc + calculateAverageGradeForStudent(student), 0);
    let numberOfStudents:number = studentList.length;
    return Number((sum/ numberOfStudents).toFixed(1));
}

console.log("Durchschnittsnote aller Schüler: " + calculateAverageGradeForStudentList(studentList));