$(document).ready(function()
{
  if(localStorage.getItem("token")!= null)
{
  $("#register").css("display","none")
}
else
{
  
  $("#register").css("display","block")
}
});


navigator.mediaDevices.getUserMedia({
  video:true
}).then((stream)=>{
 console.log(stream);
      // Some more code
}).catch(err=>{
    alert(err.message)
})