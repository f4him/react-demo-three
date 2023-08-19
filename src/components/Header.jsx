import { HStack, Button } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (  <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>


<Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
        <Link to="/characters">Characters</Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
        <Link to="/locations">Locations</Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
        <Link to="/episodes">Episodes</Link>
    </Button>




  </HStack>  )
}

export default Header