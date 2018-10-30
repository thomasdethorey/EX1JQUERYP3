$(function(){
  $("#clickMe").click(function(){
    //la méthode .val récupére ou remplace la value d'un élément de formulaire
    //Nous récupérons donc la valeur de l'input portant l'ID #clickNumber dans l'objet result.
    var result = $('#clickNumber').val();
    //On incrémente d'une unité l'objet result à chaque clic
    result++;
    //On récupère la valeur de result que l'on affiche dans l'input.
    $('#clickNumber').val(result);
  });
});
