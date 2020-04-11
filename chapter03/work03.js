// クラス定義
class Product {
    // コンストラクタ
    constructor(name, price, unit) {
        this.name = name;
        this.price = price;
        this.unit = unit;
    }
    
    // メソッド作成
    showInfo() {
        console.log("商品の名前:" + this.name);
        console.log("商品の金額:" + this.price);
        console.log("商品の個数:" + this.unit);
    }

    // メソッド作成
    showTotal() {
        var total = this.price * this.unit;
        console.log("商銀の合計:" + total);
    }
}

// オブジェクト作成
const product1 = new Product("鉛筆", 120, 3);
// メソッド呼び出し
product1.showInfo();
product1.showTotal();
