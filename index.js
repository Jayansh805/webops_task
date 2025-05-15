
const pages = ["mainid", "main_resumeid", "projects_pageid"];

function change(page){
    for(let i=0;i<pages.length;i++){

        if(pages[i]!=page){
            document.getElementById(`${pages[i]}`).style.display="none";
            //console.log(`hided ${i+1}`)
        }
        else{
            if(pages[i]=='projects_pageid'){
                document.getElementById(`${pages[i]}`).style.display="block";
            }
            else{
                document.getElementById(`${pages[i]}`).style.display="flex";
            }
        }
    }
}


function cross_click() {
    document.getElementById(`cross_in_nav`).classList.toggle("change");
    document.getElementById(`cross_in_overlay`).classList.toggle("change");
}

function openNav() {
    document.getElementById("myOverlay").style.height = "100%";
  }
  
function closeNav() {
    document.getElementById("myOverlay").style.height = "0%";
  }

function instagram(){
    window.open('https://www.instagram.com/jayanshkhandelwal/');
}

function linkedin(){
    window.open('https://www.linkedin.com/in/jayansh-khandelwal-5b94b4326/');
}

function blockbase(){
    window.open('https://github.com/Jayansh805/BlockBaseProject');
}

function quant(){
    window.open('https://github.com/Jayansh805/DIY_q');
}

function analytics(){
    window.open('https://github.com/Jayansh805');
}


const options = ["opt1","opt2","opt3","opt4"];

function change_color(x){
    for(let i=0; i<options.length; i++){
        document.getElementById(`${options[i]}`).style.color = "black";
    }
    document.getElementById(`${x}`).style.color="blue";
}


document.addEventListener('DOMContentLoaded', () => {
    let mysBtn = document.getElementById('scrollbtn');

    if (mysBtn) { //Check if the element exists!
        window.addEventListener('scroll', function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                mysBtn.style.display = 'block';
            } else {
                mysBtn.style.display = 'none';
            }
        });
    } else {
        console.error("Element with ID 'scrollbtn' not found.");
    }
});


function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('emailid').value;

    if(name==""){
        document.getElementById('span1').innerHTML="**Please enter your good name";
        return false;
    }else{
        document.getElementById('span1').innerHTML="";
    }

    if(email==""){
        document.getElementById('span3').innerHTML="**Please enter your email id";
        return false;
    }
    else{
        if(email.indexOf('@')==-1 || email.indexOf('.')==-1){
            document.getElementById('span3').innerHTML="**Please enter your correct email id";
            return false;
        }
        else{
            if(email.indexOf('@') > email.indexOf('.')){
                document.getElementById('span3').innerHTML="**Please enter your correct email id";
                return false;
            }
            else{
                if(email.indexOf('@')==0 || email.indexOf('.')==email.length-1){
                    document.getElementById('span3').innerHTML="**Please enter your correct email id";
                    return false;
                }
                else{
                    document.getElementById('span3').innerHTML="";
                }
            }
        }
    }


}