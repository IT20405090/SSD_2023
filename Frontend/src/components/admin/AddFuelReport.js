import React from 'react'
// import useState and useEffect hooks
import {useState,useEffecr} from 'react'
//import axios
import axios from 'axios'
//import useNavigation to navigate to another page
import { useNavigate } from 'react-router-dom';
//import the background image
import backgroundImage from '../../img/addbackground.jpg';   

function AddFuelReport(){

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
  const [RefID, setRefID]=useState("");
  const [FuelType, setFuelType]=useState("");
  const [Rdate, setRdate]=useState("");
  const [Ramount, setRamount]=useState("");
  const [MotoBikes, setMotoBikes]=useState("");
  const [Cars, setCars]=useState("");
  const [ThreeWheel, setThreeWheel]=useState("");
  const [Buses, setBuses]=useState("");
  const [Vans, setVans]=useState("");
  const [Other, setOther]=useState("");
  const [TotalAmount, setTotalAmount]=useState("");
  const [Oct92, setOct92]=useState("");
  const [Oct95, setOct95]=useState("");
  const [Diesal, setDiesal]=useState("");
  const [Remaintot, setRemaintot]=useState("");


   
    //target.value use to get an input value from keyboard
    const HandleRefID = (e)=>{
      e.preventDefault();
      setRefID(e.target.value);

      //validation
      if ((e.target.value).length>7) {
        alert("Invalid ID type!");
      }
      
    }

    const HandleFuelType = (e)=>{
      e.preventDefault();
      setFuelType(e.target.value);
      
    }

    const HandleRdate = (e)=>{
      e.preventDefault();
      setRdate(e.target.value);
      
    }

    const HandleRamount = (e)=>{
      e.preventDefault();
      setRamount(e.target.value);
      //validation
      if ((e.target.value).length>7) {
        alert("Invalid amount!");
      }
    
    }  

    

    const HandleMotoBikes = (e)=>{
      e.preventDefault();
      setMotoBikes(e.target.value);
      if ((e.target.value).length>7) {
        alert("Limit exceeded!");
      }
      
    }

    const HandleCars = (e)=>{
      e.preventDefault();
      setCars(e.target.value);
      if ((e.target.value).length>7) {
        alert("Limit exceeded!");
      }
      
    }

    
    const HandleVans = (e)=>{
      e.preventDefault();
      setVans(e.target.value);
      if ((e.target.value).length>7) {
        alert("Limit exceeded!");
      }
      
    }
   
    const HandleBuses = (e)=>{
      e.preventDefault();
      setBuses(e.target.value);
      if ((e.target.value).length>7) {
        alert("Limit exceeded!");
      }
      
    }  

    const HandleThreeWheel = (e)=>{
      e.preventDefault();
      setThreeWheel(e.target.value);
      if ((e.target.value).length>7) {
        alert("Limit exceeded!");
      }
      
    }  

    const HandleOther = (e)=>{
      e.preventDefault();
      setOther(e.target.value);
      if ((e.target.value).length>7) {
        alert("Limit exceeded!");
      }
      
    } 
    const handleTot = (e)=>{
      setTotalAmount(parseInt(MotoBikes) + parseInt(Cars) + parseInt(Vans) + parseInt(Buses) + parseInt(ThreeWheel) + parseInt(Other));
      e.preventDefault();
    }

    const HandleTotalAmount = (e)=>{
      setTotalAmount(e.target.value);
      e.preventDefault();
    }
  

    const HandleOct92 = (e)=>{
      e.preventDefault();
      setOct92(e.target.value);
      if ((e.target.value).length>7) {
        alert("Limit exceeded!");
      }
    }

    const HandleOct95 = (e)=>{
      e.preventDefault();
      setOct95(e.target.value);
      if ((e.target.value).length>7) {
        alert("Limit exceeded!");
      }
      
    }

    
    const HandleDiesal = (e)=>{
      e.preventDefault();
      setDiesal(e.target.value);
      if ((e.target.value).length>7) {
        alert("Limit exceeded!");
      }
      
    }

    const HandleRemaintot = (e)=>{
      e.preventDefault();
      setRemaintot(e.target.value);
      
    }

    const handleRem = (e)=>{
      setRemaintot(parseInt(Oct92) + parseInt(Oct95) + parseInt(Diesal));
      e.preventDefault();
    }

    
    const handleInputChange = () => {
      setRefID("")
      setFuelType("");
      setRdate("");
      setRamount("");
      setMotoBikes("");
      setCars("");
      setThreeWheel("");
      setBuses("");
      setVans("");
      setOther("");
      setTotalAmount("");
      setOct92("");
      setOct95("");
      setDiesal("");
      setRemaintot("");
      
    }; 

    const handleSubmit = async (e)=>{
      e.preventDefault();
  
      if(RefID===''|| FuelType===''|| Rdate===''||Ramount===''||  MotoBikes==='' || Cars==='' || ThreeWheel==='' || Buses==='' || Vans==='' || Other===''||TotalAmount===''|| Oct92===''||Oct95===''||Diesal===''||Remaintot===''){
        alert("Fill All The Details!!")
  
      }else {
  
        let newData={
          RefID:RefID,
          FuelType:FuelType,
          Rdate:Rdate,
          Ramount:Ramount,
          MotoBikes:MotoBikes,
          Cars:Cars,
          ThreeWheel:ThreeWheel,
          Buses:Buses,
          Vans:Vans,
          Other:Other,
          TotalAmount:TotalAmount,
          Oct92:Oct92,
          Oct95:Oct95,
          Diesal:Diesal,
          Remaintot:Remaintot
          
        }
  
        console.log("Sending time table Details...",newData);
  

        let data= await axios.post('http://localhost:5000/FuelReport/Save',{
          RefID:RefID,
          FuelType:FuelType,
          Rdate:Rdate,
          Ramount:Ramount,
          MotoBikes:MotoBikes,
          Cars:Cars,
          ThreeWheel:ThreeWheel,
          Buses:Buses,
          Vans:Vans,
          Other:Other,
          TotalAmount:TotalAmount,
          Oct92:Oct92,
          Oct95:Oct95,
          Diesal:Diesal,
          Remaintot:Remaintot
        });

        
        console.log("Saved Data : ",data);

      if(data.status !==200){
        alert("Data Didn't Store")
      }
      else{
    
        alert("Saving data............")
        navigate('/ViewFuelReport')
      }

    }


  }


 
 

    return(

        
      <div style={{ backgroundImage: `url(${backgroundImage})`,   backgroundSize: 'cover'}}>
      <div>
          
                    
     <div>
          <div>
          <br/><br/>
        
          <center>
          <h1 style={{ textAlign:'center',fontSize:"60px", backgroundColor:"#87ceeb", marginTop:'-50px'}}>Fuel   Distributed Details</h1>
        
              
                <br/><br/>
              <table style={{backgroundColor:"black"}}>
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
                                <label  className="form-label">Reference ID :</label>
                                <input type="text" className="form-control"
                                name="RefID"
                                placeholder='Received bowser ID'
                                value={RefID} 
                                onChange={(e) => HandleRefID(e)} 
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
                                placeholder="Select Type"              
                                value={FuelType} 
                                onChange={(e) => HandleFuelType(e)} required
                               />
                                <datalist id="type">
                                
                                  <option value="Petrol"></option>
                                  <option value="Diesal"></option>
                               
                                </datalist>
                              </div>
                              
  
                              </th>
                              </tr>
                    </thead>
                    <br/>
                    <tbody>
                      <tr>
  
                                <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                <label  className="form-label">Received Date :</label>
                                <input type="date" className="form-control"
                                name = "Rdate"
                                value={Rdate} 
                                onChange={(e) => HandleRdate(e)} 
                              />
                              </div>
                              </tr>
                             
                             <tr>
                            <td>
                              <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label style={{margineBottom:'5px'}}>  Received Amount(L): </label>
                              <input type="number"
                              name="Ramount"
                              className="form-control"
                              value={Ramount} 
                              onChange={(e) => HandleRamount(e)}
                              placeholder="Fuel Amount(l)"
                          
                              />
                              </div>
                              </td>
                              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                              
                 
                               </tr>
                              <br/>
                              <tr>
                                
                               <h5 class="p-3 mb-2  text-Black"  style={{marginLeft:'-18px',color:'white'}}><u><b><i>Provided Fuel Amounts(l)</i></b></u></h5>
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
                              placeholder="Enter Amount(l)"
                          
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
                               placeholder="Enter Amount(l)"
                          
                                  />
                               </div>
                               </td>
                              </tr>
                              <tr><td>
                               <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label style={{margineBottom:'5px'}}>  ThreeWheel: </label>
                              <input type="number"
                                name="ThreeWheel"
                                className="form-control"
                                value={ThreeWheel} 
                                onChange={(e) => HandleThreeWheel(e)}
                               placeholder="Enter Amount(l)"
                          
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
                                placeholder="Enter Amount(l)"
                          
                                  />
                               </div>
  
                                </td>
                              </tr>
                              <tr>
                                <td>
                               <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label style={{margineBottom:'5px'}}>  Vans: </label>
                              <input type="number"
                               name="Vans"
                               className="form-control"
                               value={Vans} 
                               onChange={(e) => HandleVans(e)}
                               placeholder="Enter Amount(l)"
                          
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
                              placeholder="Enter Amount(l)"
                          
                                  />
                               </div>
                               </td>
                                <br/>

                            
                            
                 
                           </tr>
                           <br/>  <br/>
                           <tr>
                            <td>
                           <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label style={{margineBottom:'5px'}}>  Total Amount: </label>
                              <input type="text"
                               name="TotalAmount"
                               className="form-control"
                               value={TotalAmount} 
                              onChange={(e) => HandleTotalAmount(e)}
                              placeholder="Provided total amount"
                          
                                  />
                               </div>
                          
                        
                             <br/>
                           
                           <button className= "btn btn-primary" style={{marginRight:'200px', blockSize:'50px', width:'100px', height:'40px'}} type="submit" onClick={handleTot}>
                           Calculate </button> 
                           </td>
                            </tr>
                            <tr>
                                
                               <h5 class="p-3 mb-2  text-Black"  style={{marginLeft:'-18px',color:'white'}}><u><b><i>Remaining Fuel Amounts(l)</i></b></u></h5>
                               </tr>

                               <tr><td>
                           <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label style={{margineBottom:'5px'}}>  Octane 92: </label>
                              <input type="number"
                               name="Oct92"
                               className="form-control"
                               value={Oct92} 
                               onChange={(e) => HandleOct92(e)}
                              placeholder="Remained octane92"
                          
                                  />
                               </div>
                            </td>
                            </tr>

                            <tr><td>
                           <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label style={{margineBottom:'5px'}}>  Octane 95: </label>
                              <input type="number"
                               name="Oct95"
                               className="form-control"
                               value={Oct95} 
                               onChange={(e) => HandleOct95(e)}
                              placeholder="Remained octane95"
                          
                                  />
                               </div>
                            </td>
                            </tr>

                            <tr><td>
                           <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label style={{margineBottom:'5px'}}>  Deisal: </label>
                              <input type="number"
                               name="Diesal"
                               className="form-control"
                               value={Diesal} 
                               onChange={(e) => HandleDiesal(e)}
                               placeholder="Remained diesal"
                          
                                  />
                               </div>
                            </td>
                            </tr>

                            <br/><br/>
                            <tr><td>
                           <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label style={{margineBottom:'5px'}}>  Total Remaining: </label>
                              <input type="text"
                               name="Remaintot"
                               className="form-control"
                               value={Remaintot} 
                               onChange={(e) => HandleRemaintot(e)}
                              placeholder="Remained total amount"
                          
                                  />
                               </div>
                              <br/>
                               <button className= "btn btn-primary" style={{marginRight:'200px', blockSize:'50px', width:'100px', height:'40px'}} type="submit" onClick={handleRem}>
                                Calculate </button> 
                            </td>
                            </tr>
                          </tbody>
                           </table> 
                           <br/>
                        
                       
  
                         
                           <button className= "btn btn-primary" style={{marginRight:'0px', blockSize:'50px', width:'250px'}} type="submit" onClick={handleSubmit}>
                           Send Details </button> 

                          
                          
                           </form> 
                           <br/><br/>
                           </th>
                           </tr>
                           </table>
                        <br/><br/>
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <button className="btn btn-dark" style={{blockSize:'40px',width:'100px'}}><a href = "/ViewFuelReport" >VIEW</a></button>
                         

                         
                              
                          <div>
  
  
                   
                      
  
                          </div>
                          
                         
                          <br/>
                              
     
           
                     
                           
              </center>
              
              </div>
        </div>
      </div>
  
  
  
  
  
      </div>


    )

};

export default AddFuelReport