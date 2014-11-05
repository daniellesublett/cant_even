function cantEven (low, high) {
    var num = Math.floor(Math.random() * (high - low) + low);
    return (num*2)+1;
}

$("button").on ("click", function() {
  $("#odd-div").append(cantEven(1,100)+ "  ");
  $("#quip-div").append(quipArray[Math.floor(Math.random()*quipArray.length)]+ "<br>");
});

var quipArray = [
  "Seriously, I cannot even a single even",
  "You guys. You guys. I just can't",
  "I tried. I tried and failed.",
  "I just CAN NOT EVEN with this.",
  "I thought I could even. Never have I been so wrong.",
  "Have you ever evened? What was it like? Because I can't even.",
  "Once, I was an aventurer like you. But then I took an arrow to the knee and now I can't even.",
  "Not a single even given.",
  "How does one even even, even?"
  ];


