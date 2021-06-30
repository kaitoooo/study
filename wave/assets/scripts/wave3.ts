interface Wave3Options {
    // color: any;
}

const defaults: Wave3Options = {
    // color: '#10c2cd',
};
export class Wave3 {
    params!: Wave3Options;
    unit!: number;
    canvasList!: any;
    colorList!: any;
    info!: any;
    seconds!: any;
    t!: any;

    constructor(props: Wave3Options) {
        this.params = { ...defaults, ...props };
        this.canvasList = [];
        this.colorList = [];
        this.info = {
            seconds: 0,
            t: 0,
        };
        this.seconds = 0;
        this.t = 0;
        this.unit = 100;
        this.init();
    }
    init() {
        // var unit = 100;
        // canvasList, // キャンバスの配列
        // info = {}, // 全キャンバス共通の描画情報
        // colorList; // 各キャンバスの色情報

        /**
         * Init function.
         *
         * Initialize variables and begin the animation.
         */
        // this.info.seconds = 0;
        // this.info.t = 0;
        // canvasList = [];
        // colorList = [];
        // canvas1個めの色指定
        this.canvasList.push(document.getElementById('waveCanvas'));
        this.colorList.push(['#0ff', '#ff0', '#f00', '#00f', '#f0f']); //重ねる波線の色設定

        // canvas2個めの色指定
        this.canvasList.push(document.getElementById('waveCanvas2'));
        this.colorList.push(['#43c0e4']);

        // canvas3個めの色指定
        this.canvasList.push(document.getElementById('waveCanvas3'));
        this.colorList.push(['#666', '#888']);

        // 各キャンバスの初期化
        for (var canvasIndex in this.canvasList) {
            var canvas = this.canvasList[canvasIndex];
            canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
            canvas.height = 200; //波の高さ
            canvas.contextCache = canvas.getContext('2d');
        }
        // 共通の更新処理呼び出し
        this.update();
    }
    update() {
        for (var canvasIndex in this.canvasList) {
            var canvas = this.canvasList[canvasIndex];
            // 各キャンバスの描画
            this.draw(canvas, this.colorList[canvasIndex]);
        }
        // 共通の描画情報の更新
        // this.info.seconds = this.info.seconds + 0.014;
        // this.info.t = this.info.seconds * Math.PI;
        this.seconds = this.seconds + 0.014;
        this.t = this.seconds * Math.PI;
        // 自身の再起呼び出し
        setTimeout(this.update, 35);
    }

    /**
     * Draw animation .
     *
     * This  draws one frame of the animation, waits 20ms, and then calls
     * itself again.
     */
    draw(canvas: any, color: any) {
        // 対象のcanvasのコンテキストを取得
        var context = canvas.contextCache;
        // キャンバスの描画をクリア
        context.clearRect(0, 0, canvas.width, canvas.height);

        //波を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
        this.drawWave(canvas, color[0], 0.8, 3, 0);
        this.drawWave(canvas, color[1], 0.5, 4, 0);
        this.drawWave(canvas, color[2], 0.3, 1.6, 0);
        this.drawWave(canvas, color[3], 0.2, 3, 100);
        this.drawWave(canvas, color[4], 0.8, 2, 0);
    }

    /**
     * 波を描画
     * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
     */
    drawWave(canvas: any, color: any, alpha: any, zoom: any, delay: any) {
        var context = canvas.contextCache;
        context.strokeStyle = color; //線の色
        context.lineWidth = 1; //線の幅
        context.globalAlpha = alpha;
        context.beginPath(); //パスの開始
        this.drawSine(canvas, this.info.t / 0.5, zoom, delay);
        context.stroke(); //線
    }

    /**
     *  to draw sine
     *
     * The sine curve is drawn in 10px segments starting at the origin.
     * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
     */
    drawSine(canvas: any, t: any, zoom: any, delay: any) {
        var xAxis = Math.floor(canvas.height / 2);
        var yAxis = 0;
        var context = canvas.contextCache;
        // Set the initial x and y, starting at 0,0 and translating to the origin on
        // the canvas.
        var x = t; //時間を横の位置とする
        var y = Math.sin(x) / zoom;
        context.moveTo(yAxis, this.unit * y + xAxis); //スタート位置にパスを置く

        // Loop to draw segments (横幅の分、波を描画)
        for (let i = yAxis; i <= canvas.width + 10; i += 10) {
            x = t + (-yAxis + i) / this.unit / zoom;
            y = Math.sin(x - delay) / 3;
            context.lineTo(i, this.unit * y + xAxis);
        }
    }
}
