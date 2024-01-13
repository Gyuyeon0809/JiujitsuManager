import styled from 'styled-components';
const Footer = () =>{
    return(
        <Wrap>
            <>
            </>
            <CopyRight>
                Copyright 2024. kyeon All pictures cannot be copied without permission.
            </CopyRight>
        </Wrap>
    )
}
const Wrap = styled.div`
    font-family: 'SejonghospitalBold';
    width: 100%;
    height: 150px;
    background-color: black;
    /* border: 1px solid black; */
`
const CopyRight = styled.div`
    color: white;
    /* border: 1px solid black; */
`

export default Footer;
