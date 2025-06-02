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
      box-shadow: 5px 5px 1px #f8f8f8 !important;
      background-color: #1a1a1a !important;
      border-radius: 0px;
      transition: all 0.2s ease-in-out;
       &:hover {
        transform: translateY(-10px);
        box-shadow: 10px 10px 1px #f8f8f8 !important;
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
      background-color: #1a1a1a !important;
      border: 1px #797979 solid;
      font-weight: 400 !important;
      background-color: #1a1a1a !important;
      transition: all 0.2s ease-in-out;
       &:hover {
        cursor: pointer;       
        transform: translateY(-5px);
        box-shadow: 7px 7px 1px #f8f8f8 !important;
      }
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
            width: 35%;
          }
        }
      }
  }
@media (max-width: 860px) and (orientation: landscape) {
    .main {
      
        .cards-container {
          justify-content: space-evenly;
          .tech-card {
            width: 100%;
            .card-content {
              justify-content: space-evenly;
            }
          }
        }
    }
}
  @media (max-width: 768px) {
    padding: 3rem rem;
    .secondary h2 {
      margin-bottom: 1.5rem;
      div {
        padding: 8px;
      }
    }
    .main h1, .secondary h1 {
      font-size: 2.5rem;
      margin-top: rem;
      .cards-container {
          .tech-card {

            background-color: red !important;
          }
      }
    }

   
    .main {
        .cards-container {
          .tech-card {
            width: 100%;
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
