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
  }

  .card {
    border-radius: 0px;
    padding: 5px;
     width: 8rem;
      height: 8rem;
    img {
        width: 60px;
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