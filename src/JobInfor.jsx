import Duties from "./duties";

const JobInfor=({jobs,currentItem})=>{
    //destructing obejects to four attributes. (company,dates,duties,title);
    //Control which obejects will be displaied. (jobs[index]);
    // jos[0] is for the first object in the object array;
    const {company, dates, duties ,title} = jobs[currentItem];

    return (
        <div>
            <div className="job-info">
                <h3>{title}</h3>
                <span className="job-company">{company}</span>
                <p className="job-date">{dates}</p>
        <       Duties duties={duties}/>
            </div>
    </div>
    );
}


export default JobInfor;