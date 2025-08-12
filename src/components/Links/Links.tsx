import { socials } from '@/utils/constants/socials'

export default function Links() {
  return (
    <section id="links" className="min-h-screen px-4 py-20 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="retro-box p-6 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black">CONNECT</h2>
        </div>
        
        <div className="retro-box p-12 text-center">
          <p className="text-lg font-bold mb-12">
            [JOIN THE REVOLUTION]
          </p>
          
          <p className="text-sm mb-12 leading-relaxed">
            Be part of the movement. Follow our journey as we build the future of web3, 
            one project at a time. Join our community of builders, innovators, and dreamers.
          </p>
          
          <div className="flex justify-center items-center gap-8">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="retro-button px-8 py-6 text-center">
                  <div className="text-2xl mb-2">
                    {social.label === 'Github' ? '💻' : '🌐'}
                  </div>
                  <div className="text-xs font-bold">
                    {social.label?.toUpperCase()}
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t-4 border-double border-white">
            <p className="text-xs">
              © 2025 2BB TEAM. WE BE BUILDIN.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}