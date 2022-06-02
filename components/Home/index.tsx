import { Box, Container, Grid, GridItem, Image } from '@chakra-ui/react'

interface HomeProps { }

const Equipamentos: React.FC<HomeProps> = () => {
    return (
        <>
            <Box
                onClick={() => alert('celular')}
                style={{
                    width: '350px',
                    height: '510px',
                    position: 'fixed',
                    top: '80px',
                    right: '470px',
                    clipPath: 'polygon(1% 61%, 13% 55%, 37% 65%, 25% 71%)',
                }}
                _hover={{
                    cursor: 'pointer'
                }}
            >
                <Image position='fixed' style={{ top: '295px', right: '650px' }} h={'200px'} src={'/images/iPhone_Laying_R Shadowless.png'} alt={'iphone'} />
            </Box>
            <Box style={{
                width: '351px',
                height: '345px',
                position: 'fixed',
                top: '90px',
                right: '452px',
                clipPath: 'polygon(3% 28%, 56% 0, 64% 43%, 100% 65%, 46% 97%, 10% 75%)',
            }}
                _hover={{
                    cursor: 'pointer'
                }}
                onClick={() => alert('notebok')}>
                <Image position='fixed' style={{ right: '350px', top: '0px' }} src={'/images/Macbook_Pro_Open_Front_R.png'} alt={'notebook'} />
            </Box>
            <Box style={{
                width: '350px',
                height: '345px',
                position: 'fixed',
                top: '50px',
                right: '190px',
                clipPath: 'polygon(4% 58%, 16% 51%, 33% 63%, 23% 70%)',
            }}
                _hover={{
                    cursor: 'pointer'
                }}
                onClick={() => alert('mouse')}>
                <Image position='fixed' h={'150px'} style={{ right: '400px', top: '165px' }} src={'/images/Mouse_R.png'} alt={'mouse'} />
            </Box></>)
}

export const HomePage: React.FC<HomeProps> = () => {

    return (
        // <Container size={'full'} maxW='100vw' height={'100vh'} bgImage={'linear-gradient(to bottom, #ffffff, #f2f4ff, #dfebff, #c5e3ff, #a5ddff, #8fd3f8, #76c9f1, #59bfea, #4bafde, #3f9fd2, #338fc6, #2980b9)'}  centerContent>
        <Container size={'full'} maxW='100vw' height={'100vh'} bgImage={'linear-gradient(to bottom, #61dafb, #73dff2, #88e3e9, #9ce7e2, #b0eade, #bbecd9, #c7edd5, #d2eed3, #dbeecd, #e7edc7, #f3ecc3, #ffeac2)'} centerContent>

            <Grid
                templateColumns='repeat(3, 1fr)' h="100%" w="100%">
                <GridItem colSpan={2} w='100%' h='100vh'>

                </GridItem>
                <GridItem colSpan={1} w='100%' h='100vh'>
                    <Equipamentos />
                </GridItem>
            </Grid>
        </Container >
    )

}