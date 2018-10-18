let mobilenet;
let dog;

function modelReady() {
  console.log('Model is ready!!!');
  mobilenet.predict(dog, gotResults);
}

function imageReady() {
  image(dog, 0, 0, width, height);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  }
}

function setup() {
  createCanvas(400, 300);

  // Load model from Google server
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);

  dog = createImg('images/dog1.jpg', imageReady);
  dog.hide();

  background(0);

}

// function draw() {
//   background(220, 120, 0);
//   rect(50,50,100,100);
//   dog.hide;
//
// }
