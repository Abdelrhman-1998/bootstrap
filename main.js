let x =document.getElementsByTagName("nav")[0];
let y=document.getElementById("Form1");
function getdark(){
    if(window.pageYOffset>="10"){

        x.style.backgroundColor="black";  

    }
    else{
        x.style.backgroundColor="transparent";  
    }
}
//hide search bar 
function hide_searchbar(){
    if(y.style.visibility=="visible"){
        y.style.transitionDelay="0s";
        y.style.visibility="hidden";
    }
    else if(y.style.visibility=="hidden"){
        y.style.transitionDelay="0.5s";
        y.style.visibility="visible";
    }
}

// handle accordion 

function myFunction(z) {
    if (z.matches){ // If media query matches
        let accordions=document.getElementsByClassName("accordion-collapse");
        for(key in accordions){
                if(isNaN(+key)==false){
                        document.getElementsByClassName("accordion-collapse")[+key].setAttribute("id","");
                        document.getElementsByClassName("accordion-collapse")[+key].setAttribute("class"," accordion-collapse show")
                }

        }}
    else{
        let accordions=document.getElementsByClassName("accordion-collapse");
        for(key in accordions){
            if(isNaN(+key)==false){

                    document.getElementsByClassName("accordion-collapse")[+key].setAttribute("class"," accordion-collapse collapse");
                    document.getElementsByClassName("accordion-collapse")[+key].setAttribute("id","collapse"+key);
            }

    }}
    
  }
  
  var z = window.matchMedia("(min-width: 992px)")
  myFunction(z) // Call listener function at run time
  z.addListener(myFunction) // Attach listener function on state changes

  function handle_button(){
      let x =document.getElementsByClassName("accordion-button");
      for(key in x){
          if(isNaN(+key)==false){
              let y=document.getElementsByClassName("accordion-button")[+key];
              y.style=" outline:5px solid black !important;"
          }
      }
  }