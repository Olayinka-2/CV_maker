export default function Aside({profileInfo}) {
   let placeholderEmail = "";
   let placeholderTel = "";
   let placeholderGit = "";
   let placeholderLinkedIn = "";

   if(profileInfo["email"] == "") {
      placeholderEmail = 'Johndoe@gmail.com';
   } else {
      placeholderEmail = profileInfo["email"]
   }

   if(profileInfo["telephone"] == "") {
      placeholderTel = '09000550605';
   } else {
      placeholderTel = profileInfo["telephone"]
   }

   if(profileInfo["github"] == "") {
      placeholderGit = "https://github.com/olayinka-2";
   } else {
      placeholderGit = profileInfo["github"]
   }

   if(profileInfo["linkedIn"] == "") {
      placeholderLinkedIn = "linkedin.com/in/israel.ola";
   } else {
      placeholderLinkedIn = profileInfo["linkedIn"]
   }

   return (
      <>
      <aside>
                  <div className="profile-picture">
                        <img src="profile-photo.jpg" alt="profile-photo"/>
                  </div>
                  <div className="contact-container">
                     <div className="contact-heading">
                        Contact
                     </div>
                     <div>
                        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/phone-disconnected.png" alt="phone-disconnected"/>
                        <p>{placeholderTel}</p>
                     </div>
                     <div>
                        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github"/>
                        <p>{placeholderGit}</p>
                     </div>
                     <div>
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
                        <p>{placeholderLinkedIn}</p>
                     </div>
                     <div>
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/new-post.png" alt="new-post"/>
                        <p>{placeholderEmail}</p>
                     </div>
                  </div>
               </aside>
      </>
   )
}