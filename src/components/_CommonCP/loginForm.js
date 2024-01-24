import styled from "styled-components";
const LoginForm = () =>{
    return(
        <FormWrap>
            <Form>
                <input placeholder="아이디를 입력해주세요."
                       type="text"
                ></input>
                <input placeholder="비밀번호를 입력해주세요." 
                       type="password"
                ></input>
                <button>로그인</button>
            </Form>
        </FormWrap>
    )   ;
}
const FormWrap = styled.div`
    width: 700px;
    height: 200px;
    margin: 0 auto;
    margin-top: 50px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    input{
        margin-top: 10px;
        height: 40px;
        font-size: 1.2em;
        font-family: 'GmarketSansMedium';
        border-radius: 5px;
    }
    button{
        margin-top: 10px;
        height: 50px;
        background-color: black;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        font-family: 'GmarketSansMedium';
        font-size: 1em;
    }
`
export default LoginForm;