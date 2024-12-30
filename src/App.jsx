import Header from "./components/header";
import CvForm from "./components/cvForm";
import Cv from "./components/CV";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
  });



    return (
      <>
        <Header />
        <CvForm formData={formData} setFormData = {setFormData} />
        <Cv formData={formData}/>
      </>
    )
}

export default App;
