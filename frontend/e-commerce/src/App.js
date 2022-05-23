
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap'
import HomeScreens from "./screens/HomeScreens";

function App() {
  return (
    <>
      <Header />

      <main className="my-4">
        <Container>
          <HomeScreens />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
