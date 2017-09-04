var score=0;//set score to 0
var total=5;//Total no. of question
var point=1;//Point per correct answer
var highest= total * point;

//Initializer
function init(){
	//set correct answer
	sessionStorage.setItem('a1','b');
	sessionStorage.setItem('a2','a');
	sessionStorage.setItem('a3','c');
	sessionStorage.setItem('a4','a');
	sessionStorage.setItem('a5','d');
}

$(document).ready(function(){
	//Hide al question
	$('.questionForm').hide();
	
	//Show First Question
	$('#q1').show();
	
	$('.questionForm #submit').click(function(){
		//Get data Attributes
		current = $(this).parents('form:first').data('question');
				next = $(this).parents('form:first').data('question')+1;
	//Hide All Question
	$('.questionForm').hide();
	//Show Next Question
	$('#q' +next+'').fadeIn(300);
	process(''+current+'');
	return false;
	});
	  });
   
   //Process the answer
   function process(n){
	   //Get input value
   var submitted = $('input[name=q'+n+']:checked').val();
		   if(submitted == sessionStorage.getItem('a'+n+'')){
			   score = score + point ;
		   }
	   
	   
	   
	  	   if(n == total){
		   $('#results').html('<h3>Your final score is: '+score+' out of '+highest+'</h3><a href="index.html">Take Quiz Again</a><br/><br/>');
if(score == highest ){
	$('#results').append('<h3 style="fontsize:40; fontWeight:bold;color:red;">     You know Rohit & his behaviour very well !!</h3>');
}	  
else  if(score == highest - point || score == highest - point - point){
	$('#results').append('<h3 style="fontsize:40; fontWeight:bold;color:red;">       Your thinking about the  Rohit is GooD . !!  !!</h3>');
		   }
		   else
		$('#results').append('<h3 style="fontsize:40; fontWeight:bold;color:red;">        Your thinking skills about the  Rohit is Average . !!  !!</h3>');	   
		   }
	return false;   
   }
   
   //Add Event Listener
   window.addEventListener('load',init,false);