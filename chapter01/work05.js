// ブロックスコープ変数
let x = 10;

// これはOK
console.log(x);

if( x == 10 ) {
    // ブロックスコープ変数
    let message = "Xは10です";
}

// ブロック外なのでNG
console.log(message); // これはエラー
