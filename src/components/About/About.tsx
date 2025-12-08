export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl mx-auto w-full space-y-8">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-6">2BB</h1>
          <div className="inline-block bg-neo-lime text-neo-black px-6 py-3 text-xl md:text-2xl font-black border-4 border-neo-black shadow-brutal">
            WE BE BUILDIN
          </div>
        </div>

        <div className="brutal-box p-8 md:p-10 hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#000000] transition-all duration-150">
          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              It started the way most good things do—strangers at a hackathon, too stubborn to sleep, too excited to stop. That weekend became a team. That team became 2BB.
            </p>

            <p>
              We build for web3 because we've seen this movie before. Every paradigm shift looks crazy until it doesn't. Horse carriages were a trillion-dollar industry once.
            </p>

            <p className="font-bold text-xl">
              We're here to build the things people will take for granted in ten years.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}