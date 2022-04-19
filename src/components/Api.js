import React, { useEffect, useState } from 'react'

const Api = () => {

    const [users, setUsers] = useState([]);

    const getAnime = async () => {
        const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
       setUsers (await response.json());
       console.log(users);
    }
   
    useEffect(() => {
        getAnime();
    }, []);

  return (
    <>
    <div className="header">
        <h1>API Calling </h1>
    </div>
    <div>
   { users.data.map((curElem) => {
        return(
            <div key={curElem.id}>
             <h2>{curElem.anime_id}</h2>
             <h1>{curElem.anime_name}</h1>
            </div>
        )
    })
}   
</div>
    </>
  )
}

export default Api
