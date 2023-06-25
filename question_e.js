var xhr5 = new XMLHttpRequest();
xhr5.open('GET', 'https://restcountries.com/v3.1/all');
xhr5.responseType = 'json';

xhr5.send();

xhr5.onload = function () { 
 var responseObj5 = xhr5.response;
 let result5=responseObj5.filter((data)=>{
 for(key in data.currencies)
if(data.currencies[key].name=='United States dollar'){
       return data        
   }
 })
 console.log(result5.map((dollar)=>{
   return dollar.name.common
 }))
}
   
