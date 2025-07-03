export default function About() {
  return (
    <main>
      <h1 className="text-3xl mb-6">About</h1>

      <div className="space-y-4 text-sm leading-6">
        <p>
          I&apos;m a fourth-year Computer Engineering student at ABESEC with
          hands-on experience in full-stack web development. I love building
          scalable applications using modern technologies like NextJs, React.js and PostgresSQL.
        </p>

        <p>
          Beyond coding, I enjoy reading books, like to play chess, history buff
          and part time biohacker.
        </p>

        <h2 className="text-xl mt-8 mb-4">Experience</h2>

        <div className="mb-6">
          <h3 className="font-medium">
            Software Developer Intern at Zidio Technology
          </h3>
          <p className="text-gray-500 text-xs">April 2025 - June 2025</p>
          <p className="mt-1">
            Built responsive frontend components using React and Tailwind CSS.
            Contributed to backend APIs using Node.js and integrated MongoDB
            database.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-medium">
            Software Developer Intern at Codesoft Technology
          </h3>
          <p className="text-gray-500 text-xs">June 2025 - Present</p>
          <p className="mt-1">
            Designed and deployed client websites using HTML, CSS, JS, and
            WordPress.
          </p>
        </div>

        <h2 className="text-xl mt-8 mb-4">Feedback</h2>
        <p>Have feedback on my portfolio? send me an email!</p>
        <a
          href="mailto:mishra.anant10@gmail.com?subject=Portfolio Feedback"
          className="inline-block px-4 py-2 mb-4 text-sm font-medium border border-black rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
        >
          Send Feedback
        </a>
      </div>
    </main>
  );
}
