export default function FormExperience({formExperienceData, setFormExperienceData}) {
   function handleEvent(index, event) {
      let updatedFormExperienceData = [...formExperienceData];
      updatedFormExperienceData[index][event.target.name] = event.target.value;
      setFormExperienceData(updatedFormExperienceData);
   }

   function handleAddExperienceData() {
      if(formExperienceData.length > 2) {
         return;
      }
      setFormExperienceData(
         [
            ...formExperienceData,
            {
               companyName: "",
               titleHeld: "",
               responsibility: "",
               companyDateFrom: "",
               companyDateTo: ""
            }
         ]
      )
   }

   const removeExperienceBlock = (index) => {
      if(index > 0) {
         const updatedExperience = formExperienceData.filter((_, i) => i !== index);
         setFormExperienceData(updatedExperience);
      }
   };

   return (
      <>
         <div className="form-information">
            <div className="toggle-sections">
               <div className="addToggle">
                  <button onClick={handleAddExperienceData}>Add</button>
               </div>
            </div>
            {
               formExperienceData.map((experience, index) => (
                  <div key={index} className="education-block">
                     <div className="section-name">
                        {
                           index + 3 < 4 && <div className="section-index">
                              {
                                 `${index + 3}`
                              }
                           </div>
                        }
                        <p>Experience</p>
                     </div>

                     <div>
                        <label htmlFor={`company-name-${index}`}>Name of Company/Firm:<span style={{"color": "red"}}>*</span> </label>
                        <input type="text" id={`company-name-${index}`}placeholder="Enter your company name" 
                        name = "companyName"
                        value={experience.companyName}
                        onChange={(e) => handleEvent(index, e)}
                        required />
                     </div>
                     <div>
                        <label htmlFor={`title-${index}`}>Position title:<span style={{"color": "red"}}>*</span> </label>
                        <input type="text" id={`title-${index}`}placeholder="Enter your title name" required
                        name = "titleHeld"
                        value={experience.titleHeld}
                        onChange={(e) => handleEvent(index, e)}/>
                     </div>
                  
                  <div>
                     <label htmlFor={`responsibility-${index}`}>Responsibility:<span style={{"color": "red"}}>*</span> </label>
                     <textarea name="responsibility" id={`responsibility-${index}`} rows="10"
                     onChange={(e) => handleEvent(index, e)} placeholder="Maximum of 40 words"
                     ></textarea>
                  </div>
                  <div>
                     <label htmlFor={`study-date-from-${index}`}>From:<span style={{"color": "red"}}>*</span> </label>
                     <input type="date" id={`study-date-from-${index}`} required 
                     name="companyDateFrom" 
                     value={experience.companyDateFrom}
                     onChange={(e) => handleEvent(index, e)} />
                  </div>
                  <div>
                     <label htmlFor={`study-date-to-${index}`}>To:<span style={{"color": "red"}}>*</span> </label>
                     <input type="date" id={`study-date-to-${index}`} required 
                     name="companyDateTo" value={formExperienceData["companyDateTo"]}
                     onChange={(e) => handleEvent(index, e)}
                     />
                  </div>
                  <div className="removeToggle">
                     <button onClick={() => removeExperienceBlock(index)}>Remove</button>
                  </div>
               </div>
         ))
      }
      </div>
      </>
   )
}