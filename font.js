!(function () {
    var remBase = 20; //rem基数
    function setSize() {
        var width = document.documentElement.clientWidth;
        width = width < 320 ? 320 : width > 768 ? 768 : width;
        var zoom = width / 375;
        document.documentElement.style.fontSize = zoom * remBase + "px";
    };
    setSize();
    window.addEventListener("resize", setSize, false);
    window.addEventListener("load", setSize, false);
})();