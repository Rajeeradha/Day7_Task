var xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'https://restcountries.com/v3.1/all');
xhr1.responseType = 'json';

xhr1.send();

xhr1.onload = function () { 
 var responseObj = xhr1.response;
  var result1= responseObj.filter(function(item1){
    return item1.continents=='Asia';
  });

  console.log(result1.map((item1)=>{
   return item1.name.common;
  }))
}
