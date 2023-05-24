import {useEffect,useState} from 'react'
import axios from 'axios'
import "./App.css"
import Header from './Components/header'
import Records from './Components/Records'
import Pagination from './Components/Pagination'
import Footor from './Components/footor'



const GethubIssue = () => {
    const [data, setData] = useState([])
   

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);



    function fetchApi(){
      axios.get("https://api.github.com/repos/github/hub/issues?q=stress+test+label:bug+language:python+state:closed&per_page=100")
      .then(res => {
        setData(res.data);
        
    })
    .catch(() => {
        alert('There was an error while retrieving the data')
    })
    }

    useEffect(() => {
      fetchApi()
    },[])



    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)
    
  return (
    <>
      <Header />

      <div className="w-5 m-auto mt-2 tabb1">
      <input class="form-control me-2" type="search" placeholder="is:issue is:open" aria-label="Search"/>
      <button class="btn btn-outline-secondary">label</button> &nbsp;
      <button class="btn btn-outline-secondary">Milestone</button> &nbsp;
      <button class="btn btn-success">NewIssue</button> &nbsp;

      </div>
        
         <Records data={currentRecords}/>

        <br/><br/>

          <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
          />
      
        
        <Footor /> 
    
   </>
  )
}

export default GethubIssue
