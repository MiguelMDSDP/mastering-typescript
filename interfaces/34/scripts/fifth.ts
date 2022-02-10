interface ITodo {
    [index: number]: string;
}

const myTasks: ITodo = ["Write test", "Code", "Refactor"];

console.log(myTasks[0]);
console.log(myTasks[1]);
console.log(myTasks[2]);