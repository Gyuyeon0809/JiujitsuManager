import Layout from "../../../_layouts/_layout";
import Title from "../../../components/_CommonCP/title";
import CategorySelect from "../../../components/summary/makeSummaryPage/categorySelect";

const MakeSummaryPage = () =>{
    return(
        <Layout>
             <Title
                title = '명단정리 페이지'
                subTitle = '원하는 카테고리 입력 후 명단정리 버튼을 클릭해주세요.'
            />
            <CategorySelect/>
        </Layout>
    );
}
export default MakeSummaryPage; 