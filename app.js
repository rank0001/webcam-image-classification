let video;
let label = "";

//p5 essentials
function draw() {
	background(0);
	image(video, 0, 0);
	fill(255);
	textSize(32);
	text(label, 10, height - 20);
}

function setup() {
	createCanvas(640, 550);
	video = createCapture(VIDEO);
	video.hide();
	background(0);
}
//setting up the ml5 model
let mobilenet = () =>
	ml5.imageClassifier("MobileNet", video).then((classifier) =>
		classifier
			.predict(video)
			.then((results) => {
				label = results[0].label;
				mobilenet();
			})
			.catch((err) => {
				console.log(err);
			})
	);
mobilenet();
