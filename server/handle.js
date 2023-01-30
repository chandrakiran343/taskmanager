const videoTag = document.getElementById("video");
const myMediaSource = new MediaSource();
const url = URL.createObjectURL(myMediaSource);
videoTag.src = url;

// 1. add source buffers
console.log(666)

const audioSourceBuffer = myMediaSource
    .addSourceBuffer('audio/mp4; codecs="mp4a.40.2"');
const videoSourceBuffer = myMediaSource
    .addSourceBuffer('video/mp4; codecs="avc1.64001e"');

// 2. download and add our audio/video to the SourceBuffers

// for the audio SourceBuffer
fetch("192.168.1.2:8080/audio.wav").then(function (response) {
    // The data has to be a JavaScript ArrayBuffer
    return response.arrayBuffer();
}).then(function (audioData) {
    audioSourceBuffer.appendBuffer(audioData);
});

// the same for the video SourceBuffer
fetch("192.168.1.2:8080/video").then(function (response) {
    // The data has to be a JavaScript ArrayBuffer
    return response.arrayBuffer();
}).then(function (videoData) {
    videoSourceBuffer.appendBuffer(videoData);
});
