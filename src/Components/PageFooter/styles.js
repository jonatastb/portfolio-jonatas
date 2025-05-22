import styled from "styled-components";

export const PageFooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
  width: 95%;
  margin: 0.5rem auto;
  margin-bottom: 1rem;
  padding: 0.8rem;
  background-color: ${props => (props.color === 'dark' ? '#f8f8f8' : '#1a1a1a')};;
  color: ${props => (props.color === 'dark' ? '#1a1a1a' : '#f8f8f8')};;
  border-top: 2px solid ${props => (props.color === 'dark' ? '#1a1a1a' : '#f8f8f8')};
  border-bottom: 2px solid ${props => (props.color === 'dark' ? '#1a1a1a' : '#f8f8f8')};
  font-family: 'Arvo';
`