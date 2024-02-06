import styled from "styled-components";

const CompForm = () =>{
    return(
        <FormWrap>
            <Form>
                <p>대회이름</p>
                <CommonInput placeholder="대회이름을 입력해주세요."></CommonInput>
                <p>대회일자</p>
                <CommonInput type = 'date' placeholder="대회일자를 입력해주세요."></CommonInput>
                <p>신청기간</p>
                <DateWrap>
                    <DateInput type = 'date'></DateInput>
                    <p>~</p>
                    <DateInput type = 'date'></DateInput>
                </DateWrap>
                <p>얼리버드</p>
                <DateWrap>
                    <DateInput type = 'date'></DateInput>
                    <p>~</p>
                    <DateInput type = 'date'></DateInput>
                </DateWrap>
                <p>앱솔여부</p>
                <CommonInput placeholder="얼리버드를 입력해주세요."></CommonInput>
                <p>노기여부</p>
                <CommonInput placeholder="얼리버드를 입력해주세요."></CommonInput>
                <p>매트갯수</p>
                <CommonInput placeholder="얼리버드를 입력해주세요."></CommonInput>
                <p>카테고리</p>
                <CommonInput placeholder="카테고리를 입력해주세요."></CommonInput>
                <p>체급</p>
                <CommonInput placeholder="카테고리를 입력해주세요."></CommonInput>
                <button type="sunmit"></button>
            </Form>
        </FormWrap>
    );
}
const DateWrap = styled.div`
    display: flex;
    width: 600px;
    margin: 0 auto;
    /* border: 1px solid black; */
    justify-content: space-between;
`
const DateInput = styled.input`
    width: 250px;
    margin-bottom: 3px;
    height: 40px;
    font-family: 'GmarketSansMedium';
    text-align: center;
    font-size: 1.2em;
`
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
`
const CommonInput = styled.input`
    width: 600px;
    margin-bottom: 3px;
    height: 40px;
    font-family: 'GmarketSansMedium';
    text-align: center;
    font-size: 1.2em;
` 
export default CompForm;