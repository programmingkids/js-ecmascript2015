// クラス定義
class Hero {
    constructor(name, hp, level) {
        this.name = name;
        this.hp = hp;
        this.level = level;
    }
    
    fight() {
        console.log(this.name + "は武器で戦った");
    }
    
    escape () {
        console.log(this.name + "は逃げ出した");
    }
    
    status() {
        console.log(this.name + "のHPは" + this.hp);
        console.log(this.name + "のレベルは" + this.level);
    }
}

// オブジェクト作成
const hero = new Hero("ドナルド", 10, 1);
// メソッド呼び出し
hero.status();
hero.fight();
hero.escape();
