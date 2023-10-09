import Header from '@/components/header';
import Footer from '@/components/footer';
import About from '@/section/about';

export default function AboutMe() {
  return (
    <main className='font-sans flex flex-col h-screen'>
      <Header/>
      <article className='xl:mx-64 xl:my-10 mx-4 my-6 flex-1'>
        <About/>
      </article>
      <Footer/>
    </main>
  )
}
