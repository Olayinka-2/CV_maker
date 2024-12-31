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
    linkedIn: ""
  });

  const [formEducationData, setFormEducationData] = useState({
    institutionName: "",
    institutionCourse: "",
    institutionDateFrom: "",
    institutionDateTo: ""
  });



    return (
      <>
        <Header />
        <CvForm formContactData={formContactData} setFormContactData = {setFormContactData} formEducationData = {formEducationData} setFormEducationData = {setFormEducationData} />
        <Cv formContactData={formContactData} formEducationData={formEducationData}/>
      </>
    )
}

export default App;
