// Youtube iframe API
// 用 JS 嵌入

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'Mp_XNVxe4VM',
        events: {
            'onReady': onPlayerReady
        }
    })
}
function onPlayerReady(e) {
    e.target.mute().playVideo();
}


