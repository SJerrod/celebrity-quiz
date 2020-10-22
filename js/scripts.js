// Business logic

function totalValue (number1, number2, number3, number4) {
  return parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(number4)
}


// User Logic
$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

    let occupation = $("input[name='occupation']:checked").val();

    let relax = $("input[name='relax']:checked").val();

    let food = $("input[name='food']:checked").val();

    let genre = $("input[name='genre']:checked").val();

    let total = totalValue (occupation, relax, food, genre);
    console.log(total);
  });
});