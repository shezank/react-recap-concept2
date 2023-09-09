
import './App.css'
import Friends from './Friends'
import Users from './Users'
import Adding from './component'

function App() {

  
   

  

  function handelerClick(){
    alert('Click ok')
  }

  const handelclick2 = ()=>{
    alert('Click Button 2 Ok')
  }

  const handeleSum= (num) =>{
    alert(num + 2);
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Adding></Adding>
      <button onClick={handelerClick}>CLick</button>
      <button onClick={handelclick2}>CLick2</button>
      <button onClick={function (){alert('Click 3 ok')}}>CLick3</button>
      <button onClick={()=> alert('Click 4 Ok')}>CLick4</button>
      <button onClick={()=> handeleSum(5)}>CLick Sum</button>
      
    </>
  )
}

export default App
