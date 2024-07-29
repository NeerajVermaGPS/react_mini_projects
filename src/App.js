import React, { useState } from 'react'
import ProjectJSON from './files/projects.json'
import ProjectCard from './components/ProjectCard';
import PortalsD from './components/PortalsD';
import TicTacToe from './Tic-Tac-Toe/Index';
import './App.css';
import './files/style.css'
import { useProjectLoad } from './hooks/useProjectLoad';

function App() {
  const result = ProjectJSON.map(({link}) => link)
  const [pName, setPName] = useState("")
  const [element] = useProjectLoad(pName)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
    console.log("Modal Open is: ", isModalOpen)
  }
  
  const viewProject = (pname) => {
    setPName(result[pname])
    handleModal()
  }

  return (
    <div className="App center full-hw column" style={{background: "#ffab00", justifyContent: "start", padding: "20px"}}>
      <h1 style={{margin: "20px", fontFamily: "Alexandria", textAlign: "center"}}>React Mini Projects Showcase</h1>
      {isModalOpen ? <PortalsD handleClose={handleModal}>{/* <TicTacToe /> */}  {element}</PortalsD> : ""}
      <div className='center full-w' style={{flexWrap: "wrap"}}>
        {
          ProjectJSON.map(project => <ProjectCard key={project.id} projectViewer={viewProject} projectPayload={project} />)
        }
      </div>
      <div class="copyright" style={{color: "#828282", fontFamily: "Alexandria"}}>© Neeraj Verma 2024</div>
    </div>
  )
}

export default App;
