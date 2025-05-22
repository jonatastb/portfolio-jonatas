import styled from "styled-components";

export const TechnologiesContainer = styled.div`
  background-color: #1a1a1a;
  height: auto;
  padding: 5rem 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .main, .secondary {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;

    h2 {
      color: #f8f8f8;
      font-family: 'Poppins', sans-serif;
    }

    h1 {

      text-align: center;
      font-size: 3.5rem;
      color: #f8f8f8;
      margin-bottom: 1rem;
      
    }

    .cards-container {
      display: flex;
      flex-wrap: wrap;
      max-width: 100%;
      padding: 0.5rem;
      justify-content: center;
    }

    .tech-card {
      min-width: 200px;
      margin: 10px !important;
      user-select: none;
      border: 1px #797979 solid;
      background-color: #f8f8f8 !important;
      border-radius: 0px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .main {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .secondary {
    margin-top: 2rem;
    margin-bottom: 2rem;
    .cards-container {
      flex-wrap: wrap;
      align-content: center;
    }

    .tech-card {
      min-width: auto;
      padding: 1px 10px ;
      box-shadow: 5px 5px 1px #f8f8f8 !important;
      border: 1px #797979 solid;
      font-weight: 400 !important;
      background-color: #1a1a1a !important;
    }
  }
  @media (max-width: 1440px) {
      padding: 3rem 10rem;
  }
  /* Responsividade */
  @media (max-width: 1200px) {
    padding: 3rem 10rem;
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
        .cards-container {
          display: flex;
          flex-wrap: wrap;
          .tech-card {
            width: 25%;
          }
        }
      }
  }

  @media (max-width: 768px) {
    padding: 3rem rem;
    .main h1, .secondary h1 {
      font-size: 2.5rem;
      margin-top: 1rem;
      .cards-container {
          .tech-card {
            background-color: red !important;
          }
      }
    }

   
    .main {
        .cards-container {
          .tech-card {
            width: 40%;
          }
        }
      }
  }

  @media (max-width: 480px) {
    padding: 2rem;
    .main h1, .secondary h1 {
      font-size: 2rem;
    }
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
        .cards-container {
          .tech-card  {
            width: 100%;
          }
        }
      }
  }
`;
