export default function FormExperience() {
   return (
      <>
         <div className="form-information">
                  <div className="section-name">
                     <div className="section-index">2</div>
                     <p>Education</p>
                  </div>
                  <div>
                     <label htmlFor="institution-name">Name of Institution:<span style={{"color": "red"}}>*</span> </label>
                     <input type="text" id="institution-name" placeholder="Enter your institution name" required />
                  </div>
                  <div>
                     <label htmlFor="course">Course of Study:<span style={{"color": "red"}}>*</span> </label>
                     <input type="text" id="course" placeholder="Enter the name of the course" required />
                  </div>
                  <div>
                     <label htmlFor="study-date-from">From:<span style={{"color": "red"}}>*</span> </label>
                     <input type="date" id="study-date-from" required />
                  </div>
                  <div>
                     <label htmlFor="study-date-to">To:<span style={{"color": "red"}}>*</span> </label>
                     <input type="date" id="study-date-to" required />
                  </div>
                  
               </div>
      </>
   )
}