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
