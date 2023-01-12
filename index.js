let searchcitybutton=document.querySelector('.serchbtn');

let countryinp=document.getElementById("seacrchid");


searchcitybutton.addEventListener('click' ,function(){

    let name= countryinp.value;
   
     let link=`https://restcountries.com/v3.1/name/${name}?fullText=true`;
     
    console.log(link);
if(name.length==0){
    console.log("Search bar can not be empty");
}else{
    //here we are using the Jquery
$.get(link,(Response)=>{
    console.log(Response[0]);
  
    
    let counName= Response[0].name.common;
    //calling funtion
   ChangetitleofSearchedCity(counName);
  console.log(counName);
   


  // accessing image of the country searched
  let counimg=Response[0].flags.png;
  console.log(counimg);


  const imgItem=document.querySelector('#img1');
  imgItem.src=counimg;
 

  councca3=Response[0].cca3;
  console.log(councca3);
 
  let currentpageloc= window.location.href;
console.log(currentpageloc);

let currenthostname= window.location.hostname;
console.log(currenthostname);

currentpageloc= window.location.href;
 let newurl=`/detail.html?country=${councca3}`;
 console.log(newurl);
document.getElementById("changedurl").href=newurl;
//window.location.href=newurl;

 })



   

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

function ChangetitleofSearchedCity(counName) {
    let htmlTemplate = `<h3>${counName}</h3>`;
      document.querySelector('#title1').innerHTML = htmlTemplate;
  }


