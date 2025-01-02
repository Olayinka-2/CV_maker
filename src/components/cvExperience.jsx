export default function Experience({experienceInfo}) {
   let  dateFrom = new Date(experienceInfo["companyDateFrom"]).getFullYear();
   let dateTo = new Date(experienceInfo["companyDateTo"]).getFullYear();
   
   if(isNaN(dateFrom)) {
      dateFrom = '2015'
   } 
   if(isNaN(dateTo)) {
      dateTo = '2020'
   }
   if(experienceInfo["titleHeld"] == "") {
      experienceInfo["titleHeld"] = 'Frontend Web engineer'
   }
   if(experienceInfo["companyName"] == "" || experienceInfo["companyName"] == undefined) {
      experienceInfo["companyName"] = 'waste2light'
   }
   if(experienceInfo["responsibility"] == "" || experienceInfo["responsibility"] == undefined) {
      experienceInfo["responsibility"] = 'Frontend Developers are responsible for designing and developing user interfaces for web and mobile applications. They translate UI/UX designs into high-quality, responsive code, ensuring cross-browser compatibility and perform'
   }
   // console.log(experienceInfo["companyName"]);
   // console.log(experienceInfo["responsibility"]);
   return (
      <>
               <section className="experience-section">
                     <h3>Experience</h3>
                     <div className="experience-content">
                        <div className="experience-date">
                           <h4>{`${dateFrom} -  ${dateTo}`}</h4>
                        </div>
                        <div className="experience-details">
                           <h4>{`${experienceInfo["companyName"]}`}</h4>
                           <p>{`${experienceInfo["responsibility"]}`}</p>
                        </div>
                     </div>
                     <div className="experience-content">
                        <div className="experience-date">
                           <h4>2015 - 2019</h4>
                        </div>
                        <div className="experience-details">
                           <h4>Company D</h4>
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius reprehenderit molestiae animi itaque quasi suscipit voluptatum earum. Ullam, impedit. Magnam!</p>
                        </div>
                     </div>
                     <div className="experience-content">
                        <div className="experience-date">
                           <h4>2015 - 2019</h4>
                        </div>
                        <div className="experience-details">
                           <h4>Company D</h4>
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius reprehenderit molestiae animi itaque quasi suscipit voluptatum earum. Ullam, impedit. Magnam!</p>
                        </div>
                     </div>
                     <div className="experience-content">
                        <div className="experience-date">
                           <h4>2015 - 2019</h4>
                        </div>
                        <div className="experience-details">
                           <h4>Company D</h4>
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius reprehenderit molestiae animi itaque quasi suscipit voluptatum earum. Ullam, impedit. Magnam!</p>
                        </div>
                     </div>
                  </section>
      </>
   )
}

