/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-12
페이지명: 메인 슬라이더
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import SlickSlider from './slider'
import styled from "styled-components";
import banner from "../../../contents/images/banner1.jpg";
import banner2 from "../../../contents/images/banner2.jpg";
import banner3 from "../../../contents/images/banner3.jpg";
const MainSlide = () =>{
    return(
          <SlickSlider height="800px">
            <SliderContent>
              <img src={banner} alt="배너 이미지"></img>
            </SliderContent>
            <SliderContent>
              <img src={banner2} alt="배너2 이미지"></img>
            </SliderContent>
            <SliderContent>
              <img src={banner3}alt="배너3 이미지"></img>
            </SliderContent>
          </SlickSlider>
    );
    
}
const SliderContent = styled.div`
  margin: 0 auto;
  overflow: hidden;
  height: 800px;
  &>img{
    object-fit:cover;
    width: 100%;
    height: 100%;
  }
`
export default MainSlide;