
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap'
import HomeScreens from "./screens/HomeScreens";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main >
          <Container className="my-4">
            <Routes>
              <Route path="/" element={<HomeScreens />} />
              <Route path="/:product/:id" element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>,

    </>
  );
}

export default App;
