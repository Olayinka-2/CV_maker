import Header from "./components/header";
import CvForm from "./components/cvForm";
import Cv from "./components/CV";
import { useState } from "react";

function App() {
  const [formContactData, setFormContactData] = useState({
    name: "",
    email: "",
    telephone: ""
  });



    return (
      <>
        <Header />
        <CvForm formContactData={formContactData} setFormContactData = {setFormContactData} />
        <Cv formContactData={formContactData}/>
      </>
    )
}

export default App;
