import { Provider } from "react-redux"
import { store } from "./store"
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercises from "./components/Exercises";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercises" element={<Exercises />}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
