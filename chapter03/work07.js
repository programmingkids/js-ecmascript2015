// Monsterクラスの定義
class Monster {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    
    attack() {
        console.log(this.name + "は攻撃した");
    }
    
    showHp() {
        console.log(this.name + "のHPは" + this.hp);
    }
}

// Dragonクラスの定義
class Dragon extends Monster {
    // メソッドのオーバーライド
    attack() {
        console.log(this.name + "は炎で攻撃した");
    }
}

// DarkKnightクラスの定義
class DarkKnight extends Monster {
    // メソッドのオーバーライド
    attack() {
        console.log(this.name + "は闇の魔法で攻撃した");
    }
}

// dragonオブジェクトの作成
const dragon = new Dragon("炎竜", 20);
// オーバーライドしたメソッドの呼び出し
dragon.attack();
dragon.showHp();

console.log("----");

// darkknightオブジェクトの作成
const darkknight = new DarkKnight("ダークナイト", 25);
// オーバーライドしたメソッドの呼び出し
darkknight.attack();
darkknight.showHp();
