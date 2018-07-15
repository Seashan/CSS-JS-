var imgLoad = function (url, callback) {
    var img = new Image();
    img.src = url;
    if (img.complete) {
        callback(img.width, img.height);
    } else {
        img.onload = function () {
            callback(img.width, img.height);
            img.onload = null;
        };
    };
};
imgLoad('http://t1.baidu.com/it/u=3208399380,3492442390&fm=21&gp=0.jpg');