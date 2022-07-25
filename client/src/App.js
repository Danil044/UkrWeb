import './css/App.css';
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";

const App = observer(() =>{
  return(
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
  )
})

export default App;
