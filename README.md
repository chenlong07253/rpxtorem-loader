# rpxtorem-loader
rpx to rem

配合js改动html的font-size大小自适应
``` go

!(function () {
    var remBase = 20; //rem基数
    function setSize() {
        var width = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);
        width = width < 320 ? 320 : width > 768 ? 768 : width;
        var zoom = (width / 375).toFixed(1);
        document.documentElement.style.fontSize = zoom * remBase + "px";
    };
    setSize();
    window.addEventListener("resize", setSize, false);
    window.addEventListener("load", setSize, false);
})();

```