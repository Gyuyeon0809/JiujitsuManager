/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-22
페이지명: 싥시간 매트 현황페이지
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import Layout from "../../_layouts/_layout";
import Title from "../../components/_CommonCP/title";
import MatContain from "../../components/matCheakInfoCP/matContainCP/matContain";
const MatCheakPage = () =>{
    return(
        <Layout>
        <Title
            title = '2024 UNIONFG 창원오픈'
            subTitle = '실시간매트현황'
        ></Title>
        <MatContain/>
        </Layout>
    );
}
export default MatCheakPage;