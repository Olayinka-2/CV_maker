export default function FormEducation({formEducationData, setFormEducationData}) {
   function handleEvent(event) {
      setFormEducationData({
         ...formEducationData,
         [event.target.name]: event.target.value
      });
   }

   return (
      <>
         <div className="form-information">
                  <div className="section-name">
                     <div className="section-index">2</div>
                     <p>Education</p>
                  </div>
                  <div>
                     <label htmlFor="institution-name">Name of Institution:<span style={{"color": "red"}}>*</span> </label>
                     <input type="text" id="institution-name" placeholder="Enter your institution name" 
                     name = "institutionName" required
                     value={formEducationData["institutionName"]}
                     onChange={handleEvent}/>
                  </div>
                  <div>
                     <label htmlFor="course">Course of Study:<span style={{"color": "red"}}>*</span> </label>
                     <input type="text" id="course" placeholder="Enter the name of the course" required name="institutionCourse" value={formEducationData["institutionCourse"]}
                     onChange={handleEvent}/>
                  </div>
                  <div>
                     <label htmlFor="study-date-from">From:<span style={{"color": "red"}}>*</span> </label>
                     <input type="date" id="study-date-from" required name="institutionDateFrom" 
                     value={formEducationData["institutionDateFrom"]}
                     onChange={handleEvent}/>
                  </div>
                  <div>
                     <label htmlFor="study-date-to">To:<span style={{"color": "red"}}>*</span> </label>
                     <input type="date" id="study-date-to" required
                     name="institutionDateTo" value={formEducationData["institutionDateTo"]}
                     onChange={handleEvent}/>
                  </div>
                  
               </div>
      </>
   )
}