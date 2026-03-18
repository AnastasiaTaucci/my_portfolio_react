function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    mb-8
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-600
                    bg-clip-text
                    text-transparent
                    text-center
                "
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project#1 FlashyMind */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">FlashyMind</h3>
            <p className="text-gray-400 mb-4">
              FlashyMind is a mobile flashcard application built with React
              Native and Expo. It allows users to create custom flashcard decks
              or explore pre-made flashcard sets to study and quiz themselves on
              various topics.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React Native", "Supabase", "Zustand", "Expo Router"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="
                                        bg-purple-500/20
                                        text-lime-400
                                        py-1
                                        px-2.5
                                        rounded-full
                                        text-sm
                                        hover:bg-purple-500/20
                                        border
                                        border-lime-500/20
                                        transition
                                    "
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/AnastasiaTaucci/FlashyMind"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project#2 Moovie Track */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Moovie Track</h3>
            <p className="text-gray-400 mb-4">
              Moovie Track is a simple movie tracking app that allows users to
              search, save, add notes, and rate movies. The app is built using
              React ,Firebase and Vite.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Firebase", "API"].map((tech, key) => (
                <span
                  key={key}
                  className="
                                        bg-purple-500/20
                                        text-lime-400
                                        py-1
                                        px-2.5
                                        rounded-full
                                        text-sm
                                        hover:bg-purple-500/20
                                        border
                                        border-lime-500/20
                                        transition
                                    "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://moovietrack.netlify.app/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project#3 Moovie Track */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Spanish Learning hub</h3>
            <p className="text-gray-400 mb-4">
              Spanish Learning Hub is a full-stack mobile app built with React
              Native (Expo), designed to help users track and manage learning
              resources such as grammar guides, vocabulary tools, YouTube
              channels, and more. This project was developed as part of a mobile
              app development course to practice building cross-platform apps
              with React Native, including fundamentals like routing, component
              design, data handling, and backend integration using Supabase,
              React Query, and AsyncStorage.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React Native", "Supabase", "Gluestack UI"].map((tech, key) => (
                <span
                  key={key}
                  className="
                                        bg-purple-500/20
                                        text-lime-400
                                        py-1
                                        px-2.5
                                        rounded-full
                                        text-sm
                                        hover:bg-purple-500/20
                                        border
                                        border-lime-500/20
                                        transition
                                    "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/AnastasiaTaucci/spanish_learning_hub"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
