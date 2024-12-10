const 候选人物 = [
  { 姓名: "刘备", 图片: "./随机选人图片/刘备.jpeg" },
  { 姓名: "钟会", 图片: "./随机选人图片/钟会.jpeg" },
  { 姓名: "曹操", 图片: "./随机选人图片/曹操.jpeg" },
  { 姓名: "于禁", 图片: "./随机选人图片/于禁.jpeg" },
  { 姓名: "杜预", 图片: "./随机选人图片/杜预.jpeg" },
  { 姓名: "司马师", 图片: "./随机选人图片/司马师.jpeg" },
  { 姓名: "朱然", 图片: "./随机选人图片/朱然.jpeg" },
  { 姓名: "李傕", 图片: "./随机选人图片/李傕.jpeg" },
  { 姓名: "黄忠", 图片: "./随机选人图片/黄忠.jpeg" },
  { 姓名: "荀彧", 图片: "./随机选人图片/荀彧.jpeg" },
  { 姓名: "诸葛瞻", 图片: "./随机选人图片/诸葛瞻.jpeg" },
  { 姓名: "陈登", 图片: "./随机选人图片/陈登.jpeg" },
  { 姓名: "毛玠", 图片: "./随机选人图片/毛玠.jpeg" },
];

let 定时器;

function 选人() {
  const randomIndex = Math.floor(Math.random() * 候选人物.length);
  const 选到的人 = 候选人物[randomIndex];
  document.getElementById("人物图片").src = 选到的人.图片;
  document.getElementById("人物名字").textContent = 选到的人.姓名;
}

function 开始随机选人() {
  if (!定时器) {
    定时器 = setInterval(选人, 100);
    document.getElementById("开关").textContent = "停止抽人";
  }
}  

function 停止随机选人() {
  clearInterval(定时器);
  定时器 = null;
  document.getElementById("开关").textContent = "开始抽人";
}

document.getElementById("开关").addEventListener("click", function() {
  if (定时器) {
    停止随机选人();
  } else {
    开始随机选人();
  }
});

开始随机选人();
