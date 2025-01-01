
import {Login,Profile} from './components'
import UserContextProvider  from './context/UserContextProvider.jsx'

function App() {
  return (
    <UserContextProvider>
     <h1>Context api demo</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App