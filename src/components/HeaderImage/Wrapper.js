import styled from 'styled-components';

const Wrapper = styled.div`
  border: 5px solid #27658f;
  background-color: #27658f;
  border-radius: 50%;
  margin: 0 0 15px 80px;
  overflow: hidden;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;

  img {
    padding: 5px;
    border-radius: 50%;
    margin-top: 8px;
  }
`;

export default Wrapper;