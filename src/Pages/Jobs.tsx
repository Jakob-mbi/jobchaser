import { useEffect, useRef, useState } from "react"
import { post } from "../Components/types"
import CardList from "../Components/CardList"
import { useDispatch, useSelector} from "react-redux"
import{inputWord} from "../State/Search";
import { RootState } from "../State/store";



function List(){

    const dispatch = useDispatch();
    const [jobsData,setJobs]=useState<Array<post>>([])
    const [ogList,setogList]=useState<Array<post>>([])
    const inputRef = useRef<any>()
    const value = useSelector((state:RootState)=>state.serchWord.word)
 

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
            console.error(error)
        }
       
    }

    function onSubmit(e:any)
    {
        e.preventDefault()
        dispatch(inputWord(inputRef.current?.value))
        if(value=="") return fetchData()
        setJobs(ogList.filter((j)=>
        j.position.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
       
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