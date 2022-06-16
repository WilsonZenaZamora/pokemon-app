import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"

export const Navbar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
      alignItems: 'center',
      backgroundColor: theme?.colors.gray100.value,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      padding: '0px 20px',
      width: '100%'
    }}>
      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="App icon"
        width={70}
        height={70}
      />

      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okémon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }}/>

      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white" >Favorites</Text>
        </Link>
      </NextLink>
    </div>
  )
}
