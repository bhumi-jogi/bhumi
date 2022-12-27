import * as f from './first.js';
f.say();
function* gen(){
    let i=0;
    while(true){
        yield i++;
    }
}
console.log(i);