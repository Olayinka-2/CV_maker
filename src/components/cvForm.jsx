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
            </form>
         </div>
      </section>
      </>
   )
}