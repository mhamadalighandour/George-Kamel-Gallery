import { Route, Routes } from "react-router-dom";
import { Navbar, Navbartwo, Section9 } from "./components/index";
import {
  Home,
  About,
  Events,
  News,
  NewsItem,
  Artists,
  MediaCenter,
  ContactUs,
  Exhibitions,
} from "./pages/index";

function App() {
  return (
    <div className="App px-3 m-auto w-100">
      <Navbar />
      <Navbartwo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Events" element={<Events />} />
        <Route path="News" element={<News />} />
        <Route path="News/:id" element={<NewsItem />} />
        <Route path="Our-Artist" element={<Artists />} />
        <Route path="Media-Center" element={<MediaCenter />} />
        <Route path="Contact-us" element={<ContactUs />} />
        <Route path="Exhibitions" element={<Exhibitions />} />
      </Routes>
      <Section9 />
    </div>
  );
}

export default App;
