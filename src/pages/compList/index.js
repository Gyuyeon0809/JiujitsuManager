/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-12
페이지명: 대회리스트 페이지
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import Layout from "../../_layouts/_layout";
import Title from "../../components/_CommonCP/title";
import CompList from "../../components/compInfoCP/compListCP/compList";
const CompListPage = () =>{
    return(
        <Layout>
            <Title 
                    title = '주짓수 대회 목록'
                    subTitle = '주짓수 대회를 선택해주세요.'
            />
            <CompList>
            </CompList>
        </Layout>
    );
}
export default CompListPage;