// コンストラクタ関数
var Player = function(name, job, hp, mp) {
    this.name = name;
    this.job = job;
    this.hp = hp;
    this.mp = mp;
};

// オブジェクト作成
var p1 = new Player("Minniy","Magician", 20, 30);
// プロパティーの利用
console.log(p1.name);
console.log(p1.job);
console.log(p1.hp);
console.log(p1.mp);
