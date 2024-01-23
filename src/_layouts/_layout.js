/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-12
페이지명: 레이아웃영역
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
// import Footer from "./footer/footer";
import Header from "./header/header";
import styled from "styled-components";
const Layout = ({children}) =>{
    return(
        <Wrap>
            <Header></Header>
                <ChildWrap>
                    {children}
                </ChildWrap>
            {/* <Footer></Footer> */}
        </Wrap>
    )
}
const Wrap = styled.div`
    width: 100%;
    @font-face {
    font-family: 'SejonghospitalBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/SejonghospitalBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: 'SEBANG_Gothic_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
-webkit-user-select: none !important; 
-moz-user-select: -moz-none !important;
-ms-user-select: none !important;
user-select: none !important;
`
const ChildWrap = styled.div`
   min-height: 750px;
`
export default Layout;
