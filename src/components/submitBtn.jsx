import EditButton from "./editBtn";

export default function SubmitBtn() {

   function displayCv(event) {
      event.preventDefault();

   // Check if the form is valid
   const form = event.target;
   if (!form.checkValidity()) {
      form.reportValidity(); // Highlight the invalid fields
      return;
   }
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