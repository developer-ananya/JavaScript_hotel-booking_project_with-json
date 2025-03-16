let icon=()=>{
   let icon= document.querySelector("#icon")
   icon.innerHTML="Login";
   icon.style.color="f39c12";
   icon.style.fontSize="15px";
   icon.style.border="1px solid ";
   icon.style.padding="8px";
    icon.style.borderRadius="5px";
 
}
let change=()=>{
    let change=document.querySelector("#icon")
    change.innerHTML="";
    change.style.border="none";
}


//home page login logout
let checklogin=()=>{

    let loginicon=document.querySelector("#icon")
    let logouticon=document.querySelector("#icon2")

    if(localStorage.getItem("name"))
    {
    loginicon.style.display="none"
    }
    else
    {
        logouticon.style.display="none"
        logouticon.innerHTML="Logout"
        loginicon.style.display="block"

        
    }

}
let logout=()=>{
    let logouticonn=document.querySelector("#icon2")
    localStorage.removeItem("name")
    logouticonn.style.display="none"
   loginiconn.style.display="block"
   location.reload()
   alert();
}
let iconnn=()=>{
    let log=document.querySelector("#icon2")
    log.innerHTML="Logout"
    log.style.color="orange";
    log.style.fontSize="15px";
    log.style.border="1px solid ";
    log.style.padding="8px";
    log.style.borderRadius="5px";

}
let changeee=()=>{
       let changeee=document.querySelector("#icon2")
       changeee.innerHTML=""
       changeee.style.border="none";
       changeee.style.color=""
}
