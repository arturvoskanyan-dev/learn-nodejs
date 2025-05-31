// ESM => .mjs, package.json "type": "module"

import foo, {add} from "./math.js";
import { User } from "./user.js";

// console.log(add(2, 4));
// console.log(foo(100));

const myUser = new User("Karapet", 53);

console.log(myUser);
myUser.sayHi();