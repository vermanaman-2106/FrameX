import ProjectCard from '../components/ProjectCard.jsx'

function Portfolio() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          Portfolio
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Our work.
        </h1>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          We partner with teams to design, build, and grow digital systems that feel
          premium and perform against clear business metrics. Here&apos;s a look at a
          representative project.
        </p>
      </section>


   
{
  /* Added: portfolio projects section */
}
<section className="mt-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-6">Website Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <a
        href="https://interior-project-phi.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 border rounded-lg hover:shadow-lg transition"
      >
        <h3 className="text-lg font-medium">Interior Designer.</h3>
        <p className="text-sm text-gray-500">interior-project-phi.vercel.app</p>
      </a>

      <a
        href="https://gym-five-rho.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 border rounded-lg hover:shadow-lg transition"
      >
        <h3 className="text-lg font-medium">Gym.</h3>
        <p className="text-sm text-gray-500">gym-five-rho.vercel.app</p>
      </a>

      <a
        href="https://effervescent-empanada-42323d.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 border rounded-lg hover:shadow-lg transition"
      >
        <h3 className="text-lg font-medium">Engineer's and Builders.</h3>
        <p className="text-sm text-gray-500">effervescent-empanada-42323d.netlify.app</p>
      </a>

      <a
        href="https://bakery-cafe-project.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 border rounded-lg hover:shadow-lg transition"
      >
        <h3 className="text-lg font-medium">Bakery & Cafe.</h3>
        <p className="text-sm text-gray-500">bakery-cafe-project.vercel.app</p>
      </a>

      <a
        href="https://maa-s-production.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 border rounded-lg hover:shadow-lg transition"
      >
        <h3 className="text-lg font-medium">Maa's Production.</h3>
        <p className="text-sm text-gray-500">maa-s-production.vercel.app</p>
      </a>
    </div>
  </div>
</section>

      
    </div>
  )
}

export default Portfolio

