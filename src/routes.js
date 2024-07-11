import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from './components/Rodape';
import Home from './pages/Home';
import NovoVideo from './pages/NovoVideo';
import NovoCardProvider from "./context/NovoCard";
import { useEffect, useState } from "react";

function AppRoutes() {


  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetch('https://667c8fc13c30891b865d037a.mockapi.io/my-commerce-jso-server/videos').then(resposta => resposta.json()).then(dados => {
      setVideos(dados)
    })
  }, [])

  return (
    <BrowserRouter>
      <NovoCardProvider>
        <Routes>
          <Route path='/' element={<Home data={videos}/>}></Route>
          <Route path='/create-video' element={<NovoVideo data={videos} />}></Route>
        </Routes>
      </NovoCardProvider>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
