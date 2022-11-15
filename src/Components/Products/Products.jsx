import { Box, Flex, Heading, Image, Text, useMediaQuery, Grid, GridItem } from '@chakra-ui/react';
// import { Stack, HStack, VStack } from '@chakra-ui/react';
import { WrapItem, Button } from '@chakra-ui/react'
// import {FaHeart} from 'react-icons/fa';


/*
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}
*/

/* Working by making objects of each product */
const products = [
    {
        img: 'https://cdn.enochdev.com/urgent-fury-assets/marketplace/explore-product-img1.png',
        title: '#B8/457843',
        price: '$260',
        auction_time: '03 : 18 : 24 : 42s',
        bidSts: true

    },
    {
        img: 'https://cdn.enochdev.com/urgent-fury-assets/marketplace/explore-product-img2.png',
        title: '#B8/457843',
        price: '$260',
        auction_time: '03 : 18 : 24 : 42s',
        bidSts: true

    },
    {
        img: 'https://cdn.enochdev.com/urgent-fury-assets/marketplace/explore-product-img3.png',
        title: '#B8/457843',
        price: '$240',
        auction_time: '03 : 18 : 24 : 42s',
        bidSts: true

    }
]


export const Products = () => {


    const [isNotSmallerScreen] = useMediaQuery('(min-width : 600px)');
    // console.log(isNotSmallerScreen);

    return (
        <Box pt="20px" h='100%' justifyContent={'center'}>
            <Heading as='h4' size='md' fs='15px' style={{ fontFamily: "Poppins", letterSpacing: "4.5px", color: '#81F7FF' }}>POPULAR CATEGORIES</Heading>
            <Heading as='h3' size='lg' style={{ fontFamily: "Poppins", letterSpacing: "2.7px" }}>EXPLORE OUR PRODUCTS</Heading>

            {/* <Grid templateColumns={isNotSmallerScreen ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)'}
                spacing='24px'
                width={'70%'}
                margin='auto'
                gap={10} mt='20px'> */}
                <Flex direction={['column','column','row','row']}
                  spacing='24px'
                  width={'70%'}
                  margin='auto'
                  gap={10} mt='20px'
                >
                {products.map((prod) => {
                    return <Box bg="#112135" p='28px' fontFamily="poppins">
                        <Flex direction={['column','column','row','row']} justifyContent={'space-between'} p={'0px 5px'} mb='10px' alignItems={'center'}>
                            <div >
                                <button style={{
                                    padding: '5px 10px', fontSize: '10px', border: '0.2px solid grey',
                                    borderRadius: '12px', margin: '0px 4px'
                                }} _hover={{ fontWeight: 'semibold' }}>LATEST </button>
                                <button display={isNotSmallerScreen ? 'none' : 'block'} style={{
                                    padding: '5px 10px', fontSize: '10px', border: '0.2px solid grey',
                                    borderRadius: '12px'
                                }} _hover={{ fontWeight: 'semibold' }}>HOT DEAL </button>
                            </div>
                            <button style={{
                                padding: '5px 10px', fontSize: '10px', border: '0.2px solid orange',
                                borderRadius: '12px',
                            }} _hover={{ fontWeight: 'semibold' }}>AUCTION</button>
                        </Flex>
                        <Image src={prod.img}>
                        </Image>
                        <Box>
                            <Flex mt='20px' justifyContent="space-between">
                                <div>
                                    <Text align={'left'} fontSize={18}>#B8/457843</Text>
                                    <Text align={'left'} fontSize={12} color="#6398DB">Enoch Citizen</Text>
                                </div>
                                <Flex align={'center'} gap='10px' >
                                    <Image src='https://cdn.enochdev.com/urgent-fury-assets/marketplace/heart-pink.svg'></Image>
                                    <Text fontSize={18} color="#A1A1A1">92</Text>
                                </Flex>
                            </Flex>
                            <Flex direction={['column','column','row','row']}  justifyContent={'space-between'} mt='15px' alignItems={'center'}>
                                <Box display='inline-block' align={'left'} border='1px solid #6398DB' m='15px 0' p='16px 14px 6px 14px'>
                                    <Text fontSize={10} color='#42CE1F' >HIGHEST BID</Text>
                                    <Text fontSize={15} fontFamily="DIN 2014">{prod.price}</Text>
                                </Box>
                                <Box display='inline-block' align={'left'} border='1px solid red'  m='15px 0' p='16px 14px 6px 14px'>
                                    <Text fontSize={12} color='#1DB4F4' >AUCTION ENDS IN</Text>
                                    <Text fontSize={15} fontFamily="DIN 2014">{prod.auction_time}</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <WrapItem>
                            <Button w={'100%'} size='lg' colorScheme='messenger'>BID NOW</Button>
                        </WrapItem>
                    </Box>
                })}

            {/* </Grid> */}
            </Flex>

        </Box>
    )
} 