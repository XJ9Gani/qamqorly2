import NavBar from './navbar'

const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-[3px] shadow-xs fixed top-0 left-0 px-20 h-20 flex justify-between items-center w-full z-50">
      <h1 className="text-[#D0A144] text-2xl">Qamqorly</h1>
      <NavBar />
    </header>
  )
}

export default Header
