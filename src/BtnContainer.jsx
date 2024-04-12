const BtnCotainer=({jobs,currentItems,setCurrentItem})=>{
    return(
        <div>
             {jobs.map((job,index)=>(
                //onClick function to set the current items be click and set the index back to App.js
                <button onClick={()=>setCurrentItem(index)} 
                key={job.id}
                className="job-btn">
                     {job.company}
                </button>
        ))}
        </div>
    )
}
export default BtnCotainer;