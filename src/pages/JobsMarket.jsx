import { supabase } from "../configs/supabaseClient"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const JobsFecthed = () => {
  const navigate = useNavigate()
  const [errorMsg , setErrorMsg] = useState(null)
  const [loading , setLoading] = useState(false)
  const [fetchedData , setFetchedData] = useState(null)
  useEffect(()=>{
    setLoading(true)
    const fetchData = async () => {
      
        let { data, error } = await supabase
            .from('jobs')
            .select('*')

        

      
      console.log('the data is : ', data)
      if (error) {
        setErrorMsg('Could not get anonymous thought due to bad network. Please try again')
        console.log(error)
        setFetchedData(null)
        setLoading(false)

      }
      if(data){
        setFetchedData(data)
        setLoading(false)
        setErrorMsg(null)
      }
    }
   fetchData()
  } , [])
  console.log("The fetched data: " , fetchedData)
  return (
    <>
     <div>
        {fetchedData && fetchedData.map((each)=> {
            return (
                <div key={each.id}>
                    <p>{each.job_title}</p>

                </div>
            )
        })}
    </div>

    </>
  )
}
export default JobsFecthed