/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-22
페이지명: 매트컴포넌트
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import styled from "styled-components";
const Mat = () =>{
    return(
        <MatCP>
            <p>1번매트</p>
            <p>현재경기: 01</p>
            <p>다음경기: 03</p>
        </MatCP>
    );
}
const MatCP = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'GmarketSansMedium';
    text-align: center;
    background-color: #F29F05;
    justify-content: space-between;
    width: 250px;
    height: 250px;
    border: 2px solid black;
    margin: 20px;
`
export default Mat;