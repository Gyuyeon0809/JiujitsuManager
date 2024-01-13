/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-12
페이지명: 메인화면 콘텐츠 영역
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import styled from "styled-components";
import aboutImg from "../../../contents/images/contents1.jpg"
import aboutImgRight from "../../../contents/images/contents2.jpg"
import ContentsForm from "./contentsForm";
// import { Link } from "react-router-dom";
const AboutContents = () =>{
    return(
        <>
        <ContentsForm height="1000px">
            <p>ABOUT CMS JIUJITSU</p>
            <Contents>
                <AboutWrap>
                    <ImgWrap position = {"border-top-left-radius"}>
                        <img src={aboutImg} alt="주짓수 이미지"></img>
                    </ImgWrap>
                    <AboutContentsBox>
                    <span>Competition</span>
                    <p>다양한 대회의 정보를 제공합니다.
                    </p>
                    </AboutContentsBox>
                </AboutWrap>
                <AboutWrap>
                    <AboutContentsBox>
                    <span>Management System</span>
                    <p>
                        주짓수 대회를 손쉽게 관리해주는 시스템을 경험해 보세요.
                    </p>
                    </AboutContentsBox>
                    <ImgWrap position={"border-bottom-right-radius"}>
                        <img src={aboutImgRight} alt="주짓수 이미지"></img>
                    </ImgWrap>
                </AboutWrap>
            </Contents>
        </ContentsForm>
        {/* <Link to={"/about"}><EffectButton>MORE</EffectButton></Link> */}
        </>
    );
}

const Contents = styled.div`
    width: 1500px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const AboutWrap = styled.div`
    width: 45%;
    height: 90%;
    justify-content: space-between;
    `
    const ImgWrap = styled.div`
        width: 100%;
        height: 80%;
        overflow: hidden;
        ${props=>props.position}: 60px;
        &>img{
            object-fit:cover;
            width: 100%;
        }

        
        
    `
    const AboutContentsBox = styled.div`
    margin-top: 0;
    font-family: 'SUIT-Regular';
    font-weight: 800;
    font-size: 1.3em;

    p{
        margin-top: 7px;
        padding-left: 5px;
        font-size: 0.4em;
        font-weight: 400;
    }
        
    `

export default AboutContents;