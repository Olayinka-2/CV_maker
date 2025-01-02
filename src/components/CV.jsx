import Aside from "./asideSection";
import Profile from "./cvProfile";
import Experience from "./cvExperience";
import Education from "./cvEducation";
import EditButton from "./editBtn";

export default function Cv({formContactData, formEducationData, formExperienceData}) {
   return (
      <>
         <main>
         <section className="cv-page-section">
         <EditButton text="Edit CV" className= 'edit-cv' />
            <div className="cv">
               <Aside profileInfo = {formContactData} />
               <section className="cv-content">
                  <Profile profileInfo = {formContactData} title = {formExperienceData}  />
                  <Experience experienceInfo = {formExperienceData}/>
                  <Education educationInfo = {formEducationData} />
               </section>
            </div>
         </section>
      </main>
      </>
   )
}