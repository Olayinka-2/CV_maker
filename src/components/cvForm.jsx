// import { useState } from "react";
import FormContact from "./formContact";
import FormEducation from "./formEducation";
import FormExperience from "./formExperience";

export default function CvForm({name, setName}) {
   // let [name, setName] = useState("");
   return (
      <>
         <section className="cv-creation-section">
         <div className="cv-section">
            <form action="#">
               <FormContact name={name} setName={setName}/>
               <FormEducation />
               <FormExperience />
            </form>
         </div>
      </section>
      </>
   )
}