import ProjectJSON from '../files/projects.json'
import FormInReact from '../Form_in_React/Index';
import Jokes from '../Jokes/Index';
import TicTacToe from '../Tic-Tac-Toe/Index';

export const useProjectLoad = (projectName) => {
  let result = ProjectJSON.map(({ link }) => link)

  switch(projectName) {
      case result[0]:
          return [<FormInReact />, result]
      case result[1]:
          return [<Jokes />, result]
      case result[2]:
          return [<TicTacToe />, result]
      default:
          return ""
  }
}