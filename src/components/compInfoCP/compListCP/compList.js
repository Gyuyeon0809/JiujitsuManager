/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-12
페이지명: 주짓수 대회 목록 페이지
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import { Link } from "react-router-dom";
import styled from "styled-components";
const CompList = () =>{
    return(
        <ListWrap>
            <ul>
                <li>
                    <Link to='/compinfo'>20230101 UNION FG 창원오픈</Link>
                </li>
                <li>
                    <Link to='#'>20230101 UNION FG 창원오픈</Link>
                </li>
                <li>
                    <Link to='#'>20230101 UNION FG 창원오픈</Link>
                </li>
                <li>
                    <Link to='#'>20230101 UNION FG 창원오픈</Link>
                </li>
                <li>
                    <Link to='#'>20230101 UNION FG 창원오픈</Link>
                </li>
                <li>
                    <Link to='#'>20230101 UNION FG 창원오픈</Link>
                </li>
                <li>
                    <Link to='#'>20230101 UNION FG 창원오픈</Link>
                </li>
                <li>
                    <Link to='#'>20230101 UNION FG 창원오픈</Link>
                </li>
                <li>
                    <Link to='#'>20230101 UNION FG 창원오픈</Link>
                </li>
            </ul>
        </ListWrap>
    );
}
const ListWrap = styled.div`
    width: 100%;
    text-align: center;
    ul{
        list-style-type: none;
        width: 60%;
        margin: 0 auto;
        list-style-position: inside;
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        margin-top: 30px;
    }
    a{
        text-decoration-line: none;
        color: black;
        text-align: center;
        font-family: 'GmarketSansMedium';
        font-weight: 400;
        &:hover{
            color: #2F4073;
        }
    }
    li{
        margin-top: 10px;
        border-bottom: 1px solid black;
        text-align: center;
        margin-left:-40px ;
    }
`

export default CompList;