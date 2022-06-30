import PessoasTable from "./pages/mainPage/PessoasTable"
import SetoresTable from "./pages/mainPage/SetoresTable"
import FeedbacksTable from "./pages/mainPage/FeedbacksTable"

function App() {
  return (
    <>
    <h1>Sistema de feedback de alunos</h1>
    <h2>Pessoas Registradas</h2>
    <PessoasTable></PessoasTable>
    <h2>Setores Registrados</h2>
    <SetoresTable></SetoresTable>
    <h2>Feedbacks Registrados</h2>
    <FeedbacksTable></FeedbacksTable>
    </>
  )
}

export default App
