// クラス定義
class Book {
    // コンストラクタ
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }    
}

// オブジェクト作成
const book1 = new Book("ミッキーの大冒険", 1200);
console.log("本1のタイトル:" + book1.title);
console.log("本1の金額:" + book1.price);

console.log("====");

// 2個目のオブジェクト作成
const book2 = new Book("ミニーのおすすめレシピ", 1500);
console.log("本2のタイトル:" + book2.title);
console.log("本2の金額:" + book2.price);
