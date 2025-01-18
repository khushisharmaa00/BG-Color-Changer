const body = document.body;

body.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomColor(); //#fffcd4
  body.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  return color;
}
