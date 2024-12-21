document.getElementById("time").style.fontSize = "20px"
document.getElementById("time").style.color = "red"




function 计时器() {
  let nowTime = new Date
  document.getElementById("time").textContent = nowTime.getHours() + ":" + nowTime.getMinutes() + ":" + nowTime.getSeconds()
}
setInterval(计时器, 1000);

