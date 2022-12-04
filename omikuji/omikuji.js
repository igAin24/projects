"use strict"

window. addEventListener("DOMContentLoaded",
function() {
    // ヘッダーのテキストエフェクト
$("header").textillate({
        loop: false, // ループのオンオフ
        minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
        initialDelay: 2000, // 遅延時間
        autoStart: true, // アニメーションを自動的にスタート
        in: { // フェードインのエフェクトの詳細設定
        effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
        delayScale: 1.5, // 遅延時間の指数
        delay: 50, // 文字ごとの遅延時間
        sync: false, // trueはアニメーションをすべての文字に同時に適用
        shuffle: true // trueは文字を順番にではなく、ランダムに
        }
    });
    // おみくじボタン(id="btn1") ボヤァと表示させる
    $(function(){
        ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
    
    setTimeout(
        function(){
            let popMessage = "いらっしゃい!おみくじ引いてって!";
            window.alert(popMessage);
        },"5000"
    )
    }, false
);



let soundEndFlag = "0";

const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
btn1. addEventListener("click",
function() {
    if  (soundEndFlag == "1"){
        soundControl("end","");
    }
    let resultText = ["大吉!!!","吉!!","中吉","小吉","美吉","凶。。"];
    let resultSize = ["90px","80px","70px","60px","50px","40px"];
    let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
    let resultSound = ["sound/omikuji_sound1.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound3.mp3"];
    let resultImage = ["img/star.png","img/sakura_hanabira.png","img/sakura_hanabira.png","img/sakura_hanabira.png","img/leaf.png","img/snowflakes.png"];
    let resultMaxSize = ["30","30","20","15","20","20"];
    let resultMaxSpeed = ["10","10","8","5","5","5"];

    let n = Math.floor(Math.random()*resultText.length);
    omikujiText.textContent = resultText[n];
    omikujiText.style.fontSize = resultSize[n];
    omikujiText.style.color = resultColor[n];
    w_sound = resultSound[n];
    soundControl("start",w_sound);
    soundEndFlag="1";
    // snowfall stop
    $(document).snowfall("clear");
    // jQueryのsnowfall
    $(document).ready(function(){
    $(document).snowfall({
        maxSpeed : resultMaxSpeed[n], // 最大速度
        minSpeed : 1, // 最小速度
        maxSize : resultMaxSize[n], // 最大サイズ
        minSize : 1, // 最小サイズ
        image : resultImage[n]
    });
});
    }, false
);

let w_sound
let music
function soundControl(status,w_sound) {
    if(status === "start"){
        music = new Audio (w_sound);
        music.currentTime =0;
        music.play();
    } else if (status === "end"){
        music.pause();
        music.currentTime =0;
    }
}