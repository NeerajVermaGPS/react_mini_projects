import React from 'react'
import '../files/style.css'

const ProjectCard = (props) => {
  return (
            <div className="projectCardCont">
                <div className='projectCard center column full-w'>
                    <div className="projectImage full-w">
                        <img src={require(`../assets/project${props.projectPayload.id}.png`)} alt={props.projectPayload.name} className='full-w' />
                        <div className="projectId">#{props.projectPayload.id}</div>
                    </div>
                    <div className='projectDetail full-w'>
                        <h3 className='projectName full-w center'>{props.projectPayload.name}</h3>
                        <div className='projectDetailRow full-w center'>
                            <b>Status:</b>
                            <span className='projectStatus'>{props.projectPayload.status}</span>
                        </div>
                        <div className='projectDetailRow full-w column center'>
                            <b>Date of Completion:</b>
                            <span style={{color: "lightgray"}}>{props.projectPayload.date}</span>
                        </div>
                    </div>
                    <button onClick={() => props.projectViewer(props.projectPayload.id - 1)} className='projectExpand'>View Project</button>
                </div>
            </div>
  )
}

export default ProjectCard
