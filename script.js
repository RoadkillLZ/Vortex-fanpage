// VARAIABLES
const updBtn = document.getElementById("updBtn");
const cataBtn = document.getElementById("cataBtn");
const vortexComBtn = document.getElementById("vortexCom");

// Event Listeners

updBtn?.addEventListener("click", function(){
  window.location.href = "./updates.html";
});

cataBtn?.addEventListener("click", function(){
  window.location.href = "./cataItems.html"
});

vortexComBtn?.addEventListener("click", function(){
  window.location.href = "./vortexCommunity.html";
});