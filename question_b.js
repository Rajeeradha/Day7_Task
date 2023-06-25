var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://restcountries.com/v3.1/all');
xhr2.responseType = 'json';

xhr2.send();

xhr2.onload = function () { 
 var responseObj1 = xhr2.response;

  var result= responseObj1.filter(function(item){
    return item.population < 200000;
  });
  
 console.log(result.map((item)=>{
   return item.name.common
  }))
}