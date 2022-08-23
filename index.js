var tablinksEl = document.getElementsByClassName("tab-links");

var  tabcontentsEl = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinksEl){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontentsEl){
        tabcontent.classList.remove("active-tab");
    }

     event.currentTarget.classList.add("active-link");
    
    document.getElementById(tabname).classList.add('active-tab');
}


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right ="-200px"
}