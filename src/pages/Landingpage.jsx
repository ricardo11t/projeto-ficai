import Header from '../components/Header'
import Footer from '../components/Footer'
import MainLP from '../components/MainLP'

const Landingpage = () => {
  return (
    <>
      <Header />
      <main>
        <section><img src="../img/imagembg.png" alt="" /></section>
        <MainLP />
      </main>
      <Footer />
    </>
  )
}

export default Landingpage