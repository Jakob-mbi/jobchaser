function JobListing(prop) {
  

    return (
        <div className="card" style="width: 18rem;">
            <div className="card-body">
                <h5 className="card-title">{prop.position}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{prop.company}</h6>
                <p className="card-text">Role:{prop.role} </p>
            </div>
            <img src={prop.logo} className="card-img-bottom" alt="..."></img>
        </div>
    )
  }
  
  export default JobListing