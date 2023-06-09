import axios from "axios";
const Axios=axios.create(
   {
    baseURL:"http://localhost:8080/api/v1",
        headers:{
          "Content-Type":"application/json",
          "Access-Control-Allow-Origin":"*",
          Authorization:typeof window==='undefined' && localStorage.getItem("access") ?
           `Bearer ${localStorage.getItem('access')}` :
            ''
        }
   }
)