const images = ["00.jpg", "01.jpg", "02.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //js에서 element를 만들어 html에 추가하는 방법.

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //appndchild는 body에 html을 추가한다.(append는 맨 뒤, prepend는 가장 위에 오게 한다.)
