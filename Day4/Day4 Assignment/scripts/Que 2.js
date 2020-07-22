const student = {
    name: "Helsinki",
    age: 24,
    projects: {

        dicegame: "Two player dice game using javascript",
    },
}
console.log(student.age);
console.log(student.projects.dicegame);
const { name, age, projects: { dicegame } } = student;
console.log(name, age, dicegame)
