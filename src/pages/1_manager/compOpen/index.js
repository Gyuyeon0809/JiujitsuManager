import Layout from "../../../_layouts/_layout";
import Title from "../../../components/_CommonCP/title";
import CompForm from "../../../components/compOpenCP/compForm/compForm";

const CompOpenPage = () =>{
    return(
        <Layout>
            <Title title = '대회 등록 페이지'
                   subTitle = '아래 양식에 맞추어 대회를 등록해주세요.'
            ></Title>
            <CompForm></CompForm>
        </Layout>
    );
}
export default CompOpenPage;