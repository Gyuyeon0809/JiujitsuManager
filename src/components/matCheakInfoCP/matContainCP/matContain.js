import Mat from "../matCP/mat";
import styled from "styled-components";
const MatContain = () =>{
    return(
        <MatWrap>
            <Mat></Mat>
            <Mat></Mat>
            <Mat></Mat>
            <Mat></Mat>
            <Mat></Mat>
            <Mat></Mat>
        </MatWrap>
    );
}
const MatWrap = styled.div`
    display: flex;
    width: 900px;
    margin: 0 auto;
    flex-wrap: wrap;
    /* justify-content: space-between; */
`
export default MatContain;