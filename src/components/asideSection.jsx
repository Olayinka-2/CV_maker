   const defaultContactInfo = {
   telephone: '09000550605',
   github: 'https://github.com/olayinka-2',
   linkedIn: 'linkedin.com/in/israel.ola',
   email: 'Johndoe@gmail.com',
   };

   function Aside({ profileInfo }) {
      let contactDetails = {};

   // Combine default values with profile info using spread syntax
   for(let element in profileInfo) {
      if(profileInfo[element] !== "")  {
         contactDetails[element] = profileInfo[element];
      } else {
         contactDetails[element] = defaultContactInfo[element]
      }
   }
   
   return (
      <aside>
         <div className="profile-picture">
         <img src="profile-photo.jpg" alt="profile-photo" />
         </div>
         <div className="contact-container">
         <div className="contact-heading">Contact</div>
         <div>
            <img
               width="30"
               height="30"
               src="https://img.icons8.com/ios-glyphs/30/phone-disconnected.png"
               alt="phone-disconnected"
            />
            <p>{contactDetails.telephone}</p>
         </div>
         <div>
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" />
            <p>{contactDetails.github}</p>
         </div>
         <div>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin" />
            <p>{contactDetails.linkedIn}</p>
         </div>
         <div>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/new-post.png" alt="new-post" />
            <p>{contactDetails.email}</p>
         </div>
         </div>
      </aside>
   );
   }

   export default Aside;