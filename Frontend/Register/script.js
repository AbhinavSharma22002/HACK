// send form data using ajax calls
$(document).ready(function(){
$("#form").on('submit',async function(e){
  e.preventDefault();
    // get input field

    const name=$("#name").val();
    const address=$("#address").val();
    const camera=$("#on").val();
    const adhaar=$("#txtAadhar").val();
    // making ajax call after this is accepted
let data = {
  name:name,
  location:address,
  permission:camera,
  adharcard:adhaar
};

$.post("http://localhost:3000/register",data).done(function(result){
  localStorage.setItem("token", result.authData);
  window.location.href = "http://127.0.0.1:5500/Frontend/index.html"; 
  }
).fail(function(data, textStatus, xhr){
  alert(data.responseJSON.error);
}
);

});
});

// adhaar card valiadation

function AadharValidate() {
  var aadhar = document.getElementById("txtAadhar").value;
  var adharcardTwelveDigit = /^\d{12}$/;
  var adharSixteenDigit = /^\d{16}$/;
  if (aadhar != '') {
    if (aadhar.match(adharcardTwelveDigit)) {
      return true;
    }
    else if (aadhar.match(adharSixteenDigit)) {
      return true;
    }
    else {
      alert("Enter valid Aadhar Number");
      return false;
    }
  }
}