$(document).ready(function(){
	
	$( "#userGuess" ).focus();
	var userChoice;
	var computerChoice;
	var difference;
	var counter=0;
	/*--- Generate random number chosen by computer ---*/
	var num = Math.ceil((Math.random() * 100));
	var computerChoice = num.toFixed(0);
	
	
	console.log(computerChoice);

	/*--- User can start new game without reloading page ---*/
	

    $("form").submit(function(event){

    	event.preventDefault();

    	userChoice = document.getElementById("userGuess").value;
    	difference = (Math.abs(computerChoice - userChoice));
    	$('#userGuess').val('');
    	$("#guessList").append(userChoice + ", ");
    	counter = counter+1;
    	$('#guessCount').show();
    	$('#count').text(counter);
    	
    	if (isNaN(userChoice)) {
    		alert("\"" + userChoice + "\"" + " is not a number. Please enter a number between 1 and 100.");
    	}

    	else if ((userChoice < 1) || (userChoice > 100)) {
    		alert("Enter a number between 1 and 100.");
    	}

    	else if (userChoice === computerChoice) {
    		$("#feedback").text("That's correct!");
            $("#feedback").css("color","white");
            $("#feedback").css("background-color","black");
            
    		
    	}
    	
    	else {

    			if (difference > 0 && difference <= 1) {
    			$("#feedback").text("Very hot! Guess again.");
                $("#feedback").css("background-color","#fe0001");
                $("#feedback").css("color","black");
    			}

	    		else if (difference > 1 && difference <= 3) {
	    		
	    		$("#feedback").text("Hot! Guess again.");
	    		//alert("Hot!");
                $("#feedback").css("background-color","#ff00ff");
	    		$("#feedback").css("color","black");
	    		}

	    		else if (difference > 3 && difference <= 5) {
	    		
	    		$("#feedback").text("Very warm. Guess again.");
	    		//alert("Warm.");
                $("#feedback").css("background-color","#ff6600");
                $("#feedback").css("color","black");
	    		}

	    		else if (difference > 5 && difference <= 9) {
	    		
	    		$("#feedback").text("Warm. Guess again.");
	    		//alert("Kinda warm...");
                $("#feedback").css("background-color","#cfff04");
                $("#feedback").css("color","black");
	    		}

	    		else if (difference > 9 && difference <= 13) {
	    		
	    		$("#feedback").text("Lukewarm. Guess again.");
	    		//alert("Cold.");
                $("#feedback").css("background-color","#6fff00");
                $("#feedback").css("color","black");
	    		}

	    		else if (difference > 13 && difference <= 20) {
	    		
	    		$("#feedback").text("Cold. Guess again.");
	    		//alert("Very cold.");
                $("#feedback").css("background-color","#00ffff");
                $("#feedback").css("color","black");
	    		}

	    		else {
	    		
	    		$("#feedback").text("Very cold. Guess again.");
	    		//alert("Freezing.");
                $("#feedback").css("background-color","#993cf3");
                $("#feedback").css("color","black");
	    		}
    		
    		}
    	
    	
    });
	
	

 

      $(".new").click(function() {
		num = (Math.random() * 100);
		computerChoice = num.toFixed(0);
		console.log(computerChoice);
		counter = 0;
		$("#userChoice").val("");
		$("#guessList").text("");
		$('#guessCount').show();
		$('#count').text(counter);
          $("html").css("background-color","#f3f3f3");
		});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(700);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(700);
  	});

  	


});