/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-12
페이지명: 헤더영역
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import styled from 'styled-components';
import logo from '../../contents/images/TestLogo.png'
import { Link } from 'react-router-dom';
const Header = () =>{
    return(
        <HeaderWrap>
            <LogoWrap>
            <Link to="/"><LogoImg></LogoImg></Link>
            </LogoWrap>
            <MenuWrap>
                <p><Link to="/complist?menuid=compInfo187">대회정보</Link></p>
                <p><Link to="/complist/1">대회신청</Link></p>
                <p><Link to="/managerIndex/">관리자페이지</Link></p>
            </MenuWrap>
        </HeaderWrap>
    )
}
const HeaderWrap = styled.div`
    font-family: 'SejonghospitalBold';
    font-size: 1.2em;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    border-bottom: 3px solid black;
`
const MenuWrap = styled.div`
    width: 1000px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    text-align: center;
    align-items: center;
    a{
        color:black;
        text-decoration: none;
    }
    p{
        cursor: pointer;
        padding: 8px;
        &:hover{
            color: #2F4073;
        }
    }
    
`
const LogoWrap = styled.div`
    width: 700px;
    height: 100%;
    align-items: center;
    display: flex;
    a{
        margin-left: 200px;
    }
`
const LogoImg = styled.div`
    width: 200px;
    height: 100px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position : center;
    background-size : contain;
`
export default Header;
