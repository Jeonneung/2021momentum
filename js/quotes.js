const quotes = [
  {
    quote: "Life isn't fair. It's just fairer than death, that's all.",
    author: "William Goldman",
  },
  {
    quote:
      "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
    author: "Marcus Aurelius Antoninus",
  },
  {
    quote:
      "I believe that one of life's greatest risks is never daring to risk.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
  },
  {
    quote:
      "Seeing much, suffering much, and studying much, are the three pillars of learning.",
    author: "Benjamin Disraeli",
  },
  {
    quote: "Travel is only glamorous in retrospect.",
    author: "Paul Theroux",
  },
  {
    quote: "There is more to life than increasing its speed.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Life is either a daring adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote:
      "When you've finished getting yourself ready in the morning, you must go get the planet ready.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote:
      "Nothing is so good for an ignorant man as silence; and if he was sensible of this he would not be ignorant.",
    author: "Saadi",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //array의 길이를 알아야 해서 번거롭다. 그러므로 length를 이용해 길이를 구한다.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

/* Math.random() * 10 //정수가 0에서 10까지인 float(소수점을 가지는 수)의 랜덤 호출. Math.random()은 0부터 1까지의 랜덤한 수를 불러낸다.
Math.random()은 0에서 1까지의 랜덤 float.
Math.round() //소수점을 제거한 수를 돌려준다.(반올림)
Math.ceil() //소수점이 있는 수를 올림한다.
Math.floor() //소수점이 있는 수를 내림한다.
console.log(quotes[0-9]);
quotes.length는 나열의 길이를 센다.*/
