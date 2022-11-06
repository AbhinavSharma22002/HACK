$(document).ready(function () {
  if (localStorage.getItem("token") != null) {
    $("#register").css("display", "none");
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
  
if (localStorage.getItem("token") != null) {
  preload();
  setInterval(() => {
    video = createCapture(0);
    video.hide();
    classifyVideo();
  }, 1000);
  
}  
}

function classifyVideo(){
  classifier.classify(video,gotResults);
}

function gotResults(error,results){
  if(results!==undefined && results.length===2){
    if(results[1].confidence>results[0].confidence){
      $.ajax({
        url: "http://localhost:3000/result",
        type: 'GET',
        headers: { authtoken: localStorage.getItem('token') },
        success: function (data) {
          alert("Help incoming");
        },
        error: function (err) {
            console.log(err);
        }
    });
    }
  }
  else
  console.log("BT ho gyi");
}

