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

const 候选人物2 = [
  { 姓名: "郭嘉", 图片: "./随机选人图片2/郭嘉.jpeg", 语音: "./语音/郭嘉.mp3" },
  { 姓名: "关羽", 图片: "./随机选人图片2/关羽.jpeg", 语音: "./语音/关羽.mp3" },
  { 姓名: "徐盛", 图片: "./随机选人图片2/徐盛.jpeg", 语音: "./语音/徐盛.mp3" },
];

let 当前候选人物 = 候选人物; // 默认使用第一个候选人物组
let 定时器;
let 当前选中人物;

function 选组() {
  document.getElementById("换人").addEventListener("click", function () {
    当前候选人物 = 当前候选人物 === 候选人物 ? 候选人物2 : 候选人物;
    选人1();
  });
}

function 选人1() {
  const randomIndex = Math.floor(Math.random() * 当前候选人物.length);
  当前选中人物 = 当前候选人物[randomIndex];
  document.getElementById("人物图片").src = 当前选中人物.图片;
  document.getElementById("人物名字").textContent = 当前选中人物.姓名;
}

function 播放语音() {
  const audio = new Audio(当前选中人物.语音);
  audio.play();
}

function 开始随机选人() {
  if (!定时器) {
    定时器 = setInterval(选人1, 100);
    document.getElementById("开关").textContent = "停止抽人";
  }
}

function 停止随机选人() {
  clearInterval(定时器);
  定时器 = null;
  document.getElementById("开关").textContent = "开始抽人";
  // 播放选中人物的语音
  播放语音();
}

document.getElementById("开关").addEventListener("click", function () {
  if (定时器) {
    停止随机选人();
  } else {
    开始随机选人();
  }
});

选组();
开始随机选人();