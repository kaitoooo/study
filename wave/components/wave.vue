<template>
    <!-- <div class="container">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="400" viewBox="0 0 600 400">
            <path :d="pathStr" stroke="#008877" stroke-width="2" fill="red" />
        </svg>
    </div> -->
    <div>
        <!-- <div class="wave-box">
            <img src="~/assets/img/pc/wave-bg.jpg" alt="" />
            <div class="wave"></div>
        </div> -->
        <div id="canvas-container">
            <canvas id="sineCanvas" width="800" height="300"></canvas>
            <canvas id="waveCanvas"></canvas>
            <canvas id="waveCanvas2"></canvas>
            <canvas id="waveCanvas3"></canvas>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wave-box {
    position: relative;
    overflow: hidden;
}
.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 2800px;
    height: 40px;
    overflow: hidden;
    background: url(assets/img/pc/wave.svg) repeat-x bottom left;
    animation: wave 6s linear infinite;
}
@keyframes wave {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-1200px);
    }
}
</style>

<script lang="ts">
import Vue from 'vue';
// import { Wave } from '~/assets/scripts/wave';
import { Wave2 } from '~/assets/scripts/wave2';
// import { Wave3 } from '~/assets/scripts/wave3';

export default Vue.extend({
    mounted() {
        // const taeget02 = new Wave2({
        //     color: '#1ui8cd',
        //     alpha: 0.1,
        //     zoom: 2,
        //     delay: 0,
        // });
        this.init();
    },
    methods: {
        init() {
            var unit = 100,
                canvas: any,
                context: any,
                height: any,
                width: any,
                xAxis: any,
                yAxis: any;
            /**
             * Init function.
             *
             * Initialize variables and begin the animation.
             */
            canvas = document.getElementById('sineCanvas');
            canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
            canvas.height = 300;
            context = canvas.getContext('2d');
            height = canvas.height;
            width = canvas.width;
            xAxis = Math.floor(height / 2);
            yAxis = 0;
            draw();

            /**
             * Draw animation function.
             *
             * This function draws one frame of the animation, waits 20ms, and then calls
             * itself again.
             */
            function draw() {
                // キャンバスの描画をクリア
                context.clearRect(0, 0, width, height);

                //波を描画
                drawWave('#10c2cd', 0.3, 4, 0);
                // drawWave('#43c0e4', 0.4, 4, 250);

                // Update the time and draw again
                draw.seconds = draw.seconds + 0.014;
                draw.t = draw.seconds * Math.PI;
                setTimeout(draw, 65);
            }
            draw.seconds = 0;
            draw.t = 0;

            /**
             * 波を描画
             * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
             */
            function drawWave(color: any, alpha: any, zoom: any, delay: any) {
                context.fillStyle = color;
                context.globalAlpha = alpha;

                context.beginPath(); //パスの開始
                drawSine(draw.t / 0.5, zoom, delay);
                context.lineTo(width + 10, height); //パスをCanvasの右下へ
                context.lineTo(0, height); //パスをCanvasの左下へ
                context.closePath(); //パスを閉じる
                context.fill(); //塗りつぶす
            }

            /**
             * Function to draw sine
             *
             * The sine curve is drawn in 10px segments starting at the origin.
             * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
             */
            function drawSine(t: any, zoom: any, delay: any) {
                // Set the initial x and y, starting at 0,0 and translating to the origin on
                // the canvas.
                var x = t; //時間を横の位置とする
                var y = Math.sin(x) / zoom;
                context.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く

                // Loop to draw segments (横幅の分、波を描画)
                for (let i = yAxis; i <= width + 10; i += 10) {
                    x = t + (-yAxis + i) / unit / zoom;
                    y = Math.sin(x - delay) / 3;
                    context.lineTo(i, unit * y + xAxis);
                }
            }
        },
    },
});
</script>
