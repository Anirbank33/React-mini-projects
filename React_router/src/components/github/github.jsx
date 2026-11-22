import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData()
    
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
            <div className="rounded-full border-4 border-white/20 p-2 shadow-xl ring-1 ring-white/10">
              <img
                className="rounded-full object-cover w-48 h-48 aspect-square"
                src={data.avatar_url}
                alt="GitHub profile"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">
                GitHub Profile
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {data.name || data.login}
              </h1>
              <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 shadow-lg">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                <span className="text-lg text-slate-200">
                  <strong className="text-white">{data.followers}</strong> GitHub followers
                </span>
              </div>
              {data.bio && (
                <p className="mt-5 max-w-md text-base leading-7 text-slate-300">
                  {data.bio}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Anirbank33')
  return response.json()
}