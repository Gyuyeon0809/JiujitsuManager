import styled from "styled-components";

const CategorySelect = () =>{
    return(
        <Wrap>
            <CategorySelectBox>
                <option>남성성인부</option>
                <option>초등부고학년</option>
                <option>초등부저학년</option>
                <option>dwd</option>
                <option>dwd</option>
            </CategorySelectBox>
        </Wrap>
    );
}
const CategorySelectBox = styled.select`
    width: 500px;
    height: 30px;
    text-align: center;
`
const Wrap = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
`
export default CategorySelect;