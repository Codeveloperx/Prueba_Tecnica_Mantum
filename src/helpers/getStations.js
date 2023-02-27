import axios from 'axios';

export const getStations = async() =>{

    const endPoint = 'https://backpruebatecnica-production.up.railway.app/stops';
    // const endPoint = 'http://localhost:3000/stops';

    try{
        const resp = await axios.get( endPoint );
        const data  = await resp.data;
        console.log(data)
        return data;
    }
    catch{
        alert("Ha ocurrido un problema al solicitar los datos")
    }
}