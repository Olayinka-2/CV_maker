export default function Profile({profileName}) {
   let newName = "";

   if(profileName["name"] == "") {
      newName = 'John Doe';
   } else {
      newName = profileName["name"]
   }
   return (
      <>
         <div className="profile-info">
                     <p className="profile-name">
                        {
                           newName
                        }
                        </p>
                     <p>Frontend Developer</p>
                     <p className="profile-sumary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos velit odit at obcaecati veniam neque molestiae tenetur id libero officia!</p>
                  </div>
      </>
   )
}