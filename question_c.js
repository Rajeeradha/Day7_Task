var xhr3 = new XMLHttpRequest();
 xhr3.open('GET', 'https://restcountries.com/v3.1/all');
 xhr3.responseType = 'json';

 xhr3.send();

 xhr3.onload = function () { 
 var responseObj2 = xhr3.response;
  
  responseObj2.forEach((item2) => {
       console.log(` ${item2.name.common} , ${item2.flag}, ${item2.capital}`)
       
 })
 }
