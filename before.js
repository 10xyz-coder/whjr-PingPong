
var video;
let poses = {"leftWrist": {"x": 100, "y": 100}, "rightWrist": {"x": 100, "y": 100}, "rightHand": {"x": 100, "y": 100}};
let wrist = {"right": {"x": 100, "y": 100}, "left": {"x": 100, "y": 100}};

function modelReady() {
  console.log('model ready');
}

function gotResult(results) {
  if (results.length > 0) {
    poses = results[0].pose;
		wrist = {"left": poses.leftWrist, "right": poses.rightWrist}
  }
}

window.addEventListener('resize', function() {
  //let canvas2X = (window.innerWidth - 680/1.5) / 4;
  //canvas2.position(canvas2X, 200)
  let videoX = (window.innerWidth - 680/1.5) / 4*2;
  video.position(videoX, 700);
});

function preload() {
  console.log('test1');
  missed_audio = loadSound('missed.wav');
  hit_audio = loadSound('ball_touch_paddel.wav');
}

function setup() {
	var canvas2 = createCanvas(1240,336);
  setup2()

	video = createCapture(VIDEO);
  video.size(480/1.5, 320/1.5)
  let videoX = (windowWidth - 680/1.5) / 4*2;
  video.position(videoX, 700);

  console.log(ml5, canvas, canvas2, video)

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", gotResult)
}

function draw() {
	
}

