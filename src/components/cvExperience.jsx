export default function Experience({experienceInfo}) {
   return (
      <>

         <section className="experience-section">
            <h3>Experience</h3>
            {
               experienceInfo.map((info, index) => {
                  let  dateFrom = new Date(info.companyDateFrom).getFullYear();
                  let dateTo = new Date(info.companyDateTo).getFullYear();

                  dateFrom = isNaN(dateFrom) ? '2015' : dateFrom;
                  dateTo = isNaN(dateTo) ? '2020' : dateTo;
                  const companyName = info.companyName || 'Silicon Valley';
                  const responsibility = info.responsibility || 'Frontend Developers are responsible for designing and developing user interfaces for web and mobile applications. They translate UI/UX designs into high-quality, responsive code, ensuring cross-browser compatibility and perform';
                  return (
                     <div className="experience-content" key={index}>
                        <div className="experience-date">
                           <h4>{`${dateFrom} -  ${dateTo}`}</h4>
                        </div>
                        <div className="experience-details">
                           <h4>{`${companyName}`}</h4>
                           <p>{`${responsibility}`}</p>
                        </div>
                     </div>
                  )
               })
            }
         </section>
      </>
   )
}

