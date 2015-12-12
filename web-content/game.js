$(document).on('keydown keyup', function(e) {
  
    if (e.type == 'keydown') { 
        
        if (e.keyCode == 37){
       
          $(".block").addClass('walk').css({ marginLeft:'-=50px',transform: "rotate(7deg)" });
          }
        
        else if (e.keyCode == 39){
          
          $(".block").addClass('walk').css({ marginLeft:'+=50px',transform: "rotate(-7deg)" });
          }}
      else if (e.type == 'keyup'){
          
          $(".block").addClass('walk').css({transform: "rotate(0deg)" });
        }
});

function animateMe (targetElement, speed) {
      $(this).delay(3000).animate({
        width: '40px'
    }, 'slow', function () { //callback function, which runs very next to .animate()
        alert('Game Over!');
    });

    targetElement.css({top:'-50px'});
    targetElement.animate(
        {
      'top': $(document).height() + 100
        }, 
        { 
        duration: speed, 
        complete: function(){
          animateMe(this, speed);
          }
        }
    );
};

function callAnimateMe() {
  animateMe($('#circle'), 5000); 
}

$( document ).ready(callAnimateMe); 

