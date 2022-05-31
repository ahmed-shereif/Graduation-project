
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap'
import HomeScreens from "./screens/HomeScreens";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main  >
          <Container className="my-4">
            <Routes>
              <Route path="/" element={<HomeScreens />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/"  >
                <Route index element={<CartScreen />} />
                <Route path=":id" element={<CartScreen />} />
              </Route>
              <Route path="/Login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>,

    </>
  );
}

export default App;
