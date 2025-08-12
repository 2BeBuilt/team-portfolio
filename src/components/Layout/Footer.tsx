export default function Footer() {
  return (
    <footer className="bg-neo-black text-neo-white border-t-4 border-neo-yellow">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-neo-yellow">2BB</span>
              <span className="text-sm text-neo-lime font-bold">[WE BE BUILDIN]</span>
            </div>
            <p className="text-xs mt-2 opacity-75">© {new Date().getFullYear()} — Built with passion</p>
          </div>
          
          <div className="text-xs font-bold text-neo-yellow">
            degen@2bb.dev
          </div>
        </div>
      </div>
    </footer>
  )
}