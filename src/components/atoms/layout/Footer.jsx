import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy;2021 takiwaka Inc.</SFooter>;
};

const SFooter = styled.footer`
  width: 100%;
  background-color: #cd658d;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
`;
