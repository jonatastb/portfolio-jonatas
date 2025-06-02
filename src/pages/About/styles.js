import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #f8f8f8;
  height: auto;
  padding: 5rem 15rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  div {
    width: 50%;
  }

  .image {
    img {
      border: 40px #1a1a1a solid;
      max-width: 30rem;
      width: 70%;
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      cursor: pointer;
      img {
        transform: translate(-10px, -10px);
        box-shadow: 1px 1px 3px #797979 !important;
      }
    }
  }

  .informations {
    h2 {
      font-size: 5rem;
    }
    
    p {
      font-family: 'Poppins', sans-serif;
      margin: 2rem 0;
      line-height: 1.5rem;
      width: 80%;
      font-size: 1.1rem;
      font-weight: 300;
    }
  }

  /* Responsividade */
  @media (max-width: 1440px) {
    padding: 3rem 10rem;
    
    div {
      width: 100%;
    }

    .informations {
    h2 {
      font-size: 5rem;
    }
    
    p {
      font-family: 'Poppins', sans-serif;
      margin: 2rem 0;
      line-height: 1.5rem;
      width: 80%;
      font-size: 1.1rem;
      font-weight: 300;
    }
  }
  }
  
  @media (max-width: 1200px) {
    padding: 3rem 10rem;
    
    div {
      width: 100%;
    }

    .informations {
      h2 {
        font-size: 2rem;
      }
      
      p {
        font-family: 'Poppins', sans-serif;
        margin: 2rem 0;
        line-height: 1.5rem;
        width: 80%;
        font-size: 1rem;
        font-weight: 300;
      }
    }
  @media (max-width: 860px) and (orientation: landscape) {
       flex-direction: column;
       .image {
        margin-bottom: 1rem; 
       }
  }
  @media (max-width: 768px) {
    padding: 3rem 5rem;
    flex-direction: column;

    .informations h2 {
     margin-top: 3rem;
      font-size: 3rem;
    }
    .informations p {
      font-size: 1rem;
      width: 90%;
    }
    .image{
      display: flex;
      justify-content: center;
      img {
        border: 50px #1a1a1a solid;
      }
    } 
    
  }

  @media (max-width: 480px) {
    padding: 2rem;
    .informations h2 {
      margin-top: 2rem;
      font-size: 2.5rem;
    }
    .informations p {
      font-size: 0.9rem;
      width: 100%;
    }
    .image img {
      border: 50px #1a1a1a solid;
    }
  }
`;
