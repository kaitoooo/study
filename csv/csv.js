let data01 = '01,02,03';
let data02 = '01,02,03';
let data03 = '01,02,03';
let data04 = '01,02,03';
let data05 = '01,02,03';
let data06 = '01,02,03';
let array = [data01, data02, data03, data04, data05, data06];
function downloadCSV() {
    //ダウンロードするCSVファイル名を指定する
    const filename = 'download.csv';
    //CSVデータ
    const data = array;
    //BOMを付与する（Excelでの文字化け対策）
    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    //Blobでデータを作成する
    const blob = new Blob([bom, data], { type: 'text/csv' });

    //IE10/11用(download属性が機能しないためmsSaveBlobを使用）
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, filename);
        //その他ブラウザ
    } else {
        //BlobからオブジェクトURLを作成する
        const url = (window.URL || window.webkitURL).createObjectURL(blob);
        //ダウンロード用にリンクを作成する
        const download = document.createElement('a');
        //リンク先に上記で生成したURLを指定する
        download.href = url;
        //download属性にファイル名を指定する
        download.download = filename;
        //作成したリンクをクリックしてダウンロードを実行する
        download.click();
        //createObjectURLで作成したオブジェクトURLを開放する
        (window.URL || window.webkitURL).revokeObjectURL(url);
    }
}
//ボタンを取得する
const download = document.getElementById('download');
//ボタンがクリックされたら「downloadCSV」を実行する
download.addEventListener('click', downloadCSV, false);
