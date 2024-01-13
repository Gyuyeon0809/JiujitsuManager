/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-12
페이지명: 슬라이더
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import left from "./icon/angle-left-solid.svg"
import right from "./icon/angle-right-solid.svg"
const SlickSlider = ({children, height, width, arrow, dots=true, num=1, autoplay = 3500, autoplayBool = true, arrowWidth = "-3%", slideNum = 1, arrowHeight = "none"}) =>{
    const settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: num,
        slidesToScroll: slideNum,
        autoplay: autoplayBool,
        autoplaySpeed: autoplay,
        pauseOnHover: true,
        nextArrow: (
            <NextTo arrow={arrow} arrowWidth={arrowWidth} arrowHeight = {arrowHeight}>
              <img src={right} alt="주짓수 이미지"></img>
            </NextTo>
          ),
          prevArrow: (
              <PrevTo arrow={arrow} arrowWidth={arrowWidth} arrowHeight = {arrowHeight}>
                  <img src={left} alt="주짓수 이미지"></img>
            </PrevTo>
          ),
      };
  return(
    <Wrap>
        <StyledSlider {...settings} height={height} width={width}>
            {children}
        </StyledSlider>
    </Wrap>
  );  
};
const StyledSlider = styled(Slider)`
  height: ${(props)=>props.height || "700px"};
  width: ${(props)=>props.width || "1600px"};
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;
const Wrap = styled.div`
    margin: 0 auto;
  `
const PrevTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: ${(props)=>props.arrowWidth};
  top: ${(props)=>props.arrowHeight};
  z-index: ${(props = true)=>props.arrow === false ? -1 : 99};
  opacity: ${(props = true)=>props.arrow === false ? 0 : 1};
  &img{
    width: 30px;
  }
  `
const NextTo = styled.div`
  width: 30px;
  height: 30px;
  top: ${(props)=>props.arrowHeight};
  position: absolute;
  right: ${(props)=>props.arrowWidth};
  z-index: ${(props = true)=>props.arrow === false ? -1 : 99};
  opacity: ${(props = true)=>props.arrow === false ? 0 : 1};
  &img{
    width: 30px;
  }
`
export default SlickSlider;