/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-22
페이지명: 상세페이지 테이블
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import { Link } from "react-router-dom";
import styled from "styled-components";
const CompTable = (props) =>{
    // const url = '/'+props.link;
    return(
        <Wrap>
            <CompTableCP>
                <tr>
                    <td>신청기간:</td>
                    <td>2024.01.05 ~ 2024.02.05</td>
                </tr>
                <tr>
                    <td>얼리버드:</td>
                    <td>2024.01.05 ~ 2024.01.15</td>
                </tr>
                <tr>
                    <td>대회장소:</td>
                    <td>마산실내체육관</td>
                </tr>
                <tr>
                    <td>대회일자:</td>
                    <td>2024.03.08</td>
                </tr>
                <tr>
                    <td>상세정보:</td>
                    <td>신청하기 양식에서 확인</td>
                </tr>
            </CompTableCP>
            <ButtonWrap>
            <Link to='/matCheak'><Button1>실시간매트현황</Button1></Link>
            </ButtonWrap>

        </Wrap>
    );
}
const Wrap = styled.div`
    width: 700px;
    margin: 0 auto;
`
const CompTableCP = styled.table`
    width: 700px;
    font-family: 'GmarketSansMedium';
    font-size: 1.2em;
    td{
        padding-bottom: 20px;
        width: 200px;
    }
`
const ButtonWrap = styled.div`
    width: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid black; */
    `
const Button1 = styled.button`
    text-align: center;
    font-family: 'GmarketSansMedium';
    font-size: 0.9em;
    background-color: black;
    width: 700px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    color: white;
    a{
        text-decoration: none;
    }
`
export default CompTable;