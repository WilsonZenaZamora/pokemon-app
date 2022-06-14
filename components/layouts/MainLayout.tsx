import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui';

interface Props {
  children: React.ReactNode
  title?: string
}

export const MainLayout: FC <Props> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Wilson Zena"/>
        <meta name="description" content={`Information about the pokemon ${ title } `}/>
        <meta name="keywords" content={`${ title }, pokemon, pokedex`}/>
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>

    </>
  )
}
