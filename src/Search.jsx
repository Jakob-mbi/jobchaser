import './App.css'
import jobs from './data'

function Search() {
  const jobList = jobs;

  
  return (
    <>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
        <button className="btn bg-secondary bg-gradient" type="button" id="button-addon2"><img src="src\assets\search.svg" alt="Search icon" /></button>
      </div>
    </>
  )
}

export default Search