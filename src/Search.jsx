import './App.css'
import jobs from './data'

function Search() {
  let jobList = jobs;
  let searchWord;
  function serching(value){
    searchWord = value
    jobList = jobs.filter(job)
  }

  return (
    <>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
        <button className="btn bg-secondary bg-gradient" type="button" id="button-addon2" onClick={(e)=>serching(e.target.value)}><img src="src\assets\search.svg" alt="Search icon" /></button>
      </div>
      {jobList.forEach(job=>{<JobListing listing = job />})}
    </>
  )
}

export default Search