function test() {
    const arr = [];
    let csvData = '';

    for (let n = 1; n < 4; n++) {
        csvData = document.querySelector('.manage__flex li:nth-child(' + n + ')').textContent;
        // arr = csvData;
        arr.push(n + csvData);
        console.log(arr);

        // arr.forEach(function (obj) {
        //     test = obj;
        //     console.log(obj);
        // });
        // array = [csvData[n]];
    }

    // console.log(array);

    //ダウンロードするCSVファイル名を指定する
    const filename = 'result.csv';
    //CSVデータ
    const data = arr;
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

const download = document.getElementById('download');
//ボタンがクリックされたら「downloadCSV」を実行する
download.addEventListener('click', test, false);
