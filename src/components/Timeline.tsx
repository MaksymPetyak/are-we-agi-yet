import {Chrono} from "react-chrono";
import {VStack, Text, Button, Link} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";


const TIMELINE_EVENTS = [
    {
        title: "November 2022",
        cardTitle: "ChatGPT",
        url: "https://chat.openai.com/",
        cardSubtitle: "ChatGPT is a large-scale language model optimised for" +
            " conversations. It was fine-tuned by asking human trainers to rank the" +
            " generated responses from the model. ChatGPT went completely viral;  to" +
            " see how good it is, just try it out yourself:",
        cardDetailedText: ``
    },
    {
        title: "January 2021",
        cardTitle: "DALL·E",
        url: "https://labs.openai.com/",
        cardSubtitle: "DALL·E model generates images from text. It can generate" +
            " and shows understanding of many concepts, objects, movies, famous" +
            " people, and styles.",
        cardDetailedText: ``
    },
    {
        title: "June 2020",
        cardTitle: "GPT-3",
        cardSubtitle: "GPT-3 is a large (175 billion parameters) language model trained" +
            " on hundrends of million of words to predict the next token. It showed" +
            " ability to generate code, write articles that would be" +
            " indistinguishable from human output, summarise text, and many others.",
        cardDetailedText: ``
    },
    {
        title: "June 2017",
        cardTitle: "Transformers",
        url: "https://arxiv.org/abs/1706.03762/",
        cardSubtitle: "Transformer architecture was introduced in the \"Attention Is" +
            " All You Paper Need\" paper. Transformer architecture has been key in" +
            " allowing to scale and efficiently train neural networks.",
    },
    {
        title: "March 2016",
        cardTitle: "AlphaGo",
        url: "https://www.deepmind.com/research/highlighted-research/alphago",
        cardSubtitle: "AlphaGo beat Go world champion Lee Sedol. Subsequently, AlphaZero learned to play chess, shogi, and Go," +
            " only through self-play and beat the best computer programs in each" +
            " game.\n",
    },
    {
        title: "September 2012",
        cardTitle: "AlexNet",
        url: "https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
        cardSubtitle: "AlexNet is a convolutional neural network that set" +
            " state-of-the-art performance on ImageNet sparking the deep learning" +
            " revolution.\n",
    },
]

export const Timeline = () => {

    return (
        <VStack>
            <Text>It's coming...</Text>
            <Chrono
                items={TIMELINE_EVENTS}
                mode="VERTICAL_ALTERNATING"
                activeItemIndex={-1}
                hideControls
            >
                <Link
                    href={"https://chat.openai.com/"}
                    style={{textDecoration: 'none'}}
                    isExternal
                >
                    <Button colorScheme='teal' size='sm'>
                        Try it &nbsp;
                        <FontAwesomeIcon size={"sm"} icon={faExternalLink}/>
                    </Button>
                </Link>
                <Link
                    href={"https://labs.openai.com/"}
                    style={{textDecoration: 'none'}}
                    isExternal
                >
                    <Button colorScheme='teal' size='sm'>
                        Try it &nbsp;
                        <FontAwesomeIcon size={"sm"} icon={faExternalLink}/>
                    </Button>
                </Link>
            </Chrono>
        </VStack>
    )
}