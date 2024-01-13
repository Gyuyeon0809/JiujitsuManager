/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-13
페이지명: 페이지 타이틀 섭타이틀 컴포넌트
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import styled from "styled-components";
const Title = (props) =>{
    return( 
        <TitleWrap>
            <TitleContents>
                {props.title}
            </TitleContents>
            <SubtitleContents>
                {props.subTitle}
            </SubtitleContents>    
        </TitleWrap>
    );
}
const TitleWrap = styled.div`
    position: relative;
    text-align: center;
    border: 1px solid black;
`
const TitleContents = styled.p`
    font-family: 'SEBANG_Gothic_Bold';
    font-size: 3em;
`
const SubtitleContents = styled.p`
    font-family: 'GmarketSansMedium';
    font-size: 1.2em;
    color: #404040;
`

export default Title;