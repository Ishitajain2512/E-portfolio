var x = document.getElementsByClassName("sml");
var y = document.getElementsByClassName("smc");
function opentab(event, tn){
    for(sm of x){
        sm.classList.remove("act");
    }
    for(s of y){
        s.classList.remove("acti");
    }
    event.currentTarget.classList.add("act");
    document.getElementById(tn).classList.add("acti");
}