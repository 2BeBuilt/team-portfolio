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
              It started the way most good things do—strangers at a hackathon, too stubborn to sleep,
              too excited to stop. That weekend became a team. That team became 2BB.
            </p>

            <p>
              We build for web3 because we've seen this movie before. Every paradigm shift looks crazy
              until it doesn't. Horse carriages were a trillion-dollar industry once.
            </p>

            <p>
              We're here to build the things people will take for granted in ten years.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}