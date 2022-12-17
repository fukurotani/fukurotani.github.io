//ファイル選択
var selFile = document.getElementById('selectFile');

//canvasについて
const hideCanvas = document.getElementById("hideCanvas");
const showCanvas = document.getElementById("showCanvas");
const hideCtx = hideCanvas.getContext("2d");
const showCtx = showCanvas.getContext("2d");

//変数宣言
var picWidth = 0;
var picHeight = 0;

var imageData;
var data;

var r = [68, 153, 31, 200, 188, 207, 105, 216, 22, 159, 55, 210, 245, 205, 219, 241, 70, 204, 214, 167, 249, 67, 238, 91, 46, 253, 147, 218, 144, 150, 108, 211, 75, 132, 120, 93, 101, 251, 252, 189, 63, 237, 124, 117, 40, 138, 187, 52, 148, 146, 71, 161, 6, 26, 192, 87, 41, 129, 246, 248, 232, 80, 174, 208, 170, 227, 212, 176, 51, 183, 175, 172, 1, 229, 10, 121, 171, 145, 77, 195, 230, 54, 76, 221, 151, 202, 228, 109, 247, 165, 164, 126, 149, 103, 11, 193, 53, 234, 107, 62, 222, 255, 100, 27, 203, 35, 83, 239, 143, 33, 156, 224, 157, 122, 254, 45, 116, 194, 72, 130, 94, 231, 134, 44, 92, 209, 59, 118, 36, 106, 223, 119, 39, 184, 64, 125, 89, 142, 112, 15, 56, 140, 66, 74, 81, 182, 177, 158, 96, 20, 191, 213, 111, 131, 137, 127, 163, 186, 42, 190, 84, 3, 69, 61, 162, 0, 19, 90, 13, 139, 110, 152, 180, 136, 128, 244, 5, 114, 17, 199, 73, 60, 99, 168, 85, 43, 243, 2, 24, 235, 196, 28, 7, 82, 50, 86, 181, 58, 178, 38, 79, 173, 242, 29, 154, 18, 37, 169, 49, 160, 141, 104, 185, 225, 78, 97, 23, 65, 233, 240, 47, 115, 198, 133, 113, 217, 123, 166, 206, 8, 9, 57, 25, 14, 226, 220, 201, 98, 34, 179, 215, 88, 30, 102, 48, 16, 95, 32, 250, 135, 21, 155, 4, 236, 12, 197];
var g = [195, 242, 137, 221, 250, 240, 12, 248, 27, 25, 32, 203, 243, 10, 119, 62, 200, 231, 179, 80, 175, 219, 29, 189, 117, 88, 9, 1, 73, 212, 174, 207, 255, 63, 72, 129, 13, 142, 148, 216, 160, 169, 79, 2, 146, 47, 30, 108, 158, 54, 103, 199, 122, 131, 45, 155, 202, 76, 217, 20, 60, 43, 194, 170, 111, 40, 61, 224, 90, 124, 100, 214, 244, 114, 238, 50, 229, 191, 3, 83, 96, 177, 165, 128, 107, 14, 211, 220, 159, 15, 48, 247, 183, 18, 180, 16, 87, 140, 121, 145, 154, 7, 172, 232, 153, 226, 66, 241, 19, 91, 254, 178, 106, 182, 208, 201, 58, 74, 171, 239, 127, 41, 82, 51, 173, 134, 95, 138, 213, 135, 52, 8, 235, 35, 167, 225, 68, 186, 192, 37, 125, 162, 168, 147, 181, 245, 110, 28, 253, 98, 94, 26, 5, 57, 102, 196, 166, 64, 24, 237, 130, 21, 164, 176, 204, 81, 136, 197, 252, 105, 39, 118, 97, 139, 77, 22, 33, 17, 101, 156, 112, 185, 230, 53, 92, 46, 109, 93, 190, 4, 113, 236, 234, 56, 210, 104, 115, 38, 215, 42, 11, 86, 222, 89, 126, 71, 116, 233, 99, 65, 75, 69, 161, 55, 151, 0, 141, 123, 198, 218, 144, 67, 49, 187, 157, 44, 120, 85, 31, 132, 223, 143, 188, 209, 251, 70, 206, 59, 228, 36, 133, 246, 249, 184, 149, 34, 23, 163, 227, 150, 193, 205, 152, 6, 78, 84];
var b = [87, 187, 101, 68, 79, 125, 23, 54, 83, 129, 198, 185, 182, 6, 146, 94, 197, 40, 28, 69, 145, 194, 240, 192, 140, 143, 179, 22, 235, 150, 96, 175, 248, 251, 213, 205, 139, 241, 236, 167, 242, 134, 1, 245, 4, 116, 74, 151, 195, 111, 166, 222, 122, 144, 73, 157, 103, 108, 115, 162, 86, 57, 234, 226, 121, 80, 160, 164, 9, 120, 85, 174, 216, 178, 118, 250, 193, 244, 11, 44, 3, 36, 91, 106, 155, 208, 170, 109, 15, 119, 61, 128, 142, 147, 239, 81, 89, 181, 0, 64, 249, 238, 16, 152, 88, 180, 42, 48, 212, 184, 156, 183, 210, 32, 201, 138, 158, 114, 24, 99, 171, 161, 132, 221, 29, 47, 190, 214, 31, 199, 254, 112, 56, 66, 2, 165, 7, 228, 229, 10, 65, 127, 104, 133, 191, 123, 246, 211, 186, 102, 203, 100, 43, 13, 39, 149, 247, 223, 126, 169, 49, 159, 135, 5, 72, 253, 207, 252, 38, 63, 59, 172, 224, 188, 141, 46, 113, 77, 130, 97, 71, 204, 75, 60, 177, 25, 30, 136, 153, 154, 107, 52, 105, 98, 176, 90, 19, 202, 124, 137, 168, 227, 148, 55, 215, 217, 110, 243, 8, 95, 27, 14, 67, 230, 218, 50, 70, 76, 225, 117, 58, 12, 82, 237, 92, 35, 189, 93, 209, 37, 220, 131, 51, 84, 173, 34, 78, 18, 231, 233, 33, 206, 219, 20, 232, 200, 17, 196, 21, 26, 41, 45, 163, 53, 62, 255];

