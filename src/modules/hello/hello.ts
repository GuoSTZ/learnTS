// class helloWorld{
//     private _name: string = 'ming'
//     _age: number = 16
//     count: string|number
//     get name():string{
//         return this._name
//     }
//     set name(name: string){
//         this._name = name
//     }
//     get age():number{
//         return this._age+1
//     }
// }

// 只读属性
// function readOnlyTest():void{
//     let array:number[] = [1,2,3,4]
//     let arrayTest : ReadonlyArray<number> = array
//     array.push(5)
//     console.log(array,'array')
//     console.log(arrayTest,'arrayTest')
//     console.log(arrayTest[7],'test')
// }
// readOnlyTest()
// let helloWorldExp = new helloWorld()
// helloWorldExp.name = 'andy'
// document.body.innerHTML =  `my name is ${helloWorldExp.name},my age is ${helloWorldExp._age}`;

// 方法完整类型
// let myAdd: (baseValue: number, increment: number) => number = function(x: number, y: number): number { return x + y; };

// function buildName(firstName: string, lastName = "Smith") {
//     return firstName + " " + lastName;
// }
// console.log(buildName('Bob','Smith'))

// 方法重载
// let suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickCard(x: {suit: string; card: number; }[]): number;
// function pickCard(x: number): {suit: string; card: number; };
// function pickCard(x): any {
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }
// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
// let pickedCard2 = pickCard(15);
// console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// 泛型
// function identity<T>(arg: T):T{
//     return arg
// }

// function identityAny(arg: any): any {
//     return arg;
// }
// console.log(identityAny(1))

// 枚举
// exmaple1
// enum E1 {x,y,z}
// console.log(E1.x,E1.y,E1.z)

// exmaple2
// enum ShapeKind {
//     Circle,
//     Square,
// }
// interface Circle {
//     kind: ShapeKind.Circle;
//     radius: number;
// }
// interface Square {
//     kind: ShapeKind.Square;
//     sideLength: number;
// }
// let c: Circle = {
//     kind: ShapeKind.Circle,
//     radius: 100,
// }
// console.log(c,'c')

// exmaple3,映射
// enum E2{
//     x=2,y=0,z=0
// }
// console.log(E2[0])

// example4，外部枚举
// declare enum E3 {
//     A = 1,
//     B,
//     C = 2
// }
// console.log(E3)

// example5
// const enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// console.log(directions)

// 类型推论
// example1
// window.onmousedown = function(mouseEvent) {
//     console.log(mouseEvent.button);
// };

// 类型兼容性
//example1
// let y = {name: 'Alice',age: 16}
// function greet(x: {name: string}){
//     console.log(`Hello,${x.name}`)
// }
// greet(y)

//example2
// enum EventType { Mouse, Keyboard }

// interface Event { timestamp: number; }
// interface MouseEvent extends Event { xx: number; yy: number }
// interface KeyEvent extends Event { keyCode: number }
// function listenEvent(eventType: EventType, handler: (n: Event) => void) {

// }

// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.xx + ',' + e.yy));
// listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).xx + ',' + (<MouseEvent>e).yy));
// listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.xx + ',' + e.yy)));
// listenEvent(EventType.Mouse, (e: number) => console.log(e));

//example3
// class Animal {
//     feet: number;
//     private name: string;
//     constructor(name: string, numFeet: number) { }
// }
// class Size {
//     feet: number;
//     private name: string;
//     constructor(numFeet: number) { }
// }
// let a: Animal;
// let s: Size;
// a = s;
// s = a;

// 交叉类型
// 可以具备两个类的属性
// function extend<T, U>(first: T, second: U): T & U {
//     let result = <T & U>{};
//     for (let id in first) {
//         (<any>result)[id] = (<any>first)[id];
//     }
//     for (let id in second) {
//         if (!result.hasOwnProperty(id)) {
//             (<any>result)[id] = (<any>second)[id];
//         }
//     }
//     return result;
// }

// class Person {
//     constructor(public name: string) { }
// }
// interface Loggable {
//     log(): void;
// }
// class ConsoleLogger implements Loggable {
//     log() {
//         console.log('class ConsoleLogger implements Loggable')
//     }
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// var n = jim.name;
// console.log(n)
// jim.log();

// 联合类型
// function padLeft(value: string, padding: any) {
//     if (typeof padding === "number") {
//         console.log(Array(padding + 1).join(" ") + value) 
//     }
//     else if (typeof padding === "string") {
//         console.log(padding + value)
//     } 
//     else
//         throw new Error(`Expected string or number, got '${padding}'.`);
// }
// padLeft("Hello world", 1); 

// function padLeft2(value: string, padding: number | string) {
//     if (typeof padding === "number") {
//         console.log(Array(padding + 1).join(" ") + value) 
//     }
//     else if (typeof padding === "string") {
//         console.log(padding + value)
//     } 
//     else
//         throw new Error(`Expected string or number, got '${padding}'.`);
// }
// padLeft2("Hello world", 'string'); 

// function Id(id: number | string | boolean){
//     console.log(typeof id)
// }
// Id(1)
// Id('str')
// Id(true)
// Id(null)
// Id(undefined)

// let a : number | string | boolean = []
// console.log(a)

// type name = string
// let str : name = 'str'
// console.log(str)

// 二叉树
// type Tree<T> = {
//     value: T;
//     left: Tree<T>;
//     right: Tree<T>;
// }
// type Yikes = Array<Yikes>

// let sym1 = Symbol('str')
// let sym2 = Symbol(2)
// let sym = Symbol()
// console.log(sym1)
// console.log(sym2)
// console.log(sym1.toString())

// let pets = new Set(["Cat", "Dog", "Hamster"]);
// pets["species"] = "mammals";
// pets["species1"] = "mammals1";

// for (let pet in pets) {
//     console.log(pet,'*'); // "species"
// }
// for (let pet of pets) {
//     console.log(pet,'-'); // "Cat", "Dog", "Hamster"
// }


