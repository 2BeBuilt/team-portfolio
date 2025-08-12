export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-4">2BB</h1>
          <div className="inline-block bg-neo-lime text-neo-black px-4 py-2 text-xl md:text-2xl font-black border-2 border-neo-black shadow-brutal-sm">
            WE BE BUILDIN
          </div>
        </div>
        
        <div className="brutal-box p-6 md:p-8 max-w-4xl mx-auto hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#000000] transition-all duration-150">
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              Our team's journey began unexpectedly at a hackathon, where a diverse group of individuals 
              with a shared passion for changing the world came together. Fueled by our collective desire 
              to make a difference, we are driven to create groundbreaking projects that will serve as the 
              driving force behind the future of the web3 space.
            </p>
            
            <p>
              While the web3 and blockchain industry is still relatively young, we firmly believe in its 
              immense potential for growth and transformation. Reflecting on history, it is fascinating to 
              consider that just a century ago, the idea of horse-keeping as a thriving business seemed 
              unassailable. Yet today, cars have become an integral part of our lives, altering our 
              perception of transportation completely.
            </p>
            
            <p>
              In this era of unprecedented technological advancement, the potential of blockchain is truly 
              awe-inspiring. As the 2BB team, we aspire to be an integral part of shaping this remarkable 
              web3 future. Our mission is not only to contribute to its evolution but also to create a 
              future that is as beautiful as it is groundbreaking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}