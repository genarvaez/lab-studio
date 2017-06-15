window.addEventListener("scroll", function(){
    var services = document.getElementById("services")
    var servicesLink = document.getElementById("services-link");
    var portfolioLink = document.getElementById("portfolio-link");
    var aboutLink = document.getElementById("about-link");
    var teamLink = document.getElementById("team-link");
    var contactLink = document.getElementById("contact-link");
    if (document.documentElement.scrollTop || document.body.scrollTop > 300 && document.body.scrollTop< 1200) {
        servicesLink.style.background = "red";
    }
    else{
         servicesLink.style.background = "black";
    }
    
    if(document.documentElement.scrollTop || document.body.scrollTop > 1200 && document.body.scrollTop< 2400){
        portfolioLink.style.background = "red"
    }
    else{
         portfolioLink.style.background = "black";
    }

    if (document.documentElement.scrollTop || document.body.scrollTop > 2400 && document.body.scrollTop< 3600) {
        aboutLink.style.background = "red";
    }
    else{
         aboutLink.style.background = "black";
    }
    
})
