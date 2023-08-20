import styled from "styled-components";

const StyledTable = styled.table`
width: 100%;
  th{
    text-align: right;
    text-transform: uppercase;
    color: #bbb;
    font-weight: 600;
    font-size: .8rem;
  }
  td{
    border-top: 1px solid rgba(0,0,0,.1);
  }
`;
const Table = (props) => {
    return (
        <StyledTable {...props} />
    )
}

export default Table


