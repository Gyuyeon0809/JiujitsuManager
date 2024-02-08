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
import Dropdown from '../dropdownHeader/dropdown';
import React from 'react';

const Header = () =>{
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    return(
        <HeaderWrap>
            <LogoWrap>
            <Link to="/"><LogoImg></LogoImg></Link>
            </LogoWrap>
            <MenuWrap>
                <MenuList>
                    <li><span onClick={e => setDropdownVisibility(!dropdownVisibility)}>대회관련</span>
                    <Dropdown visibility={dropdownVisibility}>
                        <ul>
				            <li><Link to="#">명단정리</Link></li>
				            <li><Link to="#">대진정리</Link></li>
				            <li><Link to="#">매트관리</Link></li>
                            <SpaceText>0</SpaceText>
			            </ul>
                    </Dropdown>
                    </li>
                    <li><span onClick={e => setDropdownVisibility(!dropdownVisibility)}>대회운영</span>
                    <Dropdown visibility={dropdownVisibility}>
                        <ul>
				            <li><Link to="#">경기진행</Link></li>
				            <li><Link to="/matCheak">매트현황</Link></li>
				            <li><Link to="#">시상진행</Link></li>
                            <li><Link to="#">팀순위</Link></li>
			            </ul>
                    </Dropdown>
                    </li>
                    <li><span onClick={e => setDropdownVisibility(!dropdownVisibility)}>관리자관리</span>
                    <Dropdown visibility={dropdownVisibility}>
                        <ul>
				            <li><Link to="#">아이디관리</Link></li>
				            <li><Link to="#">권한관리</Link></li>
                            <SpaceText>0</SpaceText>
                            <SpaceText>0</SpaceText>
			            </ul>
                    </Dropdown>
                    </li>
                </MenuList>
            </MenuWrap>
        </HeaderWrap>

    );
}
const HeaderWrap = styled.div`
    font-family: 'SejonghospitalBold';
    font-size: 1.2em;
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 3px solid black;
    *{
        margin: 0;
        padding: 0;
    }
`
const MenuWrap = styled.div`
    width: 1220px;
    height: 100%;
`
const MenuList = styled.ul`
    /* height: 100%; */
    top:30px;
    position: relative;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 0 auto;
    list-style: none;
    align-items: center;
    justify-items: center;
    width: 100%;
    span{
        cursor: pointer;
    }
    a{
        text-decoration: none;
        color: black;
        font-size: 0.8em;
        font-family: 'GmarketSansMedium';
    }
    >li{
        text-align: center;
        width: 33.33333333333333%; 
    }
`
const SpaceText = styled.li`
    color: white;
    opacity: 0;
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
