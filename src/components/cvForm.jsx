import FormContact from "./formContact";
import FormEducation from "./formEducation";
import FormExperience from "./formExperience";

export default function CvForm({formContactData, setFormContactData, formEducationData, setFormEducationData}) {
   return (
      <>
         <section className="cv-creation-section">
         <div className="cv-section">
            <form action="#">
               <FormContact formContactData={formContactData} setFormContactData={setFormContactData}/>
               <FormEducation formEducationData = {formEducationData} setFormEducationData = {setFormEducationData} />
               <FormExperience />
            </form>
         </div>
      </section>
      </>
   )
}