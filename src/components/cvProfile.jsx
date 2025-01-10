export default function Profile({profileInfo, title}) {
   let newName = profileInfo["name"] == "" ? "John Doe": profileInfo["name"];
   let titleHeld = title == "" ? "Frontend Web developer" : title;
   let Bio = profileInfo["Bio"] === "" ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos velit odit at obcaecati veniam neque molestiae tenetur id libero officia!" : profileInfo["Bio"];


   return (
      <>
         <div className="profile-info">
                     <p className="profile-name">
                        {
                           newName
                        }
                        </p>
                     <p>{titleHeld}</p>
                     <p className="profile-sumary">{Bio}</p>
                  </div>
      </>
   )
}