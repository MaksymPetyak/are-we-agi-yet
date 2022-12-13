import {Flex, Link, VStack, Text} from "@chakra-ui/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
    return (
        <Flex>
            <VStack fontSize={"sm"}>
                <Text>
                    Built for no particular reason by &nbsp;
                    <Link color='teal.500'
                          href={"https://twitter.com/PetyakMi"}
                          isExternal>
                        Maksym Petyak
                    </Link>
                </Text>
                <Text>
                    Robot icons created by &nbsp;
                    <Link color='teal.500'
                          href={"https://www.flaticon.com/free-icons/robot"}
                    >
                        Freepik - Flaticon
                    </Link>
                </Text>
                <Link href={"http://github.com/MaksymPetyak"}
                      _hover={{color: 'teal.500'}} isExternal>
                    <FontAwesomeIcon
                        size={"2xl"}
                        icon={faGithub}
                        href={"http://github.com/MaksymPetyak"}
                    />
                </Link>
            </VStack>
        </Flex>
    )
}
