import Head from 'next/head'
import { getOptionsForVote } from '../utils/getRandomPokemon'
import { trpc } from '../utils/trpc'

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'client' })
  if (!hello.data) {
    return <div>Loading...</div>
  }

  const [first, second] = getOptionsForVote()

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <Head>
        <title>Roundest Pokemon</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='text-center text-2xl '>Which Pokemon is rounder?</div>
      <div className='p-4'></div>
      <div className='border rounded-3xl p-8 flex justify-between items-center'>
        <div className='w-16 h-16 m-4 bg-blue-800'>{first}</div>
        <div className='p-8'>VS</div>
        <div className='w-16 h-16 m-4 bg-blue-800'>{second}</div>
      </div>
      <div>
        <p>{hello.data.greeting}</p>
      </div>
    </div>
  )
}
