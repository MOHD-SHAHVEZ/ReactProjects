import UserCard from "./components/UserCard"
import "./App.css"
import good from "./assets/img1.jpg";
import veryGood from "./assets/img2.jpg";
import superb from "./assets/img3.jpg";

function App() {
  return (
    <>
    <div className="container">
    <UserCard name = "Mohd Shahvez" desc = "Desc-1" image = {good} style = {{"border-radius":"20px"}} />
    <UserCard name = "Shahvez Gaur" desc = "Desc-2" image = {veryGood} style = {{"border-radius":"20px"}} />
    <UserCard name = "Ma hu Don" desc = "Desc-3" image = {superb} style = {{"border-radius":"20px"}} />
    </div>
    </>
  )
}

export default App
