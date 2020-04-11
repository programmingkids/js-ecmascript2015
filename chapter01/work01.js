// グローバル変数
var name = "John";

// 当然利用できる
console.log(name);

function showName() {
    // 関数でもグローバル変数は利用可能
    console.log(name);
}

// 関数呼び出し
showName();
