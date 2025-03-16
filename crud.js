
let fetchData=async()=>{

    let url='http://localhost:3000/hotel'

    let res= await fetch(url,{method:"GET"})

    let data= await res.json()
    console.log(data);


    paginationn(data)

}

let searchh=async()=>{

    let searchinp=document.querySelector("#searchinp").value.toLowerCase()

    let url='http://localhost:3000/hotel'
    let res= await fetch(url,{method:"GET"})
    let data=await res.json()

    let filterdata=data.filter((e)=>{
        return e.name.toLowerCase().includes(searchinp) || e.email.toLowerCase().includes(searchinp)
 
    })

    paginationn(filterdata)
}



let datashow=(data)=>{  


    let show=document.querySelector("#data")
    show.innerHTML=""


    data.map((e)=>{
        show.innerHTML+=(`

        <tr>
            <td>${e.name}</td>
            <td>${e.lastname}</td>
            <td>${e.contactnum}</td>
            <td>${e.identity}</td>
            <td>${e.email}</td>
            <td>${e.roomtype}</td>
            <td>${e.person}</td>
            <td>${e.checkindate}</td>
            <td>${e.checkintime}</td>
            <td>${e.checkoutdate}</td>
            <td>${e.checkouttime}</td>
            <td>${e.price*e.person}</td>
            <td onclick="confirmdelete('${e.id}')">Cancel</td>
            <td  onclick="formfill('${e.id}')">Update</td>


        </tr>
        `)
        
    })
}


let del=(id)=>{
    let url=`http://localhost:3000/hotel/${id}`
    
    fetch(url,{method:"DELETE"})
}








let ins=()=>{
    let inpname=document.querySelector("#name").value
    let inplastname=document.querySelector("#lname").value
    let inpnum=document.querySelector("#number").value
    let inpidentity=document.querySelector("#identiy").value
    let inpemail=document.querySelector("#email").value
    let inpguest=document.querySelector("#guest").value
    let inproom=document.querySelector("#selectroom").value
    let inpcheckindate=document.querySelector("#cdate").value
    let inpcheckintime=document.querySelector("#ctime").value
    let inpcheckoutdate=document.querySelector("#odate").value
    let inpcheckouttime=document.querySelector("#otime").value

    let url='http://localhost:3000/hotel'


    fetch(url,{

            method:"POST",
            headers:{
                    "Content-type":"application/json"
            },
            body:JSON.stringify(
                    {
                    "name":inpname,
                    "lastname":inplastname,
                    "contactnum":inpnum,
                    "identity":inpidentity,
                    "email":inpemail,
                    "person":inpguest,
                    "roomtype":inproom,
                    "checkindate":inpcheckindate,
                    "checkintime":inpcheckintime,
                    "checkouttime":inpcheckouttime,
                    "checkoutdate":inpcheckoutdate,
                    "price":500
                    }
            )
    })
    location.href="crud.html"
return false
}



let formfill=async(id)=>{
    let url=`http://localhost:3000/hotel/${id}`

    let res=await fetch(url,{method:"GET"})

    let data=await res.json()

    console.log(data);


    let formdata=`

    
Name: <input type="text" placeholder="First Name" id="upname" value="${data.name}">
    <input type="text" placeholder="Last Name" id="uplname" value="${data.lastname}">


Contact no. : <input type="text" placeholder="Mobile Number" id="upnumber" value="${data.contactnum}">

Identity no. : <input type="text" placeholder="Any Id number" id="upidentity" value="${data.identity}">

Email *  :<input type="email" placeholder="ex: myname@example.com" id="upemail" value="${data.email}">

Room Type * :
<select value="${data.roomtype}" id="upselectroom">
    <option>Please Select</option>
    <option>Single</option>
    <option>Double</option>
    <option>Suite</option>
</select>

Number of Guests * : <input type="text" placeholder="e.g., 2" id="upguest" value="${data.guest}">

Check-in Date & Time * :<input type="date" id="upcdate" value="${data.checkindate}">
<input type="time" id="upctime" value="${data.checkintime}">

Check-out Date and Time * :<input type="date" id="upodate" value="${data.checkoutdate}">
<input type="time" id="upotime" value="${data.checkouttime}">

Special Requests : <textarea rows="4"></textarea>

<input type="submit" id="update" value="update" onclick="finalupdate('${data.id}')">

    

    `
    document.querySelector("#formdata").innerHTML=formdata

}

let finalupdate=(id)=>{

    let inpname=document.querySelector("#upname").value
    let inplname=document.querySelector("#uplname").value
    let inpnumber=document.querySelector("#upnumber").value
    let inpidentity=document.querySelector("#upidentity").value
    let inpemail=document.querySelector("#upemail").value
    let inpselectroom=document.querySelector("#upselectroom").value
    let inpguest=document.querySelector("#upguest").value
    let inpindate=document.querySelector("#upcdate").value
    let inpintime=document.querySelector("#upctime").value
    let inpoutdate=document.querySelector("#upodate").value
    let inpoutime=document.querySelector("#upotime").value
    


    let url=`http://localhost:3000/hotel/${id}`  


    fetch(url,{

    method:"PUT",
    headers:{
            "Content-type":"application/json"
    },
    body:JSON.stringify(
                {
                "name":inpname,
                "lastname":inplname,
                "contactnum":inpnumber,
                "identity":inpidentity,
                "email":inpemail,
                "person":inpguest,
                "roomtype":inpselectroom,
                "checkindate":inpindate,
                "checkintime":inpintime,
                "checkouttime":inpoutime,
                "checkoutdate":inpoutdate,
                "price":700
                }

    )
    })
    update();


return false
}