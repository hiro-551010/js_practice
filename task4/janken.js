// グー:1,チョキ:2,パー:3
// cpuの手を決める
function cpuhands() {
    hand = Math.floor(Math.random() * 3) + 1;
    return hand
}
// 勝敗の処理
let jedge = function(myhand, enemyhand) {
    if (myhand == enemyhand) {
        alert("あいこ");
    } else if (myhand + 1 == enemyhand) {
        alert("勝ち");
    } else {
        alert("負け");
    }
}

document.getElementById("button1").onclick = function() {
    var myhand = 1;
    // alert(myhand);
    var enemyhand = cpuhands();
    // alert(enemyhand);
    jedge(myhand, enemyhand)
}

document.getElementById("button2").onclick = function() {
    var myhand = 2;
    var enemyhand = cpuhands() + 1;
    alert(jedge(myhand, enemyhand));
}

document.getElementById("button3").onclick = function() {
    var myhand = 3;
    var enemyhand = cpuhands() + 2;
    alert(jedge(myhand, enemyhand));
}
