//form validation  signup page

let signup=()=>
    {
        let inpname=document.querySelector("#name").value;
        let inpnum=document.querySelector("#num").value;
        let inpemail=document.querySelector("#email").value;
        let inppass=document.querySelector("#pass").value;
        let inpcpass=document.querySelector("#cpass").value;
    
        let errname=document.querySelector("#errname");
        let errnum=document.querySelector("#errnum");
        let erremail=document.querySelector("#erremail");
        let errpass=document.querySelector("#errpass");
        let errcpass=document.querySelector("#errcpass");
    
    
        if(inpname==""){
    
            errname.innerHTML="Please fill the name Field";
            // errname.style.color="white"
            return false;
        }
    
        else if(inpnum==""){
    
            errname.innerHTML="";
            errnum.innerHTML="Please fill the number Field";
            // errnum.style.color="white"
            return false;
        }
    
    
    else if(isNaN(inpnum)){   
        errnum.innerHTML="Please enter Number only"
        return false;
    }
    
        else if(inpnum.length!==10){           
            errnum.innerHTML="Number must be 10 digit";
            return false;
        }
    
        else if(inpemail==""){
    
            errnum.innerHTML="";
            erremail.innerHTML="Please fill the email Field";
            // erremail.style.color="white"
            return false;
        }
     
    else if( !(inpemail.includes('@') && inpemail.includes('.com'))){      
    erremail.innerHTML="Please enter valid email"
    return false;
    }
    
    
        else if(inppass==""){
    
            erremail.innerHTML="";
            errpass.innerHTML="Please fill the password Field";
            // errpass.style.color="white"
            return false;
        }

        // else if(!(inppass.length<5 && inppass[/0-9/] && inppass[/A-Z/] && inppass[/a-z/] && inppass[/@/]))
    else if(inppass.length<5)

        {
            errpass.innerHTML="Please enter strong password must be five character"
        return false;
        }
    
       else if(inpcpass==""){
    
        errpass.innerHTML="";
            errcpass.innerHTML="Please fill the cnfrm password Field";
            // errcpass.style.color="white"
            return false;
        }
    
       else if(inppass!==inpcpass){      
        document.querySelector("#cpass").value=""
        document.querySelector("#cpass").focus()
            errcpass.innerHTML="please give same as password"
            return false;
        }
    
        //local storage
        localStorage.setItem("name",inpname);
        localStorage.setItem("num",inpnum);
        localStorage.setItem("email",inpemail);
        localStorage.setItem("pass",inppass);
    
        location.href="login.html";
        return false;
    
    }


//login page
let login=()=>
{
    let loginname=document.querySelector("#loginname").value;
    let loginpass=document.querySelector("#loginpass").value;
    let errormsg = document.querySelector("#errormsg"); 

    let localname=localStorage.getItem("name");
    let localpass=localStorage.getItem("pass");

    if(loginname==localname && loginpass==localpass)
    {
        location.href="index.html";
        return false;
    }
    else
    {
        // alert("you are not registered! please register first");
        errormsg.textContent = "Oops! You entered the wrong username or password.";
        errormsg.style.display = "block";
        return false;
    }
}




//for booking
let booknow=()=>{

    if(localStorage.getItem("name")){
        location.href="bookingform.html"
    }
    else{
        alert("please login first")
    }
}
    