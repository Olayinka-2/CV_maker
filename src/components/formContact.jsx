export default function FormContact({formContactData, setFormContactData}) {

   function handleEvent(event) {
      setFormContactData({
         ...formContactData,
         [event.target.name]: event.target.value
      });
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
                     name="name"
                     onChange={handleEvent}
                     value={formContactData["name"]}/>
                  </div>
                  <div>
                     <label htmlFor="email">Email:<span style={{"color": "red"}}>*</span> </label>
                     <input type="email" id="email" placeholder="Olayinka@gmail.com" required
                     name="email" 
                     onChange={handleEvent}
                     value={formContactData["email"]}/>
                  </div>
                  <div>
                     <label htmlFor="github">Github profile: </label>
                     <input type="text" id="github" name="github" placeholder="Link to your github profile"
                     onChange={handleEvent}
                     value={formContactData["github"]} />
                  </div>
                  <div>
                     <label htmlFor="linkedIn">LinkedIn profile: </label>
                     <input type="text" id="linkedIn" name="linkedIn" placeholder="Link to your linkedIn profile"
                     onChange={handleEvent}
                     value={formContactData["linkedIn"]} />
                  </div>
                  <div>
                     <label htmlFor="tel">Telephone Number:<span style={{"color": "red"}}>*</span> </label>
                     <input type="tel" id="tel" placeholder="0909332223" name="telephone" required
                     onChange={handleEvent}
                     value={formContactData["telephone"]}/>
                  </div>
                  
               </div>
      </>
   )
}