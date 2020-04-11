// クラス定義
class Triangle {
    // コンストラクタ
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    
    // メソッド定義
    getArea() {
        var area = (this.base * this.height) / 2;
        return area;
    }
}

// オブジェクト作成
const triangle = new Triangle(12, 3);
// メソッド呼び出し
const area = triangle.getArea();
console.log("三角形の面積：" + area);
