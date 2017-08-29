let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal,hex,binary,octal);

let isDone: boolean = false;
console.log(isDone);
let fullName: string = `Vaibhav Narkhede`;
let age: number = 26;
console.log("age = "+age);

let sentence: string = `Hello, my name is ${ fullName }.`
console.log("sentence = "+sentence);

let list: number[] = [1, 2, 3];
console.log(list);

enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log("enum c = "+c);

console.log("---any type---");
let notSure: any = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
notSure = false; // okay, definitely a boolean
console.log(notSure);
