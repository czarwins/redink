// slideshow js
var x = 0;
var slide = [];
//one thousanths of a second 3.5s
var seconds = 3500;

// images - 
// BODY ELECTRIC TATOO
slide[0] = "../images/storefront.png";
// SPEAKEASY CUSTOM TATTOO
slide[1] = "../images/waitingarea.jpg";
// SPEAKEASY CUSTOM TATTOO
slide[2] = "../images/shopseating.jpg";
// SPEAKEASY CUSTOM TATTOO
slide[3] = "../images/backofshop.jpg";
// RED TREE TATTOO
slide[4] = "../images/artistarea.jpg";
// UNSPLASH
slide[5] = "../images/upcloseartist.jpeg";


// change slide function

var moveSlide = () => {
    document.homeSlide.src = slide[x];

    if(x < slide.length - 1){
        x++;
    }
    else{
        x = 0;
    }
// controls timing for the slideshow
    setTimeout("moveSlide()", seconds);
}; 

// make function run when the page loads
window.onload = moveSlide;



// FUNCTION TO VALIDATE DATA IN MODAL FORM
var checkQuoteForm = () => {
    var input = document.forms["modalForm"]["name"].value;
    var input2 = document.forms["modalForm"]["email"].value;
    var input3 = document.forms["modalForm"]["description"].value;
    
    if(input == " "){
        
        alert("You must fill out your name");
        return false;
    }
     else if (input2 == "") {
        alert("You must fill out your email");
        return false;
    }
        else if (input3 == ""){
        alert("You must write a detailed description");
        return false;
    }
    else{
        window.alert("Your quote has been successfully submitted! Look for a response in 48 hours.");
        event.preventDefault();
        
    }
}

