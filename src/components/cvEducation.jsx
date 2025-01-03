// export default function Education({educationInfo}) {
//    let  dateFrom = new Date(educationInfo["institutionDateFrom"]).getFullYear();
//    let dateTo = new Date(educationInfo["institutionDateTo"]).getFullYear();
   
//    if(isNaN(dateFrom)) {
//       dateFrom = '2015'
//    } 
//    if(isNaN(dateTo)) {
//       dateTo = '2020'
//    }
//    if(educationInfo["institutionCourse"] == "") {
//       educationInfo["institutionCourse"] = 'Computer Science'
//    }
//    if(educationInfo["institutionName"] == "") {
//       educationInfo["institutionName"] = 'MIT'
//    }

//    return(
//       <>
//          <section className="education-section">
//                      <h3>Education</h3>
//                      <div className="education-content">
//                         <div className="education-date"> 
//                            <h4>{`${dateFrom} - ${dateTo}`}</h4>
//                         </div>
//                         <div className="education-details">
//                            <h4>{educationInfo["institutionName"]}</h4>
//                            <p>{educationInfo["institutionCourse"]}</p>
//                         </div>
//                      </div>
//                      <div className="education-content">
//                         <div className="education-date">
//                            <h4>2015 - 2019</h4>
//                         </div>
//                         <div className="education-details">
//                            <h4>Company D</h4>
//                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius reprehenderit molestiae animi itaque quasi suscipit voluptatum earum. Ullam, impedit. Magnam!</p>
//                         </div>
//                      </div>
//                      <div className="education-content">
//                         <div className="education-date">
//                            <h4>2015 - 2019</h4>
//                         </div>
//                         <div className="education-details">
//                            <h4>Company D</h4>
//                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius reprehenderit molestiae animi itaque quasi suscipit voluptatum earum. Ullam, impedit. Magnam!</p>
//                         </div>
//                      </div>
//                   </section>
//       </>
//    )
// }

export default function Education({educationInfo}) {
   return (
      <>
         <section className="education-section">
            <h3>Education</h3>
            {educationInfo.map((info, index) => {
                  let dateFrom = new Date(info.institutionDateFrom).getFullYear();
                  let dateTo = new Date(info.institutionDateTo).getFullYear();

                  dateFrom = isNaN(dateFrom) ? '2015' : dateFrom;
                  dateTo = isNaN(dateTo) ? '2020' : dateTo;
                  const institutionName = info.institutionName || 'MIT';
                  const institutionCourse = info.institutionCourse || 'Computer Science';

                  return (
                     <div className="education-content" key={index}>
                        <div className="education-date">
                           <h4>{`${dateFrom} - ${dateTo}`}</h4>
                        </div>
                        <div className="education-details">
                           <h4>{institutionName}</h4>
                           <p>{institutionCourse}</p>
                        </div>
                     </div>
                  );
               })}
         </section>
      </>
   )
}
