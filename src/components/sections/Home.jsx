function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
          Hi, I'm Anastasia Taucci
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Front-end developer building web and mobile applications with React
          and React Native, focused on tools that help people learn, stay
          organized, and improve everyday routines.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(147, 51, 234, 0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-purple-500/65 text-purple-400 py-3 px-6 rounded-lg font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(147, 51, 234, 0.2)]  hover:bg-purple-400/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
