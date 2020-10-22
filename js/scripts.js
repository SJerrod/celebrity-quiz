$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

    let occupation = $("input[name='occupation']:checked").val();

    let relax = $("input[name='relax']:checked").val();

    let food = $("input[name='food']:checked").val();

    let genre = $("input[name='genre']:checked").val();

    console.log(occupation);
    console.log(relax);
    console.log(food);
    console.log(genre);
  });
});