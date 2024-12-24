import Aside from "./asideSection";
import Profile from "./profile";
import Experience from "./cvExperience";
import Education from "./cvEducation";
import Edit from "./editBtn";

export default function Cv() {
   return (
      <>
         <main>
         <section className="cv-page-section">
         <Edit />
            <div className="cv">
               <Aside />
               <section className="cv-content">
                  <Profile />
                  <Experience />
                  <Education />
               </section>
            </div>
         </section>
      </main>
      </>
   )
}