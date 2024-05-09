import { useEffect, useRef, useState } from "react"
import CardList from "./CardList"



function List(){

    const [jobsData,setJobs]=useState([])
    const inputRef = useRef()
    useEffect(()=>{
      fetchData()
    },[])

    function onSubmit(e)
    {
        e.preventDefault()
        const value = inputRef.current.value
        if(value=="") return fetchData()
        setJobs(jobsData.filter((j)=>j.position.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
       
    }

    async function fetchData() {
        try{
            const response = await fetch("data.json");
           const jobsListing = await response.json();
            setJobs(jobsListing)
           
        }catch(error)
        {
            console.error(error.message)
        }
       
    }

    return(
        <div className='mt-24 '>
            <h1 className='mb-10 title flex justify-center'><img src="src\images\jobchase-high-resolution-logo-white-transparent.png" alt="Logo" className="card-img-top w-60"/></h1>
            <form className="input-group mb-12" onSubmit={onSubmit}>
                <input type="text" className="form-control h-12" placeholder="Search" ref={inputRef} />
                <button className="btn search-btn" type="submit" >
                <img src="src\images\search.svg" alt="Search icon" /></button>
            </form>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <CardList jobsList={jobsData}/>
                </div>
            </div>
        </div>  
    )
}
export default List