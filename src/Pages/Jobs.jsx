import { useEffect, useRef, useState } from "react"
import CardList from "../CardList"



function List(){

    const [jobsData,setJobs]=useState([])
    const [ogList,setogList]=useState([])
    const inputRef = useRef()

    useEffect(()=>{
      fetchData()
    },[])

    async function fetchData() {
        try{
            const response = await fetch("http://localhost:8000/jobs");
            const jobsListing = await response.json();
            setJobs(jobsListing)
            setogList(jobsListing)
           
        }catch(error)
        {
            console.error(error.message)
        }
       
    }

    function onSubmit(e)
    {
        e.preventDefault()
        const value = inputRef.current.value
        if(value=="") return fetchData()
        setJobs(ogList.filter((j)=>j.position.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
       
    }

    return(
        <div className='mt-24 '>
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