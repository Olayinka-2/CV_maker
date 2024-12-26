import Header from "./components/header";
import CvForm from "./components/cvForm";
import Cv from "./components/CV";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");


    return (
      <>
        <Header />
        <CvForm name={name} setName = {setName} />
        <Cv name={name}/>
      </>
    )
}

export default App;
