import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>github followers: {data.followers}
    <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Anirbank33')
  return response.json()
}