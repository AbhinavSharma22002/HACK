$(document).ready(function () {
  if (localStorage.getItem("token") != null) {
    $("#register").css("display", "none");
    preload();
  } else {
    $("#register").css("display", "block");
  }
});

let video;
let classifier;
function preload(){
  classifier = ml5.imageClassifier('http://localhost:3000/modal/model.json');
}

function setup(){
  createCanvas(640,520);
  setInterval(() => {
    video = createCapture(0);
    video.hide();
  
    classifyVideo();
  }, 5000);
}

function classifyVideo(){
  classifier.classify(video,gotResults);
}

function gotResults(error,results){
  console.log(results);
}

