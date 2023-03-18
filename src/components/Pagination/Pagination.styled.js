import styled from 'styled-components';

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const PaginationBtn = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
  &:hover {
    border-color: rgba(72, 37, 209, 255);
    color: rgba(72, 37, 209, 255);
  }
`;
