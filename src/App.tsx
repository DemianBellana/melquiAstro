import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ReelsSection from './components/ReelsSection'
import VideoWorkSection from './components/VideoWorkSection'
import PhotographySection from './components/PhotographySection'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SocialFloatingButtons from './components/SocialFloatingButtons'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ReelsSection />
        <VideoWorkSection />
        <PhotographySection />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <SocialFloatingButtons />
    </div>
  )
}

export default App
