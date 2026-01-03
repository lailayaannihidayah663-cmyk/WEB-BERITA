import { useState } from "react"
import Navbar from "./componen/Navbar"
import NewsArea from "./componen/NewsArea"


const App = () => {
  const [category,setCategory] = useState("general");
  return(
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsArea category={category}/>
    </div>
  )
}
export default App