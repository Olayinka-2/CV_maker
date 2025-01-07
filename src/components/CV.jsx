import Aside from "./asideSection";
import Profile from "./cvProfile";
import Experience from "./cvExperience";
import Education from "./cvEducation";
import EditButton from "./editBtn";

export default function Cv({formContactData, formEducationData, formExperienceData}) {
   function handleBtn() {
         let cvCard = document.querySelector("main");
         cvCard.style.display = "none";
         let cvForm = document.querySelector(".cv-creation-section");
         cvForm.style.display = "block";
   }

   return (
      <>
         <main>
         <section className="cv-page-section">
         <EditButton text="Edit CV" className= 'edit-cv' onClick={handleBtn} />
            <div className="cv">
               <Aside profileInfo = {formContactData} />
               <section className="cv-content">
                  <Profile profileInfo = {formContactData} title = {formExperienceData[0]["titleHeld"]}  />
                  <Experience experienceInfo = {formExperienceData}/>
                  <Education educationInfo = {formEducationData} />
               </section>
            </div>
         </section>
      </main>
      </>
   )
}