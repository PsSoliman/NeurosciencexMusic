"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  ChakraProvider,
  Heading,
  HStack,
  Card,
  CardBody,
  Divider,
  Box,
  AbsoluteCenter,
  VStack,
  Wrap,
  WrapItem,
  Img,
  Flex,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import YouTube from "react-youtube";
import React from "react";

interface VideoPlayerProps {
  videoName: string;
  videourl: string;
  desc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoName,
  videourl,
  desc,
}) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Card
      w="700px"
      h="550px"
      rounded={"sm"}
      my={5}
      mx={[0, 5]}
      overflow={"hidden"}
      bg="white"
      border={"1px"}
      borderColor="black"
      boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
    >
      <CardBody width={opts.width} boxSizing="border-box">
        <Box width="640" boxSizing="border-box">
          <YouTube videoId={videourl} opts={opts} />

          <VStack alignItems="start" spacing={2}>
            <Heading fontWeight="light" size="md" mt={"2%"}>
              {videoName}
            </Heading>
            <Divider borderColor={"black"} width="78%" />
            <Box width="640px">
              <Wrap>
                <WrapItem>
                  <Center fontWeight="light">{desc}</Center>
                </WrapItem>
              </Wrap>
            </Box>
          </VStack>
        </Box>
      </CardBody>
    </Card>
  );
};

export default function Home() {
  return (
    <ChakraProvider>
      <Heading w="100%" textAlign={"center"} fontWeight="light" mb="2%" mt="2%">
        Neuroscience x Music
      </Heading>
      <Box position="relative" mb="3%">
        <Divider borderColor={"blue.100"} />
        <AbsoluteCenter bg="white" px="4">
          Videos
        </AbsoluteCenter>
      </Box>
      <VStack justifyContent="center">
        <HStack spacing="2%" w="100%" justifyContent="center" mb={"1%"}>
          <VideoPlayer
            videoName="Top Down Processing"
            videourl="yRtn-puMgN4"
            desc="This video explores the concept of top down processing using rain and white noise."
          />
          <VideoPlayer
            videoName="Dynamic Range"
            videourl="69twNctWYuE"
            desc="This video explores the concept of dynamic range using compressors and a drum loop."
          />
        </HStack>
        <HStack spacing="2%" w="100%" justifyContent="center" mb={"1%"}>
          <VideoPlayer
            videoName="Compressors"
            videourl="c229mI8rrsM"
            desc="This video explores the role of the stapedius muscle of the inner ear."
          />
          <VideoPlayer
            videoName="Fourier Transformations"
            videourl="8yJcYIqKxiQ"
            desc="This video explores the concept of Fourier Transformations by modeling a bell with sin waves."
          />
        </HStack>
      </VStack>
    </ChakraProvider>
  );
}
