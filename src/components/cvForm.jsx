import FormContact from "./formContact";
import FormEducation from "./formEducation";
import FormExperience from "./formExperience";

export default function CvForm({formData, setFormData}) {
   return (
      <>
         <section className="cv-creation-section">
         <div className="cv-section">
            <form action="#">
               <FormContact formData={formData} setFormData={setFormData}/>
               <FormEducation />
               <FormExperience />
            </form>
         </div>
      </section>
      </>
   )
}