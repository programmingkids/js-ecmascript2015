function showName() {
    // 関数スコープの変数(ローカルスコープ)
    var name = "Bob";
    console.log(name);
}

// 関数を呼び出し
showName();

// 関数スコープの変数は呼び出せない
console.log(name);  // これはエラー
