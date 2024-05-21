/* eslint-disable no-unused-vars */
import DataCard from "./Components/Cources/DataCard"
import CourseForms from "./Components/CourcesForm/CourseForms"
import Rubic from "./Components/CourseDetail/Rubic"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import { Routes,Route } from "react-router-dom"
import SubjectHome from "./SubjectPage/SubjectHome"
import CommingSoon from "./Components/CommingSoon/CommingSoon"
import CourseData from "./assets/CourcesData"

function App() {
   return (
    <div>
    <Navbar/>
    {

      <Routes>
      <Route index element={<DataCard/>}/>
      <Route path="/" element={<DataCard/>}/>
      <Route path="/forms/:Name" element={<CourseForms/>}/>
        {
          CourseData.map((item)=>{
           return <Route key={item.id} path={`/${item.Name}/:Name`} element={<SubjectHome/>}/>
          })
        }
      <Route path="/commingsoon" element={<CommingSoon/>}/>
      </Routes>
    }
   

  <Footer/>
  </div>
)
}

export default App
