
let detailpageloc=window.location.href;
console.log(detailpageloc);

let paramString = detailpageloc.split('?')[1];
 let queryString = new URLSearchParams(paramString);
let countrycode='';
        for(let pair of queryString.entries()) {
            console.log("Key is:" + pair[0]);
            countrycode=pair[1];
            console.log("Value is:" + countrycode);
        }

 let api2=`https://restcountries.com/v3.1/alpha/${countrycode}`  ;
 console.log(api2);     

 //fetching data from the api2
 $.get(api2,(Response)=>{
    console.log(Response[0]);

    //adding the image into the detail page
   let detailpageflag= Response[0].flags.png;
const setimg=document.querySelector('#myimg');
setimg.src=detailpageflag;


//adding title of country
let counname=Response[0].name.common;
document.querySelector('#countryname').innerHTML=counname;



//details of the country
let Capital=Response[0].capital[0];
console.log(Capital);
document.querySelector('#Capital').innerHTML=Capital;


let populationn=Response[0].population[0];
console.log(populationn);
document.querySelector('#Population').innerHTML=populationn;

let counRegion=Response[0].region;
document.querySelector('#Region').innerHTML=counRegion;

document.querySelector('#Sub-region').innerHTML=Response[0].subregion;

document.querySelector('#Area').innerHTML=Response[0].area;

document.querySelector('#Languages').innerHTML=Object.values(Response[0].languages);

document.querySelector('#Currencies').innerHTML=Response[0].currencies[Object.keys(Response[0].currencies)].name;

document.querySelector('#timezones').innerHTML=Response[0].timezones;

//document.querySelector('#NativeName').innerHTML=Response[0].hin.common;

//adding the Neighbour countrie
let NeighbourcounCode1=Response[0].borders[1];

let newapi1=`https://restcountries.com/v3.1/alpha/${NeighbourcounCode1}`;

$.get(newapi1,(Response) =>{
let newflag=Response[0].flags.png;
document.querySelector('#my1').src=newflag;
})
let NeighbourcounCode2=Response[0].borders[2];

let newapi2=`https://restcountries.com/v3.1/alpha/${NeighbourcounCode2}`;

$.get(newapi2,(Response) =>{
let newflag=Response[0].flags.png;
document.querySelector('#my2').src=newflag;
})



let NeighbourcounCode3=Response[0].borders[3];

let newapi3=`https://restcountries.com/v3.1/alpha/${NeighbourcounCode3}`;

$.get(newapi3,(Response) =>{
let newflag=Response[0].flags.png;
document.querySelector('#my3').src=newflag;
});
let NeighbourcounCode4=Response[0].borders[4];



let newapi4=`https://restcountries.com/v3.1/alpha/${NeighbourcounCode4}`;

$.get(newapi4,(Response) =>{
let newflag=Response[0].flags.png;
document.querySelector('#my4').src=newflag;
});



let NeighbourcounCode5=Response[0].borders[5];

let newapi5=`https://restcountries.com/v3.1/alpha/${NeighbourcounCode5}`;

$.get(newapi5,(Response) =>{
let newflag=Response[0].flags.png;
document.querySelector('#my5').src=newflag;
});



let NeighbourcounCode6=Response[0].borders[6];

let newapi6=`https://restcountries.com/v3.1/alpha/${NeighbourcounCode6}`;

$.get(newapi6,(Response) =>{
let newflag=Response[0].flags.png;
document.querySelector('#my6').src=newflag;
});



//details of the country
// let nativename=Response[0].hin.common;
// document.querySelector('NativeName').innerHTM=nativename;


 })