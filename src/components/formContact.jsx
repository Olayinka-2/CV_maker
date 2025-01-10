export default function FormContact({formContactData, setFormContactData}) {
   const handleEvent = (event) => {
      const {name, value, files} = event.target;

      if(name === "imageUrl" && files && files[0]) {
         const file = files[0];
         setFormContactData({
            ...formContactData,
            imageUrl: URL.createObjectURL(file),
         });
         return;
      }
      setFormContactData({
         ...formContactData,
         [name]: value,
      })
   }
   // function handleEvent(event) {
   //    if(event.target.name == 'imageUrl') {
   //       setImageFile(event.target.files[0]);
   //    }
   //    setFormContactData({
   //       ...formContactData,
   //       [event.target.name]: event.target.value
   //    });
   // }

   console.log(formContactData["imageUrl"]);
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
                  <div>
                     <label htmlFor={`Bio`}>Bio:<span style={{"color": "red"}}>*</span> </label>
                     <textarea name="Bio" id={`Bio`} rows="10"
                     onChange={handleEvent} placeholder="Maximum of 40 words"
                     ></textarea>
                  </div>
                  <div>
                     <label htmlFor={`imageUrl`}>Profile image:<span style={{"color": "red"}}>*</span> </label>
                     <input type="file" name="imageUrl" id="imageUrl" accept="image/png, image/jpg, image/jpeg" 
                     onChange={handleEvent}/>
                  </div>
               </div>
      </>
   )
}