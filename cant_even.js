function cantEven (low, high) {
    num = Math.floor(Math.random() * (high - low) + low);
    return (num*2)+1;
}

$("button").on ("click", function() {
  $("#odd-div").append(cantEven(1,100)+ "  ");
});
