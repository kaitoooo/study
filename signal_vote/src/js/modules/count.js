const jQuery = require('jquery');
const $ = jQuery;
window.jQuery = jQuery;

export default class Count {
    constructor(){
        this.clickBtn = document.querySelector('#btn01');

        this.init();
        this.click();
        this.loop();
    }
    init(){
        $(document).ready(function(){
            //初期時のカウンターファイル読み込み
            //同じファイル名だと正常に読み込めないので、ランダムな数字を生成し、パラメータとして付けることで、ユニークな状態にしている。
            var randnum1 = Math.floor( Math.random() * 10000 );
            $("#btn01 span").load("./count01.txt?r=" + randnum1);

            //カウンター追加後の読み込み関数
            function func01(data){
                var randnum1 = Math.floor( Math.random() * 10000 );
                $("#btn01 span").load("./count01.txt?r=" + randnum1);
            }

            //カウンター＋1追加処理
            $('#btn01 p').click(function(e){
                //「param1」変数の値と書き込みファイル名の情報をもってpost.phpへ。その後、関数func01を実行
                $.post("post.php" , {"param1": 'count01.txt'} , func01);
                $("#btn01 span").load("./count01.txt");
            });
        });
    }
    click(){
        let messages = document.querySelectorAll('.random__m');
        let min = 10;
        let topMax = 610;
        let leftMax = 1050;

        let img = document.querySelector('.finish__main--img');
        let text = document.querySelector('.finish__main--text');
        let audience01 = document.querySelector('.finish__main--audience');
        let audience02 = document.querySelector('.finish__main--audience2');
        let audience03 = document.querySelector('.finish__main--audience3');
        let audience04 = document.querySelector('.finish__main--audience4');
        let wa1 = document.querySelector('.finish__main--wa1');
        let wa2 = document.querySelector('.finish__main--wa2');
        let kya = document.querySelector('.finish__main--kya');
        let kya2 = document.querySelector('.finish__main--kya2');

        this.clickBtn.addEventListener('click', () => {
            let topPos = Math.floor( Math.random() * (topMax + 1 - min) ) + min ;
            let leftPos = Math.floor( Math.random() * (leftMax + 1 - min) ) + min ;
            const messageNo = Math.floor( Math.random() * messages.length);
            messages[messageNo].classList.add('is-show');
            messages[messageNo].style.top = topPos+'px';
            messages[messageNo].style.left = leftPos+'px';

            let textMsg = document.querySelector('.count');
            let finish = document.querySelector('.finish');
            console.log(textMsg.textContent);
            if(textMsg.textContent === "1189"){
                finish.classList.add('is-show');
                setTimeout(() => {
                    img.classList.add('is-show');
                }, 1000);
                setTimeout(() => {
                  text.classList.add('is-show');
                }, 2000);
                setTimeout(() => {
                  audience01.classList.add('is-show');
                }, 3000);
                setTimeout(() => {
                  audience02.classList.add('is-show');
                }, 2700);
                setTimeout(() => {
                  audience02.classList.add('is-anim');
                }, 3600);

                setTimeout(() => {
                  audience03.classList.add('is-show');
                }, 3000);
                setTimeout(() => {
                  audience04.classList.add('is-show');
                }, 2700);
                setTimeout(() => {
                  audience03.classList.add('is-anim');
                }, 4000);

                setTimeout(() => {
                  wa1.classList.add('is-show');
                }, 4500);
                setTimeout(() => {
                  wa2.classList.add('is-show');
                }, 4800);
                setTimeout(() => {
                  kya.classList.add('is-show');
                }, 5000);
                setTimeout(() => {
                  kya2.classList.add('is-show');
                }, 5300);
            }
        });
    }
    loop(){
      $(function(){
        setInterval(function(){
            $('.main .btn__top').toggleClass('is-loop');
        },1500);
      });
    }
}
