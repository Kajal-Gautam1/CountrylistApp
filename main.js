let searchcitybutton=document.querySelector('.serchbtn');

let countryinp=document.getElementById("seacrchid");

searchcitybutton.addEventListener('click' ,function(){

    let name= countryinp.value;
   
     let link=`https://restcountries.com/v3.1/name/${name}?fullText=true`;
     
    console.log(link);

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

  document.querySelector('#img1').innerHTML= `<img src=${counimg}>`;
 
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

    $(".posts")
});

function ChangetitleofSearchedCity(counName) {
    let htmlTemplate = `<h3>${counName}</h3>`;
      document.querySelector('#title1').innerHTML = htmlTemplate;
  }



  //adding img in the card of searched country
 