import EditButton from "./editBtn";

export default function SubmitBtn() {

   function displayCv() {
      let cvCard = document.querySelector("main");
      cvCard.style.display = "block";
      let cvForm = document.querySelector(".cv-creation-section");
      cvForm.style.display = "none";
   }

   return (
      <>
         <div className="submitBtn-container">
                     <EditButton text = 'Submit' className="submit-btn"
                     onClick = {displayCv}/>
                  </div>
      </>
   )
}