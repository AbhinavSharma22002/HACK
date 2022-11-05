$(document).ready(function () {
  if (localStorage.getItem("token") != null) {
    $("#register").css("display", "none");
    const webcamElement = document.getElementById("webcam");
    const webcam = new Webcam(webcamElement, "user");
    webcam
      .start()
      .then((result) => {
        console.log("webcam started");
        let picture = webcam.snap();
        document.querySelector("#download-photo").href = picture;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    $("#register").css("display", "block");
  }
});

//
