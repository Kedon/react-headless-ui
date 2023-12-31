import styled from 'styled-components';
import light from '../../styles/themes/light';


export const ProductHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProductActionsButtons = styled.div`
    display: flex;
    align-items: center;
`;


export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.black};

`;

export const TableHeader = styled.th`
  padding: 8px;
  border: 1px solid ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.tertiary};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  border: 1px solid ${props => props.theme.colors.gray};
`;
