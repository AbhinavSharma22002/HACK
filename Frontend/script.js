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
