import styled from "styled-components";
export interface ButtonContainerProps {
    gridArea: string
  }

export const HeaderWrapper = styled.div`
    min-width: 100vw;
    margin: 0;
    top: 0;
    position: fixed;
    height: 75px;
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.2px);
    -webkit-backdrop-filter: blur(13.2px);

    
    display: grid;
    grid-template-columns: 5fr repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    `
export const Button = styled.a`
    position:relative;
    display:inline-block;
    font-size: 1.8rem;

    &: hover {
        cursor: pointer
    }

    &:before{
    content:'';
    width:0;
    height:1px;
    background: rgb(0,164,168);
    background: linear-gradient(90deg, rgba(0,164,168,0) 0%, rgba(0,212,255,1) 100%);
    position:absolute;
    left:0;
    bottom:0;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    }

    &:hover:before {
        width: 100%;
    }
`

export const LogoContainer = styled.div`
    grid-area: 1 / 1 / 2 / 2; 
`


export const ButtonContainer = styled.div`
    grid-area: ${(props: ButtonContainerProps) => props.gridArea};
`
