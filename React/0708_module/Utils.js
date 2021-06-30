// import { add } from "./Tools.js";

// console.log(add)
// console.log('haha', add(1, 2))




import * as tools from "./Tools.js";
import * as addUtils from "./Add.js";

console.log('haha', tools.add(1, 2))
console.log('haha', addUtils.add(1, 2))
console.log('haha1', tools.minus(1, 3))


import Car from "./Good.js";

let car = new Car("black", "Telsa");
car.driving();


import { Car1 } from "./Good.js";    // 要加一个解构，解构 let {a, b} = {a: 1, b: 2}，解构的本质就是赋值 (a = 1, b = 2)

let car1 = new Car1("black", "BMW");
car1.driving();


// 下面的笔记 见 0708_Notes.txt