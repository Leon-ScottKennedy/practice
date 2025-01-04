const 电脑的选项 = ["石头", "剪刀", "布"];

function 电脑的选择() {
  return 电脑的选项[Math.floor(Math.random() * 电脑的选项.length)];
}

function 输赢(用户的结果, 电脑的结果) {
  if (用户的结果 === 电脑的结果) {
    return "平局";
  } else if (
    (用户的结果 === "石头" && 电脑的结果 === "剪刀") ||
    (用户的结果 === "剪刀" && 电脑的结果 === "布") ||
    (用户的结果 === "布" && 电脑的结果 === "石头")
  ) {
    return "你赢了";
  } else {
    return "你输了";
  }
}

function 处理点击事件(用户选择) {
  const 电脑选择结果 = 电脑的选择();
  console.log(电脑选择结果);
  const 结果 = 输赢(用户选择, 电脑选择结果);
  console.log(结果);
}

["石头", "剪刀", "布"].forEach((选项) => {
  document
    .getElementById(选项)
    .addEventListener("click", () => 处理点击事件(选项));
});
