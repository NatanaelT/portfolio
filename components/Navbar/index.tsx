import React from 'react'
import { Button, ButtonContainer, HeaderWrapper, LogoContainer } from './styles'

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {
    return (
        <HeaderWrapper>
            <LogoContainer>
                <h1>Logo</h1>
            </LogoContainer>
            <ButtonContainer gridArea={"grid-area: 1 / 2 / 2 / 3;"}>
                <Button>
                    Home
                </Button>
            </ButtonContainer>
            <ButtonContainer gridArea={"grid-area: 1 / 1 / 2 / 3;"}>
                <Button>
                    Sobre
                </Button>
            </ButtonContainer>
            <ButtonContainer gridArea={"grid-area: 1 / 3 / 2 / 4;"}>
                <Button>
                    Playground
                </Button>
            </ButtonContainer>
        </HeaderWrapper>
    )
}