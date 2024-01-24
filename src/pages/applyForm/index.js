/**********************
개발명  : CMS JIUJITSU
개발일자: 2024-01-13
페이지명: 대회 신청페이지
개발자명: 김규연
© 2024. 김규연 Co. all rights reserved.
*********************/
import Layout from "../../_layouts/_layout";
import Title from "../../components/_CommonCP/title";
import ApplyForm from "../../components/applyFormCP/applyForm";
const ApplyFormPage = () =>{
    return(
        <Layout>
        <Title
            title='2024 UnionFG 창원오픈'
            subTitle = '대회 신청양식에 따라 작성 후 제출해 주세요.'
        >
        </Title>
        <ApplyForm></ApplyForm>
        </Layout>
    );
}
export default ApplyFormPage;