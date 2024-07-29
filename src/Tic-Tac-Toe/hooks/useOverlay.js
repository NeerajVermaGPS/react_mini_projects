import Overlay from "../pages/Overlay"
import overlayStyle from '../files/overlayStyles.module.css'
import { useState } from "react";

export const useOverlay = () => {
    const [overlayState, setOverlayState] = useState({
        overlay_mode: "",
        winner: "",
        other_args: ["", "", ""]
    })
  switch(overlayState.overlay_mode) {
    case "resetGame":
        return [<Overlay message="Are you sure to reset the game?">
                    <div className={`${overlayStyle.btn_ctnr} center row full-w`}>
                        <button className={`${overlayStyle.primary_btn} ${overlayStyle.danger}`} onClick={()=>{overlayState.other_args[0](false)}}>Yes</button>
                        <button className={`${overlayStyle.primary_btn}`} onClick={()=>{setOverlayState("")}}>No</button>
                    </div>
               </Overlay>, setOverlayState];
    case "exitGame":
        return [<Overlay message="Are you sure to exit the game? It will reset all the settings and scores of current game.">
                    <div className={`${overlayStyle.btn_ctnr} center row full-w`}>
                        <button className={`${overlayStyle.primary_btn} ${overlayStyle.danger}`} onClick={()=>{overlayState.other_args[1](false)}}>Yes</button>
                        <button className={`${overlayStyle.primary_btn}`} onClick={()=>{setOverlayState("")}}>No</button>
                    </div>
               </Overlay>, setOverlayState];
    case "wonGame":
        return [<Overlay message={`Hurray ${overlayState.winner} won the game!`}>
                    <div className={`${overlayStyle.score_div} full-w`}>
                        <div className={`full-w center`}>Current Scores:</div> 
                        <div className="full-w center" style={{justifyContent: "space-between"}}>
                            <div className={`${overlayStyle.scores} column center`} style={{background: overlayState.other_args[2].user1.bgColor, color: overlayState.other_args[2].user1.color}}>
                                <span>{overlayState.other_args[2].user1.name}</span>
                                <span style={{fontSize: "30px", fontWeight: "bold"}}>{overlayState.other_args[2].user1.score}</span>
                            </div>
                            <div className={`${overlayStyle.scores} column center`} style={{background: overlayState.other_args[2].user2.bgColor, color: overlayState.other_args[2].user2.color}}>
                                <span>{overlayState.other_args[2].user2.name}</span>
                                <span style={{fontSize: "30px", fontWeight: "bold"}}>{overlayState.other_args[2].user2.score}</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${overlayStyle.btn_ctnr} center row full-w`}>
                        <button className={`${overlayStyle.primary_btn}`} onClick={()=>{overlayState.other_args[0](false)}}>Play Again</button>
                        <button className={`${overlayStyle.primary_btn} ${overlayStyle.danger}`} onClick={overlayState.other_args[1]}>Exit Game</button>
                    </div>
               </Overlay>, setOverlayState];
    case "gameOver":
        return [<Overlay message={`Great moves both sides... Game Over!`}>
                    <div className={`${overlayStyle.score_div} full-w`}>
                    <div className={`full-w center`}>Current Scores:</div> 
                        <div className="full-w center" style={{justifyContent: "space-between"}}>
                            <div className={`${overlayStyle.scores} column center`} style={{background: overlayState.other_args[2].user1.bgColor, color: overlayState.other_args[2].user1.color}}>
                                <span>{overlayState.other_args[2].user1.name}</span>
                                <span style={{fontSize: "30px", fontWeight: "bold"}}>{overlayState.other_args[2].user1.score}</span>
                            </div>
                            <div className={`${overlayStyle.scores} column center`} style={{background: overlayState.other_args[2].user2.bgColor, color: overlayState.other_args[2].user2.color}}>
                                <span>{overlayState.other_args[2].user2.name}</span>
                                <span style={{fontSize: "30px", fontWeight: "bold"}}>{overlayState.other_args[2].user2.score}</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${overlayStyle.btn_ctnr} center row full-w`}>
                        <button className={`${overlayStyle.primary_btn}`} onClick={()=>{overlayState.other_args[0](false)}}>Play Again</button>
                        <button className={`${overlayStyle.primary_btn} ${overlayStyle.danger}`} onClick={overlayState.other_args[1]}>Exit Game</button>
                    </div>
               </Overlay>, setOverlayState];
    default:
        return ["", setOverlayState];
  }
}
