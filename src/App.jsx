import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Popular from "./components/Popular"
import Special from "./components/Special"
import Super from "./components/Super"
import Castomer from "./components/Castomer"
import Hero from "./components/Hero"
import Subscribe from "./components/Subscribe"
import Service from "./components/Service"

const App = () => (
  <main className="relative">
      <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-x padding-y">
      <Hero />
    </section>
    <section className="padding-x py-10">
      <Popular />
    </section>
    <section className="padding-x padding-y">
      <Super />
    </section>
    <section className="padding-x padding-y">
      <Service />
    </section>
    <section className="padding-x padding-y">
      <Special />
    </section>
    <section className="bg-pale-blue padding">
      <Castomer/>
    </section>
    <section className="paffing-x sm:py-32 py-16 w-full padding-x padding-y">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App