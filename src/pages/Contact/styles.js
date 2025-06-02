import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: #1a1a1a;
  height: 50vh;
  padding: 5rem 15rem;
  display: flex;
  flex-direction: column;
  
  h2 {
    color: #f8f8f8;
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 6rem;
  }

  #card-contacts {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .card {
    background-color: #1a1a1a;
    border: 1px solid #797979;
    box-shadow: 5px 5px 1px #f8f8f8 !important;
    color: #f8f8f8;
    border-radius: 0px;
    padding: 5px;
    min-width: 8rem;
    min-height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 60px;
    }
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 10px 10px 1px #f8f8f8 !important;
    }
  }

  /* Responsividade */
  @media (max-width: 1200px) {
    padding: 4rem 10rem;

     .card {
      width: 7rem;
      height: 7rem;
      img {
        width: 40px;
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 6rem 5rem;
    h2 {
      font-size: 2.5rem;
      margin-bottom: 4rem;
    }
    #card-contacts {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      gap: 2rem;
    }

    .card {
      width: 6rem;
      height: 6rem;
      img {
        width: 30px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 3rem 3rem;
    height: auto;
    h2 {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
  }
`;