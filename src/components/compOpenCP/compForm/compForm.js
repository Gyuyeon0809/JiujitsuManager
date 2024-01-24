import styled from "styled-components";
const CompForm = () =>{
    return(
        <FormWrap>
            <Form>
                <p>대회이름</p>
                <input placeholder="대회이름을 입력해주세요."></input>
                <p>대회일자</p>
                <input placeholder="대회일자를 입력해주세요."></input>
                <p>신청기간</p>
                <input placeholder="신청기간을 입력해주세요."></input>
                <p>얼리버드</p>
                <input placeholder="얼리버드를 입력해주세요."></input>
                <p>카테고리</p>
                <input placeholder="카테고리를 입력해주세요."></input>
                <p>체급</p>
                <input placeholder="카테고리를 입력해주세요."></input>
                <p>앱솔여부</p>
                <input placeholder="얼리버드를 입력해주세요."></input>
                <p>노기여부</p>
                <input placeholder="얼리버드를 입력해주세요."></input>
                <p>매트갯수</p>
                <input placeholder="얼리버드를 입력해주세요."></input>
            </Form>
        </FormWrap>
    );
}
const FormWrap = styled.div`
    /* border: 1px solid black; */
    width: 1100px;
    margin: 0 auto;
    min-height: 200px;
    text-align: center;

`
const Form = styled.form`

    p{
        margin: 2px;
        font-family: 'GmarketSansMedium';
        font-size: 1.1em;
    }
    input{
        width: 600px;
        margin-bottom: 3px;
        height: 40px;
        font-family: 'GmarketSansMedium';
        text-align: center;
        font-size: 1.2em;
    }
`
export default CompForm;