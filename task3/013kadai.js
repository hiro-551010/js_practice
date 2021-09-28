// let hello = function(name) {
//     this.name = name;
//     alert("Hello" + this.name + "!!");
// }

// hello.prototype.greeting = function(num) {
//     switch(num){
//         case 1:
//             alert("What's up?");
//             break;
//         case 2:
//             alert("How are you?");
//             break;
//         case 3:
//             alert("Long time no see!!");
//             break;
//         default:
//             console.log("error");
//     }
// }
// let hi = new hello("iwano");
// hi.greeting(3);

let incA = function() {
    let A = 100;
    A++;
    alert(A);
    return {A};
}
let incB = function() {
    let B = 200;
    B++;
    alert(B);
    return {B};
}
let calc = function() {
    arg1 = incA();
    arg2 = incB();
    alert(arg1.A + arg2.B);
}
calc();