function CardList({jobsList})
{
    return(
        jobsList.map((job,index)=>
            <div key={index} className="card d-flex flex-row mx-4">
                <img src={`${job.logo}`} alt="Logo" className="card-img-top w-36 h-36"/>
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
            
        )
    )
}
export default CardList