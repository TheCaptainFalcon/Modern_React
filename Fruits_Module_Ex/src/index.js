import foods from './foods';
import { choice, remove } from './helpers';

let fruit = choice(foods);

console.log(`I would like a ${fruit}, please`);

console.log(`Here is a ${fruit}`);

let remaining = remove(foods, fruit);

console.log(`We are all out, we have ${remaining.length} fruits left`);

