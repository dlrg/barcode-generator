var JsBarcode = require('jsbarcode');
var { createCanvas } = require("canvas");
var fs = require('fs');

var barcodeNumber = 1500;
var count = 1;
var canvas;

function addZeroToBarcode(number) {
    if (number.toString().length === 4) {
        return number
    }
    number = '0'+number
    return addZeroToBarcode(number)
}


while (count <= barcodeNumber) {
    var canvas = createCanvas(1, 1, 'svg');
    let number = addZeroToBarcode(count)
    JsBarcode(canvas, number, {
        height: 30,
        displayValue: false
    });
    fs.writeFileSync(__dirname + '/barcodes/' + number + '.svg', canvas.toBuffer());
    console.log(number, 'FINISHED')
    count++
}
