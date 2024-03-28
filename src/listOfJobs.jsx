import { useState } from "react"
import jobs from "./data"

function List(){

    const [jobsList,setJobs]=useState(jobs)
    console.log(jobsList)

    return(
        <div className='mt-24 '>
            <h1 className='mb-10 title flex justify-center'><img src="src\images\jobchase-high-resolution-logo-white-transparent.png" alt="Logo" className="card-img-top w-60"/></h1>
            <form className="input-group mb-12">
                    <input type="text" className="form-control h-12" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                    <button className="btn search-btn" type="button" id="button-addon2"
                   ><img src="src\images\search.svg" alt="Search icon" /></button>
            </form>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    {jobsList.map((job,index)=>
                        <div key={index} className="card d-flex flex-row mx-4">
                            <img src={`${job.logo}`} alt="Logo" className="card-img-top w-40"/>
                            <div className="card-body">
                                <h5 className="card-title font-bold mb-3">{job.position}</h5>
                                <p className="card-text">
                                    <span >Compnay: {job.company}</span><br/>
                                    <span >Languages: {job.languages.map((lan,i)=><span key={i} className="mr-2">{lan}</span>)}</span><br/>
                                    <span>Contract: {job.contract}</span><br/>
                                    <span>Location: {job.location}</span><br/>
                                    <span>Level: {job.level}</span><br/>
                                    <span>Posted: {job.postedAt}</span><br/>
                                </p>
                            </div>
                        </div>
                        
                    )}
                </div>
            </div>
        </div>  
    )
}
export default List