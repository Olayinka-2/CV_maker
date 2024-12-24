import FormContact from "./formContact";
import FormEducation from "./formEducation";
import FormExperience from "./formExperience";

export default function CvForm() {
   return (
      <>
         <section className="cv-creation-section">
         <div className="cv-section">
            <form action="#">
               <FormContact />
               <FormEducation />
               <FormExperience />
               <div className="form-information">
                  <div className="section-name">
                     <div className="section-index">3</div>
                     <p>Experience</p>
                  </div>
                  <div>
                     <label htmlFor="company-name">Name of Company/Firm:<span style={{"color": "red"}}>*</span> </label>
                     <input type="text" id="company-name" placeholder="Enter your institution name" required />
                  </div>
                  <div>
                     <label htmlFor="title">Position title:<span style={{"color": "red"}}>*</span> </label>
                     <input type="text" id="title" placeholder="Enter your title name" required />
                  </div>
                  <div>
                     <label htmlFor="responsibility">Responsibility:<span style={{"color": "red"}}>*</span> </label>
                     <textarea name="responsibility" id="responsibility" rows="10"></textarea>
                  </div>
                  <div>
                     <label htmlFor="study-date-from">From:<span style={{"color": "red"}}>*</span> </label>
                     <input type="date" id="study-date-from" required />
                  </div>
                  <div>
                     <label htmlFor="study-date-to">To:<span style={{"color": "red"}}>*</span> </label>
                     <input type="date" id="study-date-to" required />
                  </div>
                  <div className="submitBtn-container">
                     <button type="submit">
                        Submit 
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </section>
      </>
   )
}