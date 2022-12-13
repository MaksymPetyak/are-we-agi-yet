import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    VStack,
    theme,
    Divider,
    Link,
    HStack,
} from "@chakra-ui/react"
import {Timeline} from "./components/Timeline";
import {Footer} from "./components/Footer";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box maxW={"1024px"} margin={"32px auto"} padding={"8 8 0 8"}>
            <VStack minH="100vh">
                <VStack spacing={4}>
                    <VStack textAlign={"center"}>
                        <Text fontSize={"4xl"} as={"b"}>Are we AGI yet?</Text>
                        <Text fontSize={"5xl"} as={"b"}>Nope</Text>
                        <Text fontSize={"2xl"}>...but AI is getting scary good.</Text>
                    </VStack>
                    <VStack spacing={4} p={4}>
                        <HStack spacing={4} backgroundColor={"gray.100"}
                                padding={"16px 32px"} borderRadius={"md"}>
                            <Text>
                                <b>Artificial general intelligence</b> (AGI) is the
                                ability of an intelligent agent to understand or learn
                                any intellectual task that a human being can.
                                <br/>
                                <i>- From <Link color='teal.500'
                                                href={"https://en.wikipedia.org/wiki/Artificial_general_intelligence"}>Wikipedia</Link></i>
                            </Text>
                        </HStack>
                        <Text>It might be hard to know when we have actually reached
                            AGI, but one example would be when AI finds this website
                            funny and hacks it to change the content to say
                            "Yes".</Text>
                    </VStack>
                    <Timeline/>
                </VStack>
                <Divider paddingTop={"32px"}/>
                <Footer/>
            </VStack>
        </Box>
    </ChakraProvider>
)
