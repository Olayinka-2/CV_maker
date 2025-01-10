import Header from "./components/header";
import CvForm from "./components/cvForm";
import Cv from "./components/CV";
import { useState } from "react";

function App() {
  const [formContactData, setFormContactData] = useState({
    name: "",
    email: "",
    telephone: "",
    github: "",
    linkedIn: "",
  });

  const [formEducationData, setFormEducationData] = useState([
    {
    institutionName: "",
    institutionCourse: "",
    institutionDateFrom: "",
    institutionDateTo: ""
  }
]);

  const [formExperienceData, setFormExperienceData] = useState([
    {
      companyName: "",
      titleHeld: "",
      responsibility: "",
      companyDateFrom: "",
      companyDateTo: ""
    }
  ]);

    return (
      <>
        <Header />
        <CvForm formContactData={formContactData} setFormContactData = {setFormContactData} formEducationData = {formEducationData} setFormEducationData = {setFormEducationData} formExperienceData = {formExperienceData} setFormExperienceData = {setFormExperienceData}/>
        <Cv formContactData={formContactData} formEducationData={formEducationData} formExperienceData = {formExperienceData}/>
      </>
    )
}

export default App;
