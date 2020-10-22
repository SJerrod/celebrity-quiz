// Business logic

function totalValue (number1, number2, number3, number4) {
  return parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(number4)
}

// function dannyDivito () {
//   if (total === 16 || >=14) {
//     $(".result1").show();
//   } else if (total === 13 || >=11) {
//     $(".result2").show(); 
//   } else if (total === 10 || >= 8) {
//     $(".result3").show();
//   } else if (total === 7 || >= 4) {
//     $(".result4").show();
//   } else {
//     alert("Finish the Quiz!")
//   }
// }

// User Logic
$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

    let occupation = $("input[name='occupation']:checked").val();

    let relax = $("input[name='relax']:checked").val();

    let food = $("input[name='food']:checked").val();

    let genre = $("input[name='genre']:checked").val();

    let total = totalValue (occupation, relax, food, genre);
    
    $(".result1").hide();
    $(".result2").hide();
    $(".result3").hide();
    $(".result4").hide();

    if (total >=14) {
      $(".result1").show();
    } else if (total >=11) {
      $(".result2").show(); 
    } else if (total >= 8) {
      $(".result3").show();
    } else if (total >= 4) {
      $(".result4").show();
    } else {
      alert("Finish the Quiz!")
    }

  });
});