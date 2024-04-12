import { useEffect, useState } from "react";
import JobInfor from "./JobInfor";
import BtnCotainer from "./BtnContainer";
const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isloading,setIsLoading] = useState(true);

  const [jobs,setJobs] = useState([]);
  // currentItem is an index. setCurrentItem by the funciton of onClick from BtnContainer.
  const[currentItem,setCurrentItem] = useState(0);


  const fectchJobs = async()=>{
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    console.log(newJobs);
    setIsLoading(false);
  }
  
  useEffect(()=>{
    fectchJobs();
  },[]);

  if(isloading){
    return <section className="jobs-center">
      <div className="loading">
        
      </div>
    </section>
  }

  return(
    <section className="jobs-center">
      <BtnCotainer jobs={jobs}  currentItem={currentItem} setCurrentItem={setCurrentItem}/>
      <JobInfor jobs={jobs} currentItem={currentItem}/>
    </section>
  ) 
};
export default App;
