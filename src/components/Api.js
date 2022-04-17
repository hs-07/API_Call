import React, { useEffect, useState } from 'react'

const Api = () => {

    const [users, setUsers] = useState([]);

    const getAnime = async () => {
        const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
        setUsers(await response.json());
    }
   
    useEffect(() => {
        getAnime();
    }, []);

  return (
    <>
   { users.map((curElem) => {
        return(
            <div>
             <h2>{curElem.anime_id}</h2>
             <h1>{curElem.anime_name}</h1>
            </div>
        )
    }) 
}   
    </>
  )
}

export default Api
