window.onload = ()=>{
    this.sessionStorage.setItem("username", "AVE_puna");
    this.sessionStorage.setItem("password", "ave_123");
}
var input = document.getElementsByTagName('input');
var login = document.getElementById('log-in');
var form = document.querySelector('form');
form.onsubmit = ()=>{return false}

login.onclick = ()=>{
    if((input[0].value != "") && (input[1].value != "")){
        if((input[0].value == sessionStorage.getItem("username")) && (input[1].value == sessionStorage.getItem("password"))){
            form.onsubmit = ()=>{return 1}
            document.cookie = "username"+input[0].value;
            document.cookie = "password"+input[1].value;
        }else{
            if((input[0].value != "") && (input[1].value != "")){
                if((input[0].value != sessionStorage.getItem("username"))){
                    input[0].nextElementSibling.textContent = "Keni shkruar username gabim";
                    setTimeout(()=>{
                    input[0].nextElementSibling.textContent = "";
                    }, 2000);
                }
                if((input[1].value != sessionStorage.getItem("password"))){
                    input[1].nextElementSibling.textContent = "Keni shkruar password gabim";
                    setTimeout(()=>{
                    input[1].nextElementSibling.textContent = "";
                    }, 2000);
                }
            }
            
        }
    }else{
        if(input[0].value == ""){
            input[0].nextElementSibling.textContent = "Keni harruar te shkruani username";
            setTimeout(()=>{
                input[0].nextElementSibling.textContent = "";
            }, 2000);
        }
        if(input[1].value == ""){
            input[1].nextElementSibling.textContent = "Keni harruar te shkruani password";
            setTimeout(()=>{
                input[1].nextElementSibling.textContent = "";
            }, 2000);
        }
    }
}