function About() {
  const frontendSkills = [
    "React",
    "React Native",
    "Expo",
    "CSS",
    "JavaScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Firebase", "Supabase", "SQL", "MVP"];

  return (
    <section
      id="about"
      className="
            min-h-screen 
            flex
            justify-center
            items-center
            py-24 
        "
    >
      <div
        className="
                    max-w-3xl 
                    mx-auto 
                    px-4
                    space-y-8
                "
      >
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
          About Me
        </h2>

        <div
          className="
                    rounded-xl 
                    p-8 
                    border-white/10 
                    border 
                    hover:-translate-y-1
                    transition
                "
        >
          <p
            className="
                        text-gray-300
                        max-w-2xl
                        text-center
                        mx-auto
                        mb-6    
                        leading-relaxed
                    "
          >
            Software developer with a background in healthcare and biochemistry,
            building web and mobile applications using JavaScript, React, and
            React Native. After six years working in the healthcare industry, I
            transitioned into software development and graduated from Bellevue
            College with a degree in Software Development. My work focuses on
            creating practical tools that help people learn and stay organized,
            including applications for flashcard-based learning, movie tracking,
            and managing Spanish learning resources. I enjoy collaborating with
            others and continuously learning new technologies to build better
            solutions.
          </p>

          <div
            className="
                        grid 
                        grid-cols-1
                        md:grid-cols-2
                        gap-12
                    "
          >
            {/* FrontEnd skills list */}
            <div
              className="
                            rounded-xl 
                            p-6 
                            hover:-translate-y-1 
                            transition
                        "
            >
              <h3
                className="
                                text-xl 
                                font-bold 
                                mb-4
                            "
              >
                Frontend
              </h3>
              <div
                className="
                                flex
                                flex-wrap
                                gap-2
                            "
              >
                {frontendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="
                                        bg-purple-500/10
                                        text-purple-300
                                        py-1
                                        px-2.5
                                        rounded-full
                                        text-sm
                                        hover:bg-purple-500/20
                                        border
                                        border-purple-500/20
                                        transition
                                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* BackEnd skills list */}
            <div
              className="
                            rounded-xl 
                            p-6 
                            hover:-translate-y-1 
                            transition
                        "
            >
              <h3
                className="
                                text-xl 
                                font-bold 
                                mb-4
                            "
              >
                Backend
              </h3>
              <div
                className="
                                flex
                                flex-wrap
                                gap-2
                            "
              >
                {backendSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="
                                        bg-purple-500/10
                                        text-purple-300
                                        py-1
                                        px-2.5
                                        rounded-full
                                        text-sm
                                        hover:bg-purple-500/20
                                        border
                                        border-purple-500/20
                                        transition
                                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      <div
        className="
                    p-6
                    rounded-xl
                    border-white/10
                    border
                    hover:-translate-y-1
                    transition
                "
      >
        <h3
          className="
                        text-xl 
                        font-bold 
                        mb-4
                    "
        >
          Education
        </h3>

        <ul
          className="
                        list-disc 
                        list-inside 
                        text-gray-300 
                        space-y-2   
                    "
        >
          <li>
            <strong> AAS in Software Development </strong> - Bellevue College
            (2024-2025)
          </li>
          <li>
            Relevant Coursework: SQL, Web Development, Mobile Development...
          </li>
        </ul>
      </div>
      </div>
    </section>
  );
}

export default About;
