const 三国群英姓名 = [
  { 姓名: "于禁", 头像: "./img/随机选人图片/于禁.jpeg" },
  { 姓名: "曹操", 头像: "./img/随机选人图片/曹操.jpeg" },
  { 姓名: "陈登", 头像: "./img/随机选人图片/陈登.jpeg" },
  { 姓名: "杜预", 头像: "./img/随机选人图片/杜预.jpeg" },
  { 姓名: "黄忠", 头像: "./img/随机选人图片/黄忠.jpeg" },
  { 姓名: "李傕", 头像: "./img/随机选人图片/李傕.jpeg" },
  { 姓名: "刘备", 头像: "./img/随机选人图片/刘备.jpeg" },
  { 姓名: "毛玠", 头像: "./img/随机选人图片/毛玠.jpeg" },
  { 姓名: "司马师", 头像: "./img/随机选人图片/司马师.jpeg" },
  { 姓名: "荀彧", 头像: "./img/随机选人图片/荀彧.jpeg" },
  { 姓名: "钟会", 头像: "./img/随机选人图片/钟会.jpeg" },
  { 姓名: "诸葛瞻", 头像: "./img/随机选人图片/诸葛瞻.jpeg" },
  { 姓名: "朱然", 头像: "./img/随机选人图片/朱然.jpeg" },
];



function 打乱数组(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}

function 三国群英随机选人() {
  let 所有名字元素 = document.getElementsByClassName("所选人的名字");
  let 所有肖像元素 = document.getElementsByClassName("所选人的肖像");

  let 姓名数组 = 三国群英姓名.map(item => item.姓名);
  let 头像数组 = 三国群英姓名.map(item => item.头像);

  打乱数组(姓名数组);
  打乱数组(头像数组);

  for (let i = 0; i < 所有名字元素.length; i++) {
    所有名字元素[i].textContent = 姓名数组[i];
    所有肖像元素[i].src = 头像数组[i];
  }
}

三国群英随机选人();
// function 三国群英随机选人() {
//   let index = Math.floor(Math.random() * 三国群英姓名.length);
//   let 所有名字元素 = document.getElementsByClassName("所选人的名字");
//   let 所有肖像元素 = document.getElementsByClassName("所选人的肖像");

//   三国群英姓名.forEach((人物, 索引) => {
//     所有名字元素[索引].textContent = 人物.姓名;
//     所有肖像元素[索引].src = 人物.头像;
//   });
// }

// 三国群英随机选人();