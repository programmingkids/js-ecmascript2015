// コンストラクタ関数
var Player = function(name, job, hp, mp) {
    this.name = name;
    this.job = job;
    this.hp = hp;
    this.mp = mp;
};

// オブジェクト作成
var p1 = new Player("Minniy","Magician", 20, 30);
// メソッド作成
p1.getName = function() {
    return "I am " + this.name;
};
// メソッド作成
p1.getJob = function() {
   return "My job is " + this.job;
};
// メソッド利用
console.log(p1.getName());
console.log(p1.getJob());
