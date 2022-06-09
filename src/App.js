import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { 
	Flex,
	Text,
  	Image,
  	ChakraProvider,
} from "@chakra-ui/react";
import "./App.scss";
import "./mdi/css/materialdesignicons.css";
import amt from "./amt.png";
import vid1 from "./vid1.mp4";
import vid2 from "./vid2.mp4";
import vid3 from "./vid3.mp4";
import vid4 from "./vid4.mp4";
import vid5 from "./vid5.mp4";
import vid6 from "./vid6.mp4";
import vid7 from "./vid7.mp4";
import vid8 from "./vid8.mp4";
import vid9 from "./vid9.mp4";
import vid10 from "./vid10.mp4";
import vid11 from "./vid11.mp4";
import vid12 from "./vid12.mp4";
import vid13 from "./vid13.mp4";
import vid14 from "./vid14.mp4";
import vid15 from "./vid15.mp4";
import vid16 from "./vid16.mp4";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img1mob from "./img1mob.png";
import img2mob from "./img2mob.png";
import img3 from "./author.jpg";
import img4 from "./rcc.png";
import mask from "./mask.webp";
import md1 from "./md1.svg";
import md2 from "./md2.svg";

function App() {
	const [isPlay, setIsPlay]= useState(8)
	const [modal, setModal] = useState(false)
	const [isClaim, setIsClaim] = useState(false)
	const [mintd, setMintd] = useState(4123)
	const tm = [
		{
			day: "7 June",
			start: "11:00 AM PST / 24hrs",
			type: "Mood Roller",
			amt: "0.075",
		},
		{
			day: "8 June",
			start: "11:00 AM PST / 24hrs",
			type: "RCC",
			amt: "0.12",
		},
		{
			day: "9 June",
			start: "11:00 AM PST",
			type: "Public",
			amt: "0.16",
		},
	]

	const vids1 = [
		{
			src: vid1,
		},
		{
			src: vid2,
		},
		{
			src: vid3,
		},
		{
			src: vid4,
		},
	]
	const vids2 = [
		{
			src: vid5,
		},
		{
			src: vid6,
		},
		{
			src: vid7,
		},
		{
			src: vid8,
		},
	]
	const vids3 = [
		{
			src: vid9,
		},
		{
			src: vid10,
		},
		{
			src: vid11,
		},
		{
			src: vid12,
		},
	]
	const vids4 = [
		{
			src: vid13,
		},
		{
			src: vid14,
		},
		{
			src: vid15,
		},
		{
			src: vid16,
		},
	]
	const mds = [
		{
			title: "A Home for your Digital Assets",
			sub: "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.",
			icon: md1,
		},
		{
			title: "A New Way to Log In",
			sub: "Instead of creating new accounts and passwords on every website, just connect your wallet.",
			icon: md2,
		},
	]

	useEffect(async () => {
		if(localStorage.getItem("minted") !== null) {
			await setMintd(localStorage.getItem("minted"))
		}
		setInterval(function() {
			if(mintd < 4985) {
				var rnd1 = parseInt(4123) + parseInt(Math.floor(Math.random() * 3) + 1)
				var rnd2 = parseInt(localStorage.getItem("minted")) + parseInt(Math.floor(Math.random() * 3) + 1)
				var rnd = localStorage.getItem("minted") !== null ? rnd2 : rnd1
				setMintd(rnd)
				localStorage.setItem("minted", rnd)
			}
		}, 15000)
	}, [])

	useEffect(() => {
		setInterval(function(){
			if (window.ethereum.selectedAddress) {
				setIsClaim(true)
			}
			else {
				setIsClaim(false)
			}
		}, 100)
	}, [])
	return (
		<ChakraProvider>
			<Flex fontFamily="font, sans-serif" w="100%" minHeight="100vh" direction="column" bg="rgba(0, 61, 82,1)" color="#fff" fontSize={["16px", "1rem"]}>
				<span id="connectButton" style={{ display: "none" }}></span>
				<span id="claimButton" style={{ display: "none" }}></span>
				<Flex w="100%" justify="space-between" bg="rgb(0 86 118)" padding="1.25rem" boxShadow="0px 2px 12px rgba(0, 0, 0, 0.05)">
					<Text fontSize={["1.25rem", "2.25rem"]} lineHeight="2.5rem" fontWeight="700">MOOD FLIPPERS</Text>
					{
						isClaim ?
						<Flex align="center" boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)" fontWeight="bold" bg="#000" padding="10px 14px" fontSize={["16px", "20px"]} transition="300ms ease-in-out">
							<Flex mr={["2", "4"]} bg="#30E000" w={["20px", "24px"]} h={["20px", "24px"]} borderRadius="24px"></Flex>
							<Text display={["none", "block"]} bg="linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))" px="4" py="1">
							CONNECTED: 0x.......</Text>
							<Text display={["block", "none"]} bg="linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))" px="4" py="1">
							0x..</Text>
						</Flex>
						:
						<Flex cursor="pointer" boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)" fontWeight="bold" bg="#66b582" padding="10px 14px" fontSize={["14px", "20px"]} transition="300ms ease-in-out" _hover={{ letterSpacing: "1px" }} onClick={() => setModal(true)}>Connect Wallet</Flex>
					}
				</Flex>
				<Flex w="100%" direction="column">
					<Flex align="center" w="100%" justify="center" direction="column" fontWeight="light" px={["5%", "0"]} py="7%">
						<Text fontSize={["3rem", "6rem"]} fontStyle="italic" lineHeight="0.7">Mint</Text>
						<Text fontSize={["1.875rem", "4.5rem"]} lineheight="1">{mintd}/5000</Text>
						<Flex>
						{
							isClaim &&
							<Flex mt="40px" fontWeight="bold" align="center" bg="linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))" p="2" fontSize={[".8rem", "1rem"]}>
								<Image src={mask} w="30px" h="30px" mr="3" />
								Click "Mint Mood Flippers" below to verify your wallet and proceed to mint</Flex>
						}</Flex>	
						<Flex mt={["20px", "40px"]} w={["100%", "28rem"]}>
							<Flex align="center" bg="#fff" color="#000" fontSize="1rem" padding=".75rem 1.5rem"><Text opacity="0.5" fontSize="1.3rem">{
								isClaim ? 1: 0 }</Text></Flex>
							{
								isClaim ?	
								<Flex cursor="pointer" align="center" fontSize={["1.125rem", "1.5rem"]} transition="300ms ease-in-out" bg="rgb(102, 181, 130)" w="100%" justify="center" _hover={{ background: "rgb(53, 145, 100)" }} padding=".75rem 1.5rem" onClick={() => document.getElementById("claimButton").click()}>Mint Mood Flippers</Flex>
								:
								<Flex cursor="pointer" align="center" fontSize={["1.125rem", "1.5rem"]} transition="300ms ease-in-out" bg="rgb(166, 190, 225)" w="100%" justify="center" _hover={{ background: "rgb(127, 133, 189)" }} padding=".75rem 1.5rem" onClick={() => setModal(true)}>Connect wallet</Flex>
							}
						</Flex>
						<div id="notEli" style={{ color: "rgb(248 113 113)", fontWeight: "bold", fontSize: "1.3rem", textAlign: "center", marginTop: "15px" }}></div>
						<Image src={amt} w={["100%", "28rem"]} mt={["30px", "39px"]} mb={["6", "0"]} />
					</Flex>

					<Flex w="100%" justify="space-between" px={["5%", "3%"]} direction={["column", "row"]} mb={["10px", "80px"]}>
						{
							tm.map((item, index) => (
								<Flex key={index} w={["100%", "30%"]} direction={["row", "column"]} flexWrap={["wrap", "noWrap"]} mb={["4", "0"]}>
									<Flex w={["30%", "100%"]} justify="center" p="1.25rem" bg={index === 0 ? "rgb(234, 151, 35)" : index === 1 ? "rgb(127, 133, 189)" : "rgb(53, 145, 100)"} fontWeight="bold" align="center"><Text fontSize={["1.3rem", "1.875rem"]} textDecoration={index === 0 && "line-through"}>{item.day}</Text></Flex>
									<Flex w={["70%", "100%"]} justify="center" direction="column" py={["15px", "50px"]} bg={index === 0 ? "rgb(248, 185, 23)" : index === 1 ? "rgb(166, 190, 225)" : "#66b582"} fontSize={["1.2rem", "1.7rem"]} align="center">
										<Text fontWeight="bold" fontStyle="italic">{item.start}</Text>
										<Text fontStyle="italic"><Text as="span" textDecoration={index < 2 && "underline"} cursor={index < 2 && "pointer"} onClick={() => {
											if(index === 0) {
												window.open("https://moodrollers.com/", "_SELF")
											}
											else if(index === 1) {
												window.open("https://rndmcharacters.com/", "_SELF")
											}
										}}>{item.type}</Text> {index < 2 && <Text as="span">holders</Text>}</Text>
									</Flex>
									<Flex w="100%" fontSize={["1.2rem", "1.875rem"]} justify={["flex-end", "center"]} p={[".7rem 1rem", "1.25rem"]} bg="#fff" color="rgb(0 86 118)"><Text mr="2">Ξ</Text>{item.amt}</Flex>
								</Flex>
							))
						}
					</Flex>
					<Flex w="100%" direction={["column-reverse", "row"]}>
						<Flex w={["100%", "50%"]} bg="rgb(233 162 168)" align="center" justify="center" px="10%">
							<Text py={["20%", "0"]} lineHeight="1.625" fontWeight="bold" fontSize="1.875rem" textAlign="center">5.000 randomly generated, unique, animated, flipping characters on the Ethereum blockchain.</Text>
						</Flex>
						<Flex w={["100%", "50%"]} flexWrap="wrap">
							{
								vids1.map((item, index) => (
									<video src={item.src} style={{ width: "50%", height: "auto" }} key={index} loop muted playsInline autoPlay preload="auto"></video>
								))
							}
						</Flex>
					</Flex>
					<Flex direction="column" w="100%" display={["none", "flex"]}>
						<Image w="100%" src={img1} />
						<Image w="100%" src={img2} />
					</Flex>
					<Flex direction="column" w="100%" display={["flex", "none"]}>
						<Image w="100%" src={img1mob} />
						<Image w="100%" src={img2mob} />
					</Flex>
					<Flex w="100%" direction={["column", "row"]}>
						<Flex w={["100%", "50%"]} flexWrap="wrap">
							{
								vids2.map((item, index) => (
									<Flex direction={["column"]} w="50%">
										<video src={item.src} style={{ width: "100%", height: "auto", }} key={index} loop muted={isPlay === index ? false : true} playsInline autoPlay preload="auto"></video>
										<Flex position="absolute" bg="rgba(0,73,90,.3)" p="3" mt="auto" cursor="pointer" onClick={() => isPlay === index ? setIsPlay(8) : setIsPlay(index)}>
											<Flex>
												{
													isPlay === index ?
													<svg style={{ transform: "rotate(-30deg)"}} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-200 ease-out -rotate-[35deg] group-hover:opacity-100"><path d="M28 41.45V38.35Q32.85 36.95 35.925 32.975Q39 29 39 23.95Q39 18.9 35.95 14.9Q32.9 10.9 28 9.55V6.45Q34.2 7.85 38.1 12.725Q42 17.6 42 23.95Q42 30.3 38.1 35.175Q34.2 40.05 28 41.45ZM24 40 14 30H6V18H14L24 8ZM27 32.4V15.55Q29.7 16.4 31.35 18.75Q33 21.1 33 24Q33 26.95 31.35 29.25Q29.7 31.55 27 32.4Z" fill="currentColor"></path></svg>
													:
													<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-all duration-200 ease-out rotate-0 opacity-75 group-hover:opacity-100"><path d="M40.65 45.2 34.05 38.6Q32.65 39.6 31.025 40.325Q29.4 41.05 27.65 41.45V38.35Q28.8 38 29.875 37.575Q30.95 37.15 31.9 36.45L23.65 28.15V40L13.65 30H5.65V18H13.45L2.45 7L4.6 4.85L42.8 43ZM38.85 33.6 36.7 31.45Q37.7 29.75 38.175 27.85Q38.65 25.95 38.65 23.95Q38.65 18.8 35.65 14.725Q32.65 10.65 27.65 9.55V6.45Q33.85 7.85 37.75 12.725Q41.65 17.6 41.65 23.95Q41.65 26.5 40.95 28.95Q40.25 31.4 38.85 33.6ZM32.15 26.9 27.65 22.4V15.9Q30 17 31.325 19.2Q32.65 21.4 32.65 24Q32.65 24.75 32.525 25.475Q32.4 26.2 32.15 26.9ZM23.65 18.4 18.45 13.2 23.65 8Z" fill="currentColor"></path></svg>
												}
											</Flex>
										</Flex>
									</Flex>
								))
							}
						</Flex>
						<Flex w={["100%", "50%"]} bg="rgb(0 73 90)" align="center" justify="center" px="5%">
							<Text py={["20%", "0"]} lineHeight="1.625" fontWeight="bold" fontSize="1.875rem" textAlign="center">Every Mood Flipper comes with a uniquely generated sound design.</Text>
						</Flex>
					</Flex>
					<Flex w="100%" direction={["column", "row"]}>
						<Flex w={["100%", "50%"]} bg="rgb(112 176 194)" align="center" justify="center" px="8%">
							<Text py={["20%", "0"]} lineHeight="1.625" fontWeight="bold" fontSize="1.875rem" textAlign="center">There are mixed in rarer traits, like Glasses, Earrings, Eyescolor, Metal pieces and more.</Text>
						</Flex>
						<Flex w={["100%", "50%"]} flexWrap="wrap">
							{
								vids3.map((item, index) => (
									<video src={item.src} style={{ width: "50%", height: "auto" }} key={index} loop muted playsInline autoPlay preload="auto"></video>
								))
							}
						</Flex>
					</Flex>
					<Flex w="100%" direction={["column-reverse", "row"]}>
						<Flex w={["100%", "50%"]} flexWrap="wrap">
							{
								vids2.map((item, index) => (
									<video src={item.src} style={{ width: "50%", height: "auto" }} key={index} loop muted playsInline autoPlay preload="auto"></video>
								))
							}
						</Flex>
						<Flex w={["100%", "50%" ]}bg="rgb(232 187 185)" align="center" justify="center" px="7%">
							<Text py={["20%", "0"]} lineHeight="1.625" fontWeight="bold" fontSize="1.875rem" textAlign="center">The collection also contains some hand made 1/1 Mood Flippers.</Text>
						</Flex>
					</Flex>
					<Flex w="100%" p={["20% 5%", "8%"]} direction={["column", "row"]} align="center" bg="rgb(210 166 205)">
						<Flex w={["100%", "50%"]} direction="column" align="center" justify="center" px="5%">
							<Image w={["6rem", "12rem"]} h={["6rem", "12rem"]} borderRadius={["6rem", "12rem"]} src={img3} mb={["4", "7"]} />
							<Text textAlign="center" fontSize={["1rem", "1.5rem"]}>
								MoodFlippers are part of the
								<Text as="span" textDecoration="underline" ml="2" onClick={() => window.open("https://twitter.com/moodrollers/", "_BLANK")} cursor="pointer">MoodVerse</Text>
								. Designed and animated by Lucas Zanotto,<Text as="span" textDecoration="underline" onClick={() => window.open("https://twitter.com/lucas_zanotto", "_BLANK")} ml="2" cursor="pointer">@lucas_zanotto</Text>.
							</Text>
						</Flex>

						<Flex mt={["12", "0"]} w={["100%", "50%"]} direction="column" align="center" justify="center" px="5%">
							<Image w={["6rem", "12rem"]} h={["6rem", "12rem"]} borderRadius={["6rem", "12rem"]} src={img4} mb={["4", "7"]} />
							<Text textAlign="center" fontSize={["1rem", "1.5rem"]}>
								MoodFlippers are a proud member of Random Character Collective,<Text as="span" textDecoration="underline" onClick={() => window.open("https://discord.com/invite/rndm", "_BLANK")} ml="2" cursor="pointer">@RNDMCHARACTERS</Text>.
							</Text>
						</Flex>
					</Flex>
					<Flex w="100%" align="center" justify="space-between" direction={["column", "row"]} bg="rgb(0 86 118)" p="2rem 1.5rem" fontWeight="bold" fontSize={["1rem", "1.3rem"]}>
						<Text>Mood Flippers</Text>
						<Flex mt={["2", "0"]} align="center"><Text mr="2" cursor="pointer" transition="300ms ease-in-out" _hover={{ textDecoration: "underline" }} onClick={() => window.open("https://discord.com/invite/rndm", "_SELF")}>Discord</Text>•<Text mr="2" ml="2" cursor="pointer" transition="300ms ease-in-out" _hover={{ textDecoration: "underline" }} onClick={() => window.open("https://opensea.io/collection/mood-flippers", "_SELF")}>OpenSea</Text>•<Text ml="2" cursor="pointer" transition="300ms ease-in-out" _hover={{ textDecoration: "underline" }} onClick={() => window.open("https://etherscan.io/address/0xFd5E3eB879798125E0363F54a8E6A0bB6e9a48D7", "_SELF")}>EtherScan</Text></Flex>
					</Flex>
				</Flex>
				{
					modal && 
					<Flex position="fixed" top="0" left="0" zIndex="1000" w="100%" h="100%" justify="center" align="center">
						<Flex position="absolute" top="0" left="0" zIndex="10000" w="100%" h="100%" bg="rgba(0, 0, 0, 0.5)" onClick={() => setModal(false)}></Flex>

						<Flex w={["100%", "60%"]} zIndex="1000000" position="absolute" bg="#1A1B1F" border="1px solid rgba(255, 255, 255, 0.08)" boxShadow="0px 8px 32px rgba(0, 0, 0, 0.32)" direction={["column", "row"]} bottom={["0", "auto"]}>

							<Flex w={["100%", "35%"]} p="5" direction="column" align={["center", "flex-start"]} bg={["rgba(224, 232, 255, 0.05)", "transparent"]}>
								<Flex align="center" fontWeight="bold" w="100%" fontSize="1.2rem" mb="6">
									<Text w="100%" textAlign={["center", "left"]}>Connect a Wallet</Text>
								<Flex justify="flex-end" display={["flex", "none"]}>
									<Flex onClick={() => setModal(false)} borderRadius="100%" p="3" cursor="pointer" bg="rgba(255, 255, 255, 0.08)"><svg aria-hidden="true" fill="none" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z" fill="currentColor"></path></svg></Flex>
								</Flex></Flex>
								<Text color="rgba(255, 255, 255, 0.6)" mb="4" display={["none", "block"]}>Popular</Text>
								<Flex w="100%" align="center" cursor="pointer" _hover={{ bg: "rgba(255, 255, 255, 0.08)" }} transition="300ms ease-in-out" py="2" px="1" onClick={() => {
									document.getElementById("connectButton").click()
									setModal(false)
								}} direction={["column", "row"]}>
									<Flex bg="#fff" borderRadius={["10px", "5px"]} p={["2", "1"]}>
										<Image src={mask} w={["50px", "25px"]} h={["50px", "25px"]} />
									</Flex>
									<Text ml="3" mt={["2", "0"]} fontSize={["0.9rem", "1.2rem"]} fontWeight="bold" mr={["3", "0"]}>MetaMask</Text>
									<Text ml="3" color="#66b582" display={["block", "none"]} fontSize={["0.9rem", "1.2rem"]} fontWeight="bold">Popular</Text>
								</Flex>
							</Flex>

							<Flex w={["100%", "65%"]} p={["0 5", "5"]} borderLeft="1px solid rgba(255, 255, 255, 0.08)" direction="column">
								<Flex w="100%" justify="flex-end" display={["none", "flex"]}>
									<Flex onClick={() => setModal(false)} borderRadius="100%" p="3" cursor="pointer" bg="rgba(255, 255, 255, 0.08)"><svg aria-hidden="true" fill="none" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z" fill="currentColor"></path></svg></Flex>
								</Flex>
								<Flex w="100%" direction="column" px={["8%", "15%"]} align="center" justify="center" py="5%">
									<Text fontSize={["1.1rem", "1.32rem"]} fontWeight="bold" mb={["2", "12"]}>What is a wallet</Text>
									<Flex w="100%" display={["none", "flex"]} direction="column">
										{
											mds.map((item, index) => (
												<Flex key={index} w="100%" align="center" mb="8">
													<Image src={item.icon} w="48px" h="48px" borderRadius="10px" mr="5" />
													<Text>
														<Text>{item.title}</Text>
														<Text color="rgba(255, 255, 255, 0.6)">{item.sub}</Text>
													</Text>
												</Flex>
											))
										}
									</Flex>
									<Text display={["block", "none"]} fontSize="1rem" color="rgba(255, 255, 255, 0.6)" textAlign="center">A wallet is used to send, receive, store, and display digital assets. It’s also a new way to log in, without needing to create new accounts and passwords on every website.</Text>
									
									<Flex mt="5" color="#66b582" cursor="pointer" fontWeight="bold" padding="4px 12px" transition="300ms ease-in-out" border={["0.5px solid rgba(255,255,255,0.1)", "none"]} p={["3% 10%", "0"]} _hover={{ letterSpacing: "1px" }} onClick={() => window.open("https://learn.rainbow.me/what-is-a-cryptoweb3-wallet-actually", "_BLANK")}>Learn More</Flex>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				}
			</Flex>
		</ChakraProvider>
	)
}

export default App;
