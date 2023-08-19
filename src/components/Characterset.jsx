import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {server} from '../index'
import { Container, HStack, Image , Box, Heading, Text,CardBody, CardHeader, CardFooter,Card,Stack,StackDivider} from '@chakra-ui/react';
import Loader from './Loader';
import "../assets/characterset.css"

const Characterset = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacters = async()=>{
      const data = await axios.get(`${server}/character`)
      console.log(data.data.results)
      setCharacters(data.data.results)
      setLoading(false)
      console.log(characters)
      
    }

    fetchCharacters();
  
    
  },[])
  


  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader/> : <>
      

      <HStack wrap={"wrap"}>

        {characters.map((i)=>(
          
          <Card m={8}>
            <CardHeader>
              
              <Text fontSize={'24px'}>{i.name}</Text>
                      <Text fontsize='sm'>{i.status}</Text>
            </CardHeader>

            <CardBody>
                      <Image className='cardimage' src={i.image} alt={i.name}></Image> 
                      <Box p={4}></Box>
                      <Text fontsize='sm'>Location: <a href={'locations/' +i.location.name}>   {i.location.name}</a></Text>
                      <Text fontsize='sm'>Species:  {i.species}</Text>
                      <Text fontsize='sm'>Gender:  {i.gender}</Text>
            </CardBody>
          </Card>

        ))}
      </HStack>
      
      
      </>}


    </Container>
  )
}

export default Characterset