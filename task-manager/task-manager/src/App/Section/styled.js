import { styled } from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.color.white};
  box-shadow: 1px 1px 5px ${({ theme }) => theme.color.grey};
  margin: 10px 0;
`;
