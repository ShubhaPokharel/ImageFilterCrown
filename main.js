noseY = 0;
noseX = 0;

function preload() {
    flower = loadImage('https://i.postimg.cc/4xqZd9Xk/crowwnn.png');

}

function setup() {
canvas = createCanvas(700, 500);
canvas.center();
video = createCapture(VIDEO);
video.size(700,500);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-108;
        noseY = results[0].pose.nose.y-190;
        console.log("nose x = " + results[0].pose.nose.x );
        console.log("yose x = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    image(video, 0, 0, 700, 500);
/* fill(255,0,0)
    stroke(255,0,0);
    circle(noseX, noseY, 20);*/
    image(flower,noseX,noseY, 205, 105)
}

function take_snapshot() {
    save('hehehmyIMGGMUAHAH.png')
}
function filter_tint() {
    tint_color = document.getElementById("colour_name").value;
}

function removefiltertint() {
    tint_color = "white";
}