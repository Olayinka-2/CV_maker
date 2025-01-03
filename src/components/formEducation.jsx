export default function FormEducation({formEducationData, setFormEducationData}) {
   function handleEvent(index, event) {
      let updatedFormEducationData = [...formEducationData];
      updatedFormEducationData[index][event.target.name] = event.target.value;
      setFormEducationData(updatedFormEducationData);
   }

   function handleAddEducationData() {
      setFormEducationData(
         [
            ...formEducationData,
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

   const removeEducationBlock = (index) => {
      const updatedEducation = formEducationData.filter((_, i) => i !== index);
      setFormEducationData(updatedEducation);
   };

   return (
      <>
         <div className="form-information">
            <div className="toggle-sections">
               <div className="addToggle">
                  <button onClick={handleAddEducationData}>Add</button>
               </div>
            </div>

            {
               formEducationData.map((education, index) => (
                  <div key={index} className="education-block">
                     <div className="section-name">
                        <div className="section-index">{index + 1}</div>
                        <p>Education</p>
                     </div>

                     <div>
                        <label htmlFor={`institution-name-${index}`}>
                           Name of Institution: <span style={{color: "red"}}>*</span>
                        </label>
                        <input
                           type="text"
                           id={`institution-name-${index}`}
                           placeholder="Enter your institution name"
                           name="institutionName"
                           required
                           value={education.institutionName}
                           onChange={(e) => handleEvent(index, e)}
                        />
                     </div>
                     <div>
                     <label htmlFor={`course-${index}`}>
                        Course of Study:<span style={{ color: "red" }}>*</span>
                     </label>
                     <input
                        type="text"
                        id={`course-${index}`}
                        placeholder="Enter the name of the course"
                        name="institutionCourse"
                        required
                        value={education.institutionCourse}
                        onChange={(e) => handleEvent(index, e)}
                     />
                  </div>

                  <div>
                     <label htmlFor={`study-date-from-${index}`}>
                        From:<span style={{ color: "red" }}>*</span>
                     </label>
                     <input
                        type="date"
                        id={`study-date-from-${index}`}
                        required
                        name="institutionDateFrom"
                        value={education.institutionDateFrom}
                        onChange={(e) => handleEvent(index, e)}
                     />
                  </div>

                  <div>
                     <label htmlFor={`study-date-to-${index}`}>
                        To:<span style={{ color: "red" }}>*</span>
                     </label>
                     <input
                        type="date"
                        id={`study-date-to-${index}`}
                        required
                        name="institutionDateTo"
                        value={education.institutionDateTo}
                        onChange={(e) => handleEvent(index, e)}
                     />
                  </div>

                  <div className="removeToggle">
                     <button onClick={() => removeEducationBlock(index)}>Remove</button>
                  </div>
               </div>
               ))
            }

         </div>
      </>
   )
}