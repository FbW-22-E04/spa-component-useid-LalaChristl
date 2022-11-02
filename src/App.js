import "./App.css";
import InputForm from "./InputForm";

function App() {

const labelIds = 
  {

   firstName: 'First Name',
   lastName: 'Last Name',
   email: 'Email'
   

}

const typeIds = {
  text: 'text',
  email: 'email',
}

  return (
    <div className="App">
        <InputForm type={typeIds} label={labelIds}/>
    </div>
  );
}

export default App;
