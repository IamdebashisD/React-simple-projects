
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import AppContent from './AppContent'



function App() {

  return (
    <UserContextProvider>
      <h1>Context Api</h1>
      <AppContent/>
    </UserContextProvider>
  )
}

export default App
