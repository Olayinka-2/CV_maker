import FormContact from "./formContact";
import FormEducation from "./formEducation";
import FormExperience from "./formExperience";
import SubmitBtn from "./submitBtn";

export default function CvForm({formContactData, setFormContactData, formEducationData, setFormEducationData, formExperienceData, setFormExperienceData }) {
   const invalidInput = document.querySelector('[name="companyDateTo"]:invalid');
   if (invalidInput) {
      invalidInput.focus(); 
   }
   return (
      <>
         <section className="cv-creation-section">
         <div className="cv-section">
            <form action="#">
               <FormContact formContactData={formContactData} setFormContactData={setFormContactData}/>
               <FormEducation formEducationData = {formEducationData} setFormEducationData = {setFormEducationData} />
               <FormExperience formExperienceData = {formExperienceData} setFormExperienceData = {setFormExperienceData} />
               <SubmitBtn />
            </form>
         </div>
      </section>
      </>
   )
}