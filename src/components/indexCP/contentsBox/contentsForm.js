/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-12
페이지명: 메인화면 콘텐츠 폼
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import styled from "styled-components";
const ContentsForm = ({children, direction,height}) =>{
    return(
        <Form direction={direction} height={height}>
            {children}
        </Form>
    );
}
const Form = styled.div`
    font-family: 'TmonMonsori';
    width: 99.9%;
    height: ${(props)=>props.height || "900px"};
    font-size: 2.5em;
    display: flex;
    flex-direction: ${(props)=>props.direction || "column"};
    padding-top: 130px;
    &>p,&>div{
        margin: 0 auto;
        padding-bottom: 40px;
    }
`
export default ContentsForm;