function showName() {
    // ブロックスコープ
    let name = "Ariana";
    console.log(name);
}
// 関数呼び出し
showName();

// ブロックスコープの変数はブロック外では利用不可
console.log(name); // これはエラー
