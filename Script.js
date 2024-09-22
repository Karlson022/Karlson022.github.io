//Funkcjonalność buttonów
function linkedinPage(){
    var address = "https://www.linkedin.com/in/karol-olbry%C5%9B/";
    window.location.href = address;
}

function githubPage(){
    var address = "https://github.com/Karlson022";
    window.location.href = address;
}

function myCv(){
    var cvUrl = "./Karol_Olbrys_CV_en.pdf";
    window.open(cvUrl, "_blank");
}

//Funkcjonalność formularza

function noSpaceLeft(){
    let x = document.forms["contactForm"]["email"].value;
    if(x == ""){
        alert("Pole email nie moze być puste");
        return false;
    }
}