//Canvas描画
function draw() {
    showCtx.clearRect(0, 0, showCanvas.width, showCanvas.height);
    showCtx.drawImage(hideCanvas, 0, 0, showCanvas.width, showCanvas.height);
}

//変換 Next
function picNext() {

    for (var i = 0, len = data.length; i < len; i += 4) {
        data[i] = r[data[i]];
        data[i + 1] = g[data[i + 1]];;
        data[i + 2] = b[data[i + 2]];;
        data[i + 3] = 255;
    }

    imageData.data = data;

    hideCtx.clearRect(0, 0, hideCanvas.width, hideCanvas.height);
    hideCtx.putImageData(imageData, 0, 0);
    draw();

}

//変換 Back
function picBack() {

    for (var i = 0, len = data.length; i < len; i += 4) {
        data[i] = r.indexOf(data[i]);
        data[i + 1] = g.indexOf(data[i + 1]);
        data[i + 2] = b.indexOf(data[i + 2]);
        data[i + 3] = 255;
    }

    imageData.data = data;

    hideCtx.clearRect(0, 0, hideCanvas.width, hideCanvas.height);
    hideCtx.putImageData(imageData, 0, 0);
    draw();

}

//ファイル選択
selFile.addEventListener("change", function (evt) {
    var file = evt.target.files;
    var reader = new FileReader();

    //dataURL形式でファイルを読み込む
    reader.readAsDataURL(file[0]);

    reader.onload = function () {

        var dataUrl = reader.result;
        var img = new Image();
        img.src = dataUrl;

        img.onload = function () {

            hideCanvas.width = img.width;
            hideCanvas.height = img.height;

            hideCtx.clearRect(0, 0, hideCanvas.width, hideCanvas.height);

            hideCtx.drawImage(img, 0, 0);
            draw();

            imageData = hideCtx.getImageData(0, 0, hideCanvas.width, hideCanvas.height);
            data = imageData.data;

        }
    }
});

//保存
function saveCanvas() {
    document.getElementById("download").href = hideCanvas.toDataURL("image/png", 1.0);
}