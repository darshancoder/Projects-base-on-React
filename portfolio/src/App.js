import './App.css';
import {Flex, VStack,Heading, IconButton, useColorMode, Spacer} from "@chakra-ui/react";
import {FaSun,FaMoon,FaInstagram,FaGithub,FaLinkedin} from "react-icons/fa"
import { Header } from './Components/Header';
import { Social } from './Components/Social';
import { Profile } from './Components/Profile';
function App() {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
      <Heading ml="8" size="md" fontWeight="semibold" color="cyan.500">I am Rich</Heading>
      <Spacer></Spacer>
      <IconButton ml={2} icon={<FaInstagram/>} isRound="true" onClick={toggleColorMode} ></IconButton>
      <IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={toggleColorMode} ></IconButton>
      <IconButton ml={2} icon={<FaLinkedin/>} isRound="true" onClick={toggleColorMode} ></IconButton>
      <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header/>
      <Social/>
      <Profile/>
      
    </VStack>
  );
}

export default App;
