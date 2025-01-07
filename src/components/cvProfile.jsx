export default function Profile({profileInfo, title}) {
   let newName = "";
   let titleHeld = "";

   if(profileInfo["name"] == "") {
      newName = 'John Doe';
   } else {
      newName = profileInfo["name"]
   }
   if(title == "") {
      titleHeld = 'Frontend Web developer';
   } else {
      titleHeld = title;
   }
   console.log(title);
   return (
      <>
         <div className="profile-info">
                     <p className="profile-name">
                        {
                           newName
                        }
                        </p>
                     <p>{titleHeld}</p>
                     <p className="profile-sumary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos velit odit at obcaecati veniam neque molestiae tenetur id libero officia!</p>
                  </div>
      </>
   )
}