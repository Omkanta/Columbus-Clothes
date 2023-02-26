import {Box,Text,Image,Stack, HStack, VStack,Center, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom"
function Home(){
return (
<Center w={"100"}>
<VStack w={"100%"}>
<Box h={500} w={"100%"} backgroundImage={"https://columbia.scene7.com/is/image/ColumbiaSportswear2/37317_C_U_Q1_WinterSale5_HP_Hero_XL?$aem_pjpeg$"}>
           <Text color={"white"} fontSize={55}>Hello</Text>
</Box>

        <Text fontSize={30} paddingTop={"60px"} paddingBottom={10} fontWeight={"bold"}>Seasonal Essentials</Text>
        <HStack gap={10}>
                <Box>
                        <Image src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/11-03_37132_C_U_OOP_q4_NewtonRidge_HP_W_PDP?$aem_pjpeg$"/>
                        <Text>Women's</Text>
                </Box>
                <Box>
                        <Image src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/11-03_37132_C_U_OOP_q4_NewtonRidge_HP_Promo_Mens_PDP?$aem_pjpeg$"/>
                        <Text>Men's</Text>
                </Box>
                <Box>
                        <Image src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/11-03_37132_C_U_OOP_q4_NewtonRidge_HP_Promo_Youth_PDP?$aem_pjpeg$"/>
                        <Text>Kid's</Text>
                </Box>
                <Box>
                        <Image src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/11-03_37132_C_U_OOP_q4_NewtonRidge_HP_FW_PDP?$aem_pjpeg$"/>
                        <Text>FootWear</Text>
                </Box>
        </HStack>
        <Box pt={60}>
        <Image src='https://columbia.scene7.com/is/image/ColumbiaSportswear2/20590_C_U_X1_SU20_CGR_HP_Banner_Black_Logo_resized_@2x?$aem_png$'/>
        <Text fontSize={"40px"} fontWeight={'bold'}>Get Rewards On Every Purchase</Text>
        <Text>Members get free shipping and rewards on every order.</Text>
        <HStack display={"flex"} justifyContent={'center'} gap={10}>
                <Button _hover={{color:"black",bgColor:"white"}} bgColor={'black'} color={'white'} pt={8} pb={8} pl={25} pr={25}>LOG IN & SHOP</Button>
                <Button _hover={{color:"black",bgColor:"white"}} bgColor={'black'} color={'white'} pt={8} pb={8} pl={25} pr={25}>JOIN FOR FREE</Button>
        </HStack>
        </Box>
        <Image src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/02-09_37315_Campaign_Mountain_v0_XL?$aem_pjpeg$"/>
        <Box pt={40}>
        <Text fontSize={"40px"} fontWeight={'bold'}>The Mountain Is Calling</Text>
        <Text>Answer it in warm, waterproof, breathable gear.</Text>
        <HStack display={"flex"} justifyContent={'center'} gap={10}>
                <Button _hover={{color:"black",bgColor:"white"}} bgColor={'black'} color={'white'} p={8} pl={15} pr={15}>SHOP SKI & SNOW</Button>
        </HStack>
        </Box>
        <Box>
        <Text fontSize={30} paddingTop={"60px"} paddingBottom={10} fontWeight={"bold"}>Featured Favorites</Text>
        </Box>
        <HStack w={'100%'} h={"450px"} display={"flex"} justifyContent={"center"}>
                <Box w={"45%"} h={"100%"} bgImage={'https://columbia.scene7.com/is/image/ColumbiaSportswear2/1-26_37313_COL_US_Mountain_HP_Refresh-SH-02_LG?$aem_pjpeg$'}>
                    <Text color={"white"}>STAY DRY</Text>
                     
                </Box>
                <Box w={"45%"} h={"100%"} bgImage={'https://columbia.scene7.com/is/image/ColumbiaSportswear2/1-26_37313_COL_US_Mountain_HP_Refresh-SH-02_LG?$aem_pjpeg$'}>
                    <Text>STAY DRY</Text>
                     
                </Box>
        </HStack>
        <Text fontSize={30} paddingTop={"60px"} paddingBottom={10} fontWeight={"bold"}>How Do You Play?</Text>
        <HStack>
                <Box>
                <Image src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/12-26_COL_US_WIN21_WINTERSALE_CONTINGENCY_SUPERCAT_viznav02_04_v2?$aem_pjpeg$"/>
                <Text fontWeight={'bold'}>Fishing</Text>
                </Box>
                <Box>
                <Image src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/03-01_27811_VizNav_Hiking_v0?$aem_pjpeg$"/>
                <Text fontWeight={'bold'}>Hiking</Text>
                </Box>
                <Box>
                <Image src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/09-01_29285_c_u_lukecombs_brand_hp_subhero_visnavactivity?$aem_pjpeg$"/>
                <Text fontWeight={'bold'}>Hunting</Text>
                </Box>
                <Box>
                <Image src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/12-26_COL_US_WIN21_WINTERSALE_CONTINGENCY_SUPERCAT_viznav02_02?$aem_pjpeg$"/>
                <Text fontWeight={'bold'}>Ski & Snow</Text>
                </Box>
        </HStack>
        <Box w={"50%"}>
                <Text fontSize={50} color={"#1976D2"} fontWeight={"bold"}>"Nature. The world’s largest playground."</Text>
                <Text fontWeight={'bold'} fontSize={20}>Gert Boyle</Text>
                <Text fontWeight={'bold'} fontSize={12}>FOUNDER, COLUMBIA SPORTSWEAR</Text>
        </Box>
        <Box w={'96%'} h={'650px'} bgImage={'https://4kwallpapers.com/images/walls/thumbs_3t/87.jpg'} pb={20}>
                <Text fontWeight={"bold"} pt={10} pb={20} fontSize={50} color={"white"}>See you out there.</Text>
                <HStack gap={10}>
                        <Box bgColor={'white'} pb={20}>
                                <Image w={'100%'}  src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/LUNAR_TEST_CLOSER_VX?$aem_pjpeg$"/>
                                <Text fontWeight={'bold'}>Go Futher</Text>
                                <Text p={10} w={'75%'}>Omni-Heat™ Infinity is heading to the moon. </Text>
                                <Button textDecor={'underline'} border={'none'} bgColor={'white'}>Learn More</Button>
                        </Box>
                        <Box bgColor={'white'} pb={20}>
                                <Image w={'100%'}  src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/01-27_27664_2021_Site_Closer_TMOG_v0?$aem_pjpeg$"/>
                                <Text fontWeight={'bold'}>Tough Mother Outdoor Guide</Text>
                                <Text  p={10} w={'75%'}>A no-nonsense guide to the great outdoor</Text>
                                <Button textDecor={'underline'} border={'none'} bgColor={'white'}>Explore the Gudie</Button>
                        </Box>
                        <Box bgColor={'white'} pb={20}>
                                <Image w={'100%'} src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/01-27_27664_2021_Site_Closer_Slide_Tech_v2?$aem_pjpeg$"/>
                                <Text fontWeight={'bold'}>Technologies</Text>
                                <Text  p={10} w={'75%'}>Keep you warm,dry, cool & protected </Text>
                                <Button textDecor={'underline'} border={'none'} bgColor={'white'}>Explore the Gudie</Button>
                        </Box>
                        <Box bgColor={'white'} pb={20}>
                                <Image w={'100%'}  src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/01-27_27664_Ambassador_Closer_Poster_v0?$aem_pjpeg$"/>
                                <Text fontWeight={'bold'}>Ambassadors</Text>
                                <Text  p={10} w={'75%'}>Reach new height with people who inspire</Text>
                                <Button textDecor={'underline'} border={'none'} bgColor={'white'}>Meet our Ambassadors</Button>
                        </Box>
                </HStack>
        </Box>
        <HStack mt={"20px"}>
                <Box></Box>
        </HStack>
</VStack>
</Center>
)

}

export default Home;