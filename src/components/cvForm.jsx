import FormContact from "./formContact";
import FormEducation from "./formEducation";
import FormExperience from "./formExperience";

export default function CvForm({formContactData, setFormContactData}) {
   return (
      <>
         <section className="cv-creation-section">
         <div className="cv-section">
            <form action="#">
               <FormContact formContactData={formContactData} setFormContactData={setFormContactData}/>
               <FormEducation />
               <FormExperience />
            </form>
         </div>
      </section>
      </>
   )
}