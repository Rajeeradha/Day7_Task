var xhr4 = new XMLHttpRequest();
 xhr4.open('GET', 'https://restcountries.com/v3.1/all');
 xhr4.responseType = 'json';

 xhr4.send();

 xhr4.onload = function () { 
  var responseObj3 = xhr4.response;
 var final=[];
 responseObj3.forEach((item) => {
       final.push(item.population)      
 })
 var red=final.reduce((a,b)=>{
    return a+b;
 })
 console.log(red);
 }
