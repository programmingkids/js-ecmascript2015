function sayHello(name) {
    console.log("I am " + name);
}

function sayHowareyou(name) {
    console.log("How are you," + name);
}

// モジュールとしてsayHelloと、sayHowareyouをエクスポート
module.exports = {sayHello, sayHowareyou};
