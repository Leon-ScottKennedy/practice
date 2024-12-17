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

function 开始选人() {
  let 选到的人的索引 = Math.floor(Math.random() * 候选人物.length);
  document.getElementById("人物图片").src = 候选人物[选到的人的索引].图片;
  document.getElementById("人物姓名").textContent = 候选人物[选到的人的索引].姓名;
}
let 计时器;
  

document.getElementById("开关").addEventListener("click", function () {
  if (document.getElementById("开关").textContent === "开始") {
    document.getElementById("开关").textContent = "停止"
    计时器 = setInterval(开始选人, 100);
  } else if (document.getElementById("开关").textContent === "停止") {
    document.getElementById("开关").textContent = "开始";
    clearInterval(计时器);
  }
})

