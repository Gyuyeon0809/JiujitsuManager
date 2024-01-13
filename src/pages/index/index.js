/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-12
페이지명: 메인페이지
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import Layout from '../../_layouts/_layout.js';
import AboutContents from '../../components/indexCP/contentsBox/aboutContents.js';
import MainSlide from '../../components/indexCP/slideCP/mainSlide.js';
const Index = () =>{
    return(
        <Layout>
            <MainSlide>
            </MainSlide>
            <AboutContents></AboutContents>
        </Layout>
    );
}
export default Index;