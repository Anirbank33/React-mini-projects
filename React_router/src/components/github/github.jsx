import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData()
    
  return (
    <section className="bg-white px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-10">
          <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-indigo-100/80 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-sky-100/80 blur-3xl" />

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="shrink-0 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 p-1.5 shadow-lg shadow-indigo-200">
              <img
                className="h-32 w-32 rounded-full border-4 border-white object-cover sm:h-40 sm:w-40"
                src={data.avatar_url}
                alt="GitHub profile"
              />
            </div>

            <div className="min-w-0 text-left">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
                Developer profile
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                {data.name || data.login}
              </h1>
              <p className="mt-1 text-sm font-medium text-slate-500">@{data.login}</p>
              <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2h12Zm-6-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-7v6m3-3h-6" />
                    <path d="M16 21v-2a4 4 0 0 0-2-3.46" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span className="text-sm text-slate-600">
                  <strong className="text-lg font-bold text-slate-950">{data.followers}</strong> followers
                </span>
              </div>
              {data.bio && (
                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
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