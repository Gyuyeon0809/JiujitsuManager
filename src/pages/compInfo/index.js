/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-22
페이지명: 페이지 상세페이지
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import Layout from "../../_layouts/_layout";
import Title from "../../components/_CommonCP/title";
import CompTable from "../../components/compInfoCP/compInfoCP/compTable";
const CompInfo = () =>{
    return(
        <Layout>
            <Title
                title = '2024 UNION FG 창원오픈'
            ></Title>
            <CompTable></CompTable>
        </Layout>
    );
}
export default CompInfo;
