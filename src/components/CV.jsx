import Aside from "./asideSection";
import Profile from "./cvProfile";
import Experience from "./cvExperience";
import Education from "./cvEducation";
import EditButton from "./editBtn";

export default function Cv({name}) {
   return (
      <>
         <main>
         <section className="cv-page-section">
         <EditButton text="Edit CV" className= 'edit-cv' />
            <div className="cv">
               <Aside />
               <section className="cv-content">
                  <Profile profileName = {name}  />
                  <Experience />
                  <Education />
               </section>
            </div>
         </section>
      </main>
      </>
   )
}