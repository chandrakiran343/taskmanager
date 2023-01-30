var CAMERA_HOST = '192.168.1.2',
    USERNAME = 'Chunky',
    PASSWORD = '2002',
    PORT = 8080;

var http = require('http'),
    Cam = require('onvif').Cam;


new Cam({
    hostname: CAMERA_HOST,
    username: USERNAME,
    password: PASSWORD,
    port: PORT
}, function (err) {
    if (err) {
        console.log('Connection Failed for ' + CAMERA_HOST + ' Port: ' + PORT + ' Username: ' + USERNAME + ' Password: ' + PASSWORD);
        return;
    }
    console.log('CONNECTED');
    this.absoluteMove({
        x: 1
        , y: 1
        , zoom: 1
    });
    this.getStreamUri({ protocol: 'TCP' }, function (err, stream) {
        http.createServer(function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<html><body>' +
                '<video id="video" width="640" height="480" autoplay></video>' +
                '<script>' +
                'var videoTag = document.getElementById("video");' +
                'var myMediaSource = new MediaSource();' +
                'var url = URL.createObjectURL(myMediaSource);' +
                'videoTag.src = url;' +
                // 'var videoSourceBuffer = myMediaSource' +
                // '.addSourceBuffer("video/mp4; codecs=\'avc1.64001e\'");' +
                'fetch("192.168.1.2:8080/video").then(function (response) {' +
                'return response.arrayBuffer();' +
                '}).then(function (videoData) {' +
                'videoSourceBuffer.appendBuffer(videoData);' +
                '});' +
                '</script > '+
                '</body></html>');
        }).listen(3030);
    });
});