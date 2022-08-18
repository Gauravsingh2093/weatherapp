import React, { useState,useEffect } from 'react'

const Tempapp = () => {

    const[city,setCity]= useState(null);
    const[search,setSearch]= useState("Delhi"); 


    useEffect ( ()=>{
          const fetchApi= async()=>{
            // const url ="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=bcdcd3f4b59d94e7689a3962d126be4e";
            // const url ="https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=bcdcd3f4b59d94e7689a3962d126be4e";
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bcdcd3f4b59d94e7689a3962d126be4e`;
            const response = await fetch(url);
            const resjson = await response.json();
            // console.log(resjson);
            setCity(resjson.main);

          };   

          fetchApi();
    },[search]);

 

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h2>Weather App</h2>
            <div className="inputdat">
  <input type="search" value={search} onChange ={(event)=> { setSearch(event.target.value)

  }}>

  </input>
    </div>
{!city ?(
  <p> No Data Found </p>
    ):(
        <div className="info">
        <h2>
        <i className="fas fa-street-view"></i>{search}
         </h2>  
         <div className="sky">
            <div className="sun"></div>
            <div className="cloud">
                <div className="circle-small"></div>
                <div className="circle-tall"></div>
                <div className="circle-medium"></div>
            </div>
        </div>
         <h2>
          {city.temp}<span>&#8451;el</span>
             </h2>    

             <h3> Min:{city.temp_min}<span>&#8451;el</span> Max:{city.temp_max}<span>&#8451;el</span></h3>
             {/* <p>{city.main.temp}</p> */}
 </div>
    )

    }
            </div>
        </div>
        </div>
   
        </div>
    </div>

    </>
  )
}

export default Tempapp
