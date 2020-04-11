// コンストラクタ関数
var Player = function(name, job, hp, mp) {
    this.name = name;
    this.job = job;
    this.hp = hp;
    this.mp = mp;
};
// プロトタイプによるメソッド作成
Player.prototype.getName = function() {
    return "I am " + this.name;
};
// プロトタイプによるメソッド作成
Player.prototype.getJob = function() {
   return "My job is " + this.job;
};

// オブジェクト作成
var p1 = new Player("Minnie","Magician", 20, 30);
// メソッド呼び出し
console.log(p1.getName());
console.log(p1.getJob());

console.log("====");

// オブジェクト作成
var p2 = new Player("Donald","Fighter",30, 30);
// メソッド呼び出し
console.log(p2.getName());
console.log(p2.getJob());
