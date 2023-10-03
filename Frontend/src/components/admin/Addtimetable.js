import React from 'react'
// import useState and useEffect hooks
import {useState,useEffecr} from 'react'
//import axios
import axios from 'axios'
//import useNavigation to navigate to another page
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../img/backpic.jpg';  



function Addtimetable() {

   // Define an asynchronous function to fetch the CSRF token
 async function fetchCsrfToken() {
  try {
    // Send a GET request to the server to obtain the CSRF token
    const response = await axios.get('http://localhost:5000/csrf-token');
    
    // Set the CSRF token in the component's state
    setCsrfToken(response.data.csrfToken);
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
  }
}

// Call the fetchCsrfToken function when the component mounts (empty dependency array)
useEffect(() => {
  fetchCsrfToken();
}, []);

  //to navigate to anohter page or the same page
  const navigate=useNavigate();

  //use state to track state in function components
  const [Date, setDate]=useState("");
  const [FuelType, setFuelType]=useState("");
  const [ArrivalDate, setArrivalDate]=useState("");
  const [Start, setStart]=useState("");
  const [End, setEnd]=useState("");
  const [MotoBikes, setMotoBikes]=useState("");
  const [Cars, setCars]=useState("");
  const [Vans, setVans]=useState("");
  const [Buses, setBuses]=useState("");
  const [ThreeWheel, setThreeWheel]=useState("");
  const [Other, setOther]=useState("");


   
    //target.value use to get an input value from keyboard
    const HandleDate = (e)=>{
      e.preventDefault();
      setDate(e.target.value);
      
    }

    const HandleFuelType = (e)=>{
      e.preventDefault();
      setFuelType(e.target.value);
      
    }

    const HandleArrivalDate = (e)=>{
      e.preventDefault();
      setArrivalDate(e.target.value);
      
    }

    const HandleStart = (e)=>{
      e.preventDefault();
      setStart(e.target.value);
      
    }  

    
    const HandleEnd = (e)=>{
      e.preventDefault();
      setEnd(e.target.value);
      
    }

    const HandleMotoBikes = (e)=>{
      e.preventDefault();
      setMotoBikes(e.target.value);
      
    }

    const HandleCars = (e)=>{
      e.preventDefault();
      setCars(e.target.value);
      
    }

    
    const HandleVans = (e)=>{
      e.preventDefault();
      setVans(e.target.value);
      
    }
   
    const HandleBuses = (e)=>{
      e.preventDefault();
      setBuses(e.target.value);
      
    }  

    const HandleThreeWheel = (e)=>{
      e.preventDefault();
      setThreeWheel(e.target.value);
      
    }  

    const HandleOther = (e)=>{
      e.preventDefault();
      setOther(e.target.value);
      
    } 
    
    const handleInputChange = () => {
      setDate("")
      setFuelType("");
      setArrivalDate("");
      setStart("");
      setEnd("");
      setMotoBikes("");
      setCars("");
      setVans("");
      setBuses("");
      setThreeWheel("");
      setOther("");
      
      
    }; 

    const handleSubmit = async (e)=>{
      e.preventDefault();
  
      if(Date===''|| FuelType===''|| ArrivalDate===''||Start===''|| End===''|| MotoBikes==='' || Cars==='' || Vans==='' || Buses==='' || ThreeWheel==='' || Other===''){
        alert("Fill All The Details!!")
  
      }else {
  
        let newData={
          Date:Date,
          FuelType:FuelType,
          ArrivalDate:ArrivalDate,
          Start:Start,
          End:End,
          MotoBikes:MotoBikes,
          Cars:Cars,
          Vans:Vans,
          Buses:Buses,
          ThreeWheel:ThreeWheel,
          Other:Other
          
        }
  
        console.log("Sending time table Details...",newData);
  

        let data= await axios.post('http://localhost:5000/TimeTables/Save',{
          Date:Date,
          FuelType:FuelType,
          ArrivalDate:ArrivalDate,
          Start:Start,
          End:End,
          MotoBikes:MotoBikes,
          Cars:Cars,
          Vans:Vans,
          Buses:Buses,
          ThreeWheel:ThreeWheel,
          Other:Other
        });

        console.log("Saved Data : ",data);

      if(data.status !==200){
        alert("Data Didnt Store")
      }
      else{
    
        alert("Saving data............")
        navigate('/ViewTimeTable')
      }

    }


  }


  
        

    return (
    <div>
        
                  
          <div style={{ backgroundImage: `url(${backgroundImage})`,   backgroundSize: 'cover'}}>
            <div>
        <br/><br/>
      
        <center>
        <h1 style={{ textAlign:'center',fontSize:"60px", height:'80px', backgroundColor:"#87ceeb", marginTop:'-50px'}}>Fuel   Distributed Details</h1>
        
       

            
              <br/><br/>
            <table   style={{backgroundColor :'black', marginTop:'-30px'}}>
              <tr>
                <th>
                  <br/><br/>
              <form style={{marginLeft:'30px', marginRight:'200px', marginTop:'-40px'}}>
                {/* Comment explaining the hidden input field */}
                <input type="hidden" name="csrfToken" value={csrfToken} />
              <br/>
                <table>
                  <thead>
                    <tr>
                      <th>
             
                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label  className="form-label">Date :</label>
                              <input type="date" className="form-control"
                              name="Date"
                              value={Date} 
                              onChange={(e) => HandleDate(e)} 
                            />
                            </div>
                       
                            </th>
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          
                            <th>
                        
                            <div className="form-group" style={{marginBottom:'15px', marginLeft:'-250px',color:'white'}}>
                              <label className="form-label" >Fuel Type :</label>
                              <input type="text"
                              list="type"
                              name="FuelType"
                              className="form-control"
                              placeholder="Select"              
                              value={FuelType} 
                              onChange={(e) => HandleFuelType(e)} required
                             />
                              <datalist id="type">
                                <option value="Petrol Octane 95"></option>
                                <option value="Petrol Octane 92"></option>
                                <option value="Petrol"></option>
                                <option value="Diesal"></option>
                                <option value="Super-Diesal"></option>
                                <option value="Auto-Diesal"></option>
                              </datalist>
                            </div>
                            

                            </th>
                            </tr>
                  </thead>
                  <br/>
                  <tbody>
                    <tr>

                              <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label  className="form-label">Arrival Date :</label>
                              <input type="date" className="form-control"
                              name = "ArrivalDate"
                              value={ArrivalDate} 
                              onChange={(e) => HandleArrivalDate(e)} 
                            />
                            </div>
                            </tr>
                            <tr>
                            <h5  class="p-3 mb-2  text-Black"   style={{marginLeft:'-18px', color:'white'}}><u><i><b>Fuel Dristribution Details</b></i></u></h5>
                           </tr>
                           <tr>
                          <td>
                            <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Start: </label>
                            <input type="time"
                            name="Start"
                            className="form-control"
                            value={Start} 
                            onChange={(e) => HandleStart(e)}
                            placeholder="start time"
                        
                            />
                            </div>
                            </td>
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            
                            <td>

                             <div className="form-group" style={{marginBottom:'15px', marginLeft:'-250px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  End : </label>
                            <input type="time"
                            name="End"
                            className="form-control"
                            value={End} 
                            onChange={(e) => HandleEnd(e)}
                            placeholder="End time"
                        
                                />
                             </div>
                             </td>
                             </tr>
                            <br/>
                            <tr>
                              
                             <h5 class="p-3 mb-2  text-Black"  style={{marginLeft:'-18px',color:'white'}}><u><b><i>Estimate Fuel Dristribution Details</i></b></u></h5>
                             </tr>
                             <tr>
                            <td>
                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Motobikes: </label>
                            <input type="number"
                            name="MotoBikes"
                            className="form-control"
                            value={MotoBikes} 
                            onChange={(e) => HandleMotoBikes(e)}
                            placeholder="number of motobikes"
                        
                                />
                             </div>
                            </td>

                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                           
                           
                            <td>
                             <div className="form-group" style={{marginBottom:'15px', marginLeft:'-250px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Cars: </label>
                            <input type="number"
                             name="Cars"
                             className="form-control"
                             value={Cars} 
                             onChange={(e) => HandleCars(e)}
                             placeholder="number of Cars"
                        
                                />
                             </div>
                             </td>
                            </tr>
                            <tr><td>
                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Vans: </label>
                            <input type="number"
                              name="Vans"
                              className="form-control"
                              value={Vans} 
                              onChange={(e) => HandleVans(e)}
                             placeholder="number of Vans"
                        
                                />
                             </div>
                             </td>
                             &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                           

                             <td>
                             <div className="form-group" style={{marginBottom:'15px',marginLeft:'-250px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Buses: </label>
                            <input type="number"
                               name="Buses"
                              className="form-control"
                              value={Buses} 
                              onChange={(e) => HandleBuses(e)}
                            placeholder="number of buses"
                        
                                />
                             </div>

                              </td>
                            </tr>
                            <tr>
                              <td>
                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Three-Wheel: </label>
                            <input type="number"
                             name="ThreeWheel"
                             className="form-control"
                             value={ThreeWheel} 
                             onChange={(e) => HandleThreeWheel(e)}
                            placeholder="number of three-whells"
                        
                                />
                             </div>
                            </td>
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                           
                            <td>

                             <div className="form-group" style={{marginBottom:'15px',marginLeft:'-250px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Lorry/Others: </label>
                            <input type="number"
                            name ="Other"
                            className="form-control"
                            value={Other} 
                            onChange={(e) => HandleOther(e)}
                            placeholder="number of Lorry/Other"
                        
                                />
                             </div>
                             </td>
               
                         </tr>
                        </tbody>
                         </table> 
                         <br/>
                      
                     

                     
                      
                         </form> 
                         </th>
                         </tr>
                         </table>
                      
           
                      
                    
                            
                        <div>


                 
                    

                        </div>
                        
                       
                        <br/>
                            
   
         
                        <button className= "btn btn-primary" style={{marginRight:'0px', marginLeft:'-100px', blockSize:'70px', width:'200px'}} type="submit" onClick={handleSubmit}>
                         Send Details </button>  
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <button className="btn btn-warning" style={{blockSize:'70px', width:'200px'}}><a href ={`/ViewTimeTable`}>View</a></button>
            </center>
            
            </div>
      </div>
    </div>
  )
};



export default Addtimetable
