const countryList = document.querySelector(".posts")
let p = fetch("https://restcountries.com/v3.1/all");
p.then((res) => {
    return res.json()
}).then((value2) => {
    console.log(value2)
        let box = value2.map(function(response){
         
            let Country=`${response.name.common}`;
            let timezone=`${response.timezones}`;
let len=timezone.length;
let newstring=timezone.substring(3,len+1);
let offset=newstring.replace(":",".")

function calcTime(Country, offset) {

    // create Date object for current location
    d = new Date();
    
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
    
    // return time as a string
    return " "+ nd.toLocaleString();
    
    }

// let  CounCurrency=response.currencies[Object.keys(response.currencies)].name;

    
            return `<div class="box">
            <div class="card mb-3">
        <div class="row g-0">
        <div class="col-md-4">
            <img class="img-fluid " id="img1" src="${response.flags.png}" alt="">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h4 class="card-title" > ${response.name.common}</h4>
                <p class="card-text" id="">Currency:</p>
                 <p> Current date and time: ${calcTime(Country,offset)}</p>
                <a href="${response.maps.googleMaps}" id="map1" onclick="SwitzerlandMap()">
                 <button class="showmap">Show Map</button>
                </a>
                <a href="/detail.html?country=${response.cca3}" id="changedur2" >
                <button class="detail" id="detail2" onclick="DetailofSwitzerland()">Details</button>
                </a>
            </div>
        </div>
        </div>
    </div>
    </div>
`
})
       
        box = box.join("");
        countryList.innerHTML = box;

     })

        





//  function mycurrency(response[0].currencies){
// if(response[0].currencies!=null){
//  response[0].currencies[Object.keys(response[0].currencies)].name}
// }



let searchcitybutton=document.querySelector('.serchbtn');

let countryinp=document.getElementById("seacrchid");

searchcitybutton.addEventListener('click', function(){

     
    let name= countryinp.value;
    let link=`https://restcountries.com/v3.1/name/${name}?fullText=true`;
      console.log(link);
    

if(name.length==0 ||name.length<=2 ){
   // console.log("please enter a valid country");
   document.querySelector('#errormsg').innerHTML="Please enter the valid Country name";
   setTimeout(function () {
    document.getElementById("errormsg").innerHTML = "";
}, 1000);
}else{
    //here we are using the Jquery
//$.get(link,(Response)=>{
   fetch(link).then((Response)=>Response.json())
    .then((data) =>{
    console.log(data[0]);
  
   console.log("response status:"+data.status);
if(data.status===404){
    document.querySelector('#errormsg').innerHTML="Please enter the valid Country name";
   setTimeout(function () {
    document.getElementById("errormsg").innerHTML = "";
}, 2000);
}


//for showing the details of first card......

    let counName= data[0].name.common;
    //calling funtion
   ChangetitleofSearchedCity(counName);
  console.log(counName);
   


  // accessing image of the country searched
  let counimg=data[0].flags.png;
  console.log(counimg);

//adding the image in card acc to the searched country
  const imgItem=document.querySelector('#img');
  imgItem.src=counimg;
 
//geting cca3 code
  councca3=data[0].cca3;
  console.log(councca3);
 
  //getting the maps
  counMap=data[0].maps.googleMaps;
  console.log(counMap);
  document.getElementById("map").href=counMap;

  //getting currency
  CounCurrency=data[0].currencies[Object.keys(data[0].currencies)].name;
document.querySelector("#curr").innerHTML=`Currency:${CounCurrency}`;
console.log(CounCurrency);

//getting timezone
let countimezone=data[0].timezones[0];
let len=countimezone.length;
let newstring=countimezone.substring(3,len+1);
let offset=newstring.replace(":",".")
// counName= data[0].name.common;
   
function calcTime(counName, offset) {

    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000*offset));
    return " "+ nd.toLocaleString();
    
    }
    
 let htmlTemplate = `current date and time: ${calcTime(counName,offset)}`;
document.querySelector('#dateandtime').innerHTML = htmlTemplate;
 



  let currentpageloc= window.location.href;
console.log(currentpageloc);

let currenthostname= window.location.hostname;
console.log(currenthostname);

currentpageloc= window.location.href;
 let newurl=`/detail.html?country=${councca3}`;
 console.log(newurl);
document.getElementById("changedurl").href=newurl;
//window.location.href=newurl;

 }).catch(function (error) {
    if (error.Response) {

        console.log(error.response.data);
        console.log(error.Response.status);
        console.log(error.response.headers);
       }
  });




   //  xhr.open('GET', "https://restcountries.com/v3.1/name/${name}?fullText=true" , true);
   
    // let xhr=new XMLHttpRequest();
    
    // xhr.send();
    // xhr.onload = ()=>{
    //     if(xhr.status=== 200){
    //         let data=xhr.statusText();
    //         let countries=JSON.parse(data);
    //         console.log(countries);
    //     }
    // } 
}

});
  
   
// }

function ChangetitleofSearchedCity(counName) {
    let htmlTemplate = `<h3>${counName}</h3>`;
      document.querySelector('#title1').innerHTML = htmlTemplate;
  }


// function DetailofSwitzerland(){
//     let nowloc=window.location.hostname;
//     console.log(nowloc);
//     let newurl=`/detail.html?country=CHE`;
//     document.getElementById("changedur2").href=newurl;

// }

// function DetailofAlbania(){
//     let nowloc=window.location.hostname;
//     console.log(nowloc);
//     let newurl=`/detail.html?country=ALB`;
//     document.getElementById("changedur3").href=newurl;
  
// }

// function DetailofAlergia(){
//     let nowloc=window.location.hostname;
//     console.log(nowloc);
//     let newurl=`/detail.html?country=DZA`;
//     document.getElementById("changedur4").href=newurl;
  
// }

// function SwitzerlandMap(){
//     document.getElementById("map2").href=`https://goo.gl/maps/uVuZcXaxSx5jLyEC9`;
  
// }

// function AlbaniaMap(){
//     document.getElementById("map3").href=`https://goo.gl/maps/BzN9cTuj68ZA8SyZ8`;
  
// }
// function AlgeriaMap(){
//     document.getElementById("map4").href=`https://goo.gl/maps/RsAyAfyaiNVb8DpW8`;
  
// }
