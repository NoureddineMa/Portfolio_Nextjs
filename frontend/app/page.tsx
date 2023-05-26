import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/HeroSection/Hero'
import Services from '../components/Services/Services'
import Projects from '../components/Projects/Projects'
import Blogs from '../components/Blogs/Blog'
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Blogs />
      <Footer />
    </main>
  )
}
