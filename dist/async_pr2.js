"use strict";
async function get3() {
    console.log("get3が呼び出されました");
    return 3;
}
console.log("get3を呼び出します");
const b = get3();
b.then((num) => {
    console.log(`num is ${num}`);
});
console.log("get3を呼び出しました");