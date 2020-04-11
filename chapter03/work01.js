// クラス定義
class Book {
    // コンストラクタ
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }    
}

// オブジェクト作成
let book1 = new Book("ミッキーの冒険",1200);
// プロパティ利用
console.log(book1.title);
console.log(book1.price);
