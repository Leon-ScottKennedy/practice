const 选择 = [
  {
      姓名: "剪刀",
      图片: "./img/剪刀.png",
  },
  {
      姓名: "石头",
      图片: "./img/石头.png",
  },
  {
      姓名: "布",
      图片: "./img/布.png",
  },
];

let 定时器;

function 电脑后台选择() {
  let 电脑选择随机数 = Math.floor(Math.random() * 选择.length);
  const 电脑选择结果 = 选择[电脑选择随机数];
  document.getElementById("电脑的选择").src = 电脑选择结果.图片;
}

function 电脑开始后台选择() {
  if (!定时器) {
      定时器 = setInterval(电脑后台选择, 100); 
  }
}

function 电脑停止后台选择() {
  clearInterval(定时器);
  定时器 = null;
}

function 判断输赢(人的选择) {
  const 电脑选择结果 = document.getElementById("电脑的选择").src; 
  let 电脑选择名称;

  if (电脑选择结果.endsWith("./img/剪刀.png")) {
      电脑选择名称 = "剪刀";
  } else if (电脑选择结果.endsWith("./img/石头.png")) {
      电脑选择名称 = "石头";
  } else if (电脑选择结果.endsWith("./img/布.png")) {
      电脑选择名称 = "布";
  }

  console.log(`人的选择: ${人的选择}, 电脑选择: ${电脑选择名称}`); 


  if (人的选择 === 电脑选择名称) {
      return "平局";
  } else if (
      (人的选择 === "剪刀" && 电脑选择名称 === "布") ||
      (人的选择 === "石头" && 电脑选择名称 === "剪刀") ||
      (人的选择 === "布" && 电脑选择名称 === "石头")
  ) {
      return "你赢了";
  } else {
      return "你输了";
  }
}

const 人的选择结果 = document.querySelectorAll(".人的选择结果");
人的选择结果.forEach(function (element) {
  element.addEventListener("click", function () {
      let 人的选择 = element.id;
      电脑停止后台选择(); 
      let 结果 = 判断输赢(人的选择);
      document.getElementById("结果").textContent = 结果;
  });
});

document.querySelector(".重置").addEventListener("click", function () {
  document.getElementById("结果").textContent = "你";
  document.getElementById("电脑的选择").src = "./img/剪刀.png"; 
  电脑停止后台选择();
  电脑开始后台选择(); 
});


电脑开始后台选择();