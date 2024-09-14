import Services from "./components/servicePage/Services"
import Navbar from "./components/navbar/Navbar"
import Patients from "./components/patients/Patients"
import Aboutus from "./components/aboutus/Aboutus"
import Contact from "./components/contact/Contact"
import HomePage from "./components/homePage/HomePage"
function App() {

  return (
  <>
   {/* Navbar */}
   <Navbar />
   {/* children */}
<HomePage />
<Services />
<Patients />
<Aboutus />
<Contact />
  </>
    
  )
}

export default App
