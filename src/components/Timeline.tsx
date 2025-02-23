import { Chrono } from "react-chrono";
import { VStack, Text, useMediaQuery } from "@chakra-ui/react";

const TIMELINE_EVENTS = [
    {
        title: "December 2024",
        cardTitle: "o3",
        url: "https://arcprize.org/blog/oai-o3-pub-breakthrough",
        cardSubtitle: "OpenAI's o3 model scored 75.7% on the ARC-AGI-1 test, reaching 87.5% with additional computing power. While it still has limitations with basic tasks, it represents significant progress in AI capabilities.",
        cardDetailedText: ``
    },
    {
        title: "September 2024",
        cardTitle: "o1",
        url: "https://openai.com/o1/",
        cardSubtitle: "OpenAI's o1 model introduces a significant shift in compute allocation, focusing on inference rather than pretraining. This approach enhances complex reasoning abilities but increases response time and costs. o1 utilizes chain-of-thought (CoT) processing, generating additional tokens for step-by-step reasoning.", 
        cardDetailedText: ``
    },
    {
        title: "May 2024",
        cardTitle: "GPT-4o",
        url: "https://openai.com/index/hello-gpt-4o/",
        cardSubtitle: "GPT-4o is a multimodal AI model that processes and generates text, audio, and images in real-time. It features improved multilingual understanding and visual analysis capabilities.",
        cardDetailedText: ``
    },
    {
        title: "November 2022",
        cardTitle: "ChatGPT",
        url: "https://chat.openai.com/",
        cardSubtitle: "ChatGPT is a language model optimized for dialogue, trained using human feedback to improve response quality and helpfulness.",
        cardDetailedText: ``
    },
    {
        title: "January 2021",
        cardTitle: "DALL·E",
        url: "https://labs.openai.com/",
        cardSubtitle: "DALL·E generates images from text descriptions, capable of rendering various subjects including objects, scenes, people, and artistic styles.",
        cardDetailedText: ``
    },
    {
        title: "June 2020",
        cardTitle: "GPT-3",
        cardSubtitle: "GPT-3, with 175 billion parameters, demonstrated strong capabilities in text generation, coding, and article writing. It established new benchmarks for large language models.",
        cardDetailedText: ``
    },
    {
        title: "June 2017",
        cardTitle: "Transformers",
        url: "https://arxiv.org/abs/1706.03762/",
        cardSubtitle: "The Transformer architecture, introduced in the 'Attention Is All You Need' paper, enabled more efficient training of large-scale AI models.",
    },
    {
        title: "March 2016",
        cardTitle: "AlphaGo",
        url: "https://www.deepmind.com/research/highlighted-research/alphago",
        cardSubtitle: "AlphaGo defeated Go champion Lee Sedol. Its successor AlphaZero learned chess, shogi, and Go through self-play, surpassing existing computer programs.",
    },
    {
        title: "September 2012",
        cardTitle: "AlexNet",
        url: "https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
        cardSubtitle: "AlexNet demonstrated significant improvements in computer vision accuracy, leading to widespread adoption of deep learning in image recognition tasks.",
    },
]

export const Timeline = () => {
    const [isWidthLargerThanMd] = useMediaQuery("(min-width: 768px)");

    const EVENTS = !isWidthLargerThanMd ?
        TIMELINE_EVENTS.map((event) => {
            return { ...event, title: "", cardTitle: event.cardTitle + `, ${event.title}` }
        }) : TIMELINE_EVENTS

    return (
        <VStack style={{ width: "100%" }}>
            <Text>It's coming...</Text>
            <Chrono
                items={EVENTS}
                mode={isWidthLargerThanMd ? "VERTICAL_ALTERNATING" : "VERTICAL"}
                cardPositionHorizontal={"TOP"}
                activeItemIndex={-1}
                hideControls
                allowDynamicUpdate
                theme={{
                    titleColor: "#3182CE",
                    primary: "#3182CE"
                }}
                classNames={{
                    card: "timeline-card",
                    cardTitle: "timeline-card-title",
                    cardSubTitle: "timeline-card-subtitle"
                }}
            />
            <style>{`
                .timeline-card-title {
                    color: #3182CE !important;
                }
                .timeline-card-subtitle {
                    color: #000000 !important;
                }
                .timeline-card:active,
                .timeline-card:focus {
                    background: none !important;
                    box-shadow: none !important;
                    transform: none !important;
                }
                .timeline-title:active,
                .timeline-title:focus,
                .timeline-title:hover {
                    background: none !important;
                    color: #3182CE !important;
                }
            `}</style>
        </VStack>
    )
}