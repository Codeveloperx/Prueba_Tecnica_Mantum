import { useEffect, useState } from "react";
import { getStations } from "../helpers/getStations";

export const useAxios = () => {
    const [station, setStations] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getDatos = async() => {
        const newStations = await getStations();
        setStations(newStations);
        setIsLoading(false);
    }

    
    
    useEffect( () => {
        getDatos();
    }, [setStations]);

   

    return {
        station,
        isLoading
    }

}

