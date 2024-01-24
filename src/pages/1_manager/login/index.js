import Layout from "../../../_layouts/_layout";
import LoginForm from "../../../components/_CommonCP/loginForm";
import Title from "../../../components/_CommonCP/title";

const LoginPage = () =>{
    return(
        <Layout>
            <Title
                title = '관리자 페이지 로그인 창'
                subTitle = '권한이 없는 관리자는 접근이 불가합니다.'
            >

            </Title>
            <LoginForm>
            </LoginForm>
        </Layout>
    );
}
export default LoginPage;