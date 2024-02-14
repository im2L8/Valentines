function letterclick() {
    if (document.getElementById('body').style.opacity = "0") {
        document.getElementById('shadow').style.opacity = "0";
        document.getElementById('letterimage').style.top = "0";
        document.getElementById('letterimage').style.left = "0";
        document.getElementById('letterimage').style.width = "0";
        document.getElementById('letterimage').style.height = "0";
        document.getElementById('letter').style.bottom = "0";
        document.getElementById('letter').style.left = "0";
        document.getElementById('letter').style.height = "0";
        document.getElementById('letterimage').style.pointerEvents = "none";
        document.getElementById('letter').style.position = "relative";
        document.getElementById('letter').style.width = "100vw";
        document.getElementById('letter').style.height = "1000px";
        document.getElementById('title').style.display = "none";
        document.getElementById('context').style.display = "none";
        document.getElementById('stamp').style.display = "none";
        document.getElementById('lettext').style.display = "flex";
    }
    document.getElementById('body').style.opacity = "0";
    document.getElementById('leftfold').style.opacity = "0";
    document.getElementById('topfold').style.opacity = "0";
    document.getElementById('backfold').style.opacity = "0";
}