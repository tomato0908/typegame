'use strict'

const question = [
    // 芸能人の名前問題
    ['KASUGA',
    'WAKABAYASHI',
    'SUDAMASAKI',
    'SATOUTAKERU',
    'UEDATATUYA'
    ],
    //果物の名前問題
    ['APPLE',
    'BANANA',
    'SUIKA'
    ],
    // 食べ物
    [
    'たこ焼き',
    'オムライス',
    'あったかいなべ',
    'なっとう',
    'お魚'
    ]
];



// htmlから要素の取得
const remaind = document.getElementById("remaind");
const inputText = document.getElementById("inputText");
const start = document.getElementById("start");
const timecount = document.getElementById("timecount");
const goal = document.getElementById("goal");
const questionselect = document.getElementById("questionselect");




// 配列，変数の宣言
let nowquestion = [];
let nowtypein = [];
let textCount = 0;
let questionCount = 0;
let i;
let t=0;
let flag = true;
let AAA;




// 入力しながら判定を行う
inputText.addEventListener('input', hantei);
function hantei() {
    textCount = 0;
    // 打ち込んだ文字を１文字ごとに切る
    i = document.querySelector('input');
    nowtypein = i.value.toString().split('');
    console.log(nowtypein);

    // question配列の問題文を一文字ごとに切る
    nowquestion = question[AAA][questionCount].split('');
    // console.log(nowquestion);

    //⚪︎番目の文字同士を比較する
    for (let i = 0; i<nowtypein.length; i++) {
        if (nowtypein[i] == nowquestion[i]) {
            textCount++;
        }
    }

    // 最初の文字から最後の文字までが全て合っていたら次の問題を表示する
    if (textCount == question[AAA][questionCount].length) {
        console.log("next");
        questionCount++;
        NextQuestionPrint();
    }

};


// スタート前にはテキストボックスが無い状態にする
// スタートが押されるとテキストボックスの表示及び問題の切り替え．

inputText.style.display="none";

start.addEventListener('click', NextQuestionPrint);

function NextQuestionPrint() {
    setTimeout(function(){
        // 初回またはリスタートの動き 
    if (questionCount == 0) {

        restart();   
    }
    remaind.textContent = question[AAA][questionCount];
    console.log(question[AAA][questionCount]);

    if (AAA ==0 && questionCount == 4) {
        
    }
    // 終わりへの遷移
    if (questionCount == question[AAA].length) {
        flag = false;
        i.blur();
        i.focus()
        reset();
    }
    if(questionCount>0) {
        i.value ="";
        i.blur();
        i.focus()
    }
     
    

    },50);
}



//リセット
function reset() {
    inputText.style.display="none";
    start.style.display ="block";
    questionselect.style.display ="block";
    remaind.textContent ="ここに問題文が出ます";
    goal.textContent = "終わりですタイムは"+t+"秒です";
    console.log(t);
    start.textContent = "もう一度遊ぶ";
    i.value ="";
    questionCount = 0;
   
}

// リスタート
function restart () {
    t=0;
    AAA = questionselect.value;
    console.log(AAA);
    console.log("始まり");
    start.style.display ="none";
    questionselect.style.display = "none";
    inputText.style.display="block";
    goal.textContent ="";
    flag = true;
    timer(t);
}

// タイマー
function timer() {
    if (flag == true) {
        t++;
        timecount.textContent = t;
        setTimeout(timer, 1000, t);
        }
    return t;
}



