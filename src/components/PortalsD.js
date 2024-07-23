import React from 'react'
import ReactDOM from "react-dom"

class PortalsD extends React.Component {
  render(){
    return ReactDOM.createPortal(
      <div className='ModalPortal'>
        <div id='modalCloseBtn' className='center' onClick={this.props.handleClose}>Close</div>
        {this.props.children}
      </div>, document.getElementById("portal-root"))
  }
}

export default PortalsD
