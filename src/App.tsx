import { CartProvider } from "./context/CartContext"
import { CartDrawer } from "./components/CartDrawer"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Packages } from "./components/Packages"
import { Products } from "./components/Products"
import { QuoteForm } from "./components/QuoteForm"
import { Services } from "./components/Services"
import { Stats } from "./components/Stats"

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Services />
        <Packages />
        <QuoteForm />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}

export default App
