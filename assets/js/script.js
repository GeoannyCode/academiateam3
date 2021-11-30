var btn1 = document.getElementsByClassName('content-btn1')[0];
var btn2 = document.getElementsByClassName('content-btn2')[0];
var content1 = document.getElementsByClassName("content1")[0];
var content2 = document.getElementsByClassName("content2")[0];


function cambiar1(){
    btn2.className ="nav-link content-btn2";
    btn1.className ="nav-link content-btn1 active";
    content1.className ="open";
    content2.className = "close"
}

function cambiar2(){
    btn2.className ="nav-link content-btn2 active";
    btn1.className ="nav-link content-btn1";
    content1.className ="close";
    content2.className = "open"
}


