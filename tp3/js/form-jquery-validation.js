$( document ).ready(function() {
    console.log( "DOM ready!" );

    $("#validation").on("click",function(event){
      event.preventDefault()
  	var $name = $("#inputName").val();
   	var $prenom = $("#inputPrenom").val();
    var $date = $("#inputDate").val();
    var $addr = $("#inputAddresse").val();
   	var $mail = $("#inputMail").val();
    if ($name.length < 5)
    {
      $('.modal-body').text("Vous devez saisir votre Nom");
      $('#myModal').modal("show");
    } else if ($prenom.length < 5)
    {
      $('.modal-body').text("Vous devez saisir votre Prénom");
      $('#myModal').modal("show");
    }else if ($date.length < 5)
    {
      $('.modal-body').text("Vous devez saisir votre Date de naissance");
      $('#myModal').modal("show");
    }else if ($addr.length < 5)
    {
      $('.modal-body').text("Vous devez saisir votre Adresse");
      $('#myModal').modal("show");
    }else if ($mail.length < 5)
    {
      $('.modal-body').text("Vous devez saisir votre Adresse Mail");
      $('#myModal').modal("show");
    }else{
      $('.modal-title').text("Bienvenue : "+ $name +" "+$prenom ); 
    	$('.modal-body').html("");
      $(".modal-body").html('<img src="https://maps.googleapis.com/maps/api/staticmap?markers=paris&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>');
    	$('.modal-footer').text("Vous habitez à: " +$addr+ " "+" Vous etes né le: "+$date );
      $('#myModal').modal("show");
    	}


    });
});