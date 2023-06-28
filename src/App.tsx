import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Names } from "./Pages/Names"
import { Jobs } from "./Pages/Jobs"
import { PageNotFound } from "./Pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/names" element={<Names />} />
      <Route path="/jobs/:name" element={<Jobs />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
