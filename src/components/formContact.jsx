export default function FormContact({formData, setFormData}) {

   function handleEvent(event) {
      setFormData({
         ...formData,
         name: event.target.value
      });
      console.log(formData);
   }

   return (
      <>
      <div className="form-information" id="form-contact">
                  <div className="section-name">
                     <div className="section-index">1</div>
                     <p>Contact information</p>
                  </div>
                  <div>
                     <label htmlFor="Name">Name:<span style={{"color": "red"}}>*</span> </label>
                     <input type="text" id="name" placeholder="Enter your full name" required 
                     onChange={handleEvent}
                     value={formData["name"]}/>
                  </div>
                  <div>
                     <label htmlFor="email">Email:<span style={{"color": "red"}}>*</span> </label>
                     <input type="email" id="email" placeholder="Olayinka@gmail.com" required />
                  </div>
                  <div>
                     <label htmlFor="github">Github profile: </label>
                     <input type="text" id="github" placeholder="Link to your github profile" />
                  </div>
                  <div>
                     <label htmlFor="tel">Telephone Number:<span style={{"color": "red"}}>*</span> </label>
                     <input type="tel" id="tel" placeholder="0909332223" required/>
                  </div>
                  
               </div>
      </>
   )
}