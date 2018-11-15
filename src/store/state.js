let defaultCity = '余姚';
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e){}

export default {
  city: defaultCity
}
