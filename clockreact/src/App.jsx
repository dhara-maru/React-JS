
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClockHeading from './components/clockHeading'
import ClockSlogan from './components/clockSlogan'
import CurrentTime from './components/currentTime'
function App() {
 
  return (
    <>
      
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </>
  )
}

export default App
