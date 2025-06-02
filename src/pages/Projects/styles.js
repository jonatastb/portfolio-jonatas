import styled from "styled-components";

export const ProjectsContainer = styled.div`
  background-color: #f8f8f8;
  height: auto;
  padding: 5rem 10rem;

  .cards-projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  h2 {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .cards {
    padding: 15px;
    margin: 1rem;
    width: 25%;
    min-height: 16rem;
  }
  .card {
    min-height: 100%;
    border-radius: 0px;
    a {
      height: 100%;
    }

    transition: all 0.2s ease-in-out;
    &:hover {
      cursor: pointer;       
      transform: translate(-5px, -5px);
      box-shadow: 1px 1px 3px #797979 !important;
    }
  }

  .stack {
    font-family: 'Poppins', sans-serif !important;
    font-weight: 600 !important;
  }

  .Front-end {
    color: #96cc33;
  }
  .Back-end {
    color: #c44739;
  }
  .Full-stack {
    color: #3cb7c2;
  }

  .tags {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .tag {
      margin: 0.150rem 0.2rem;
    }
  }

  /* Responsividade */
  @media (max-width: 1200px) {
    padding: 4rem 8rem;
    .cards {
      min-width: 50%;
    }
  }
  @media (max-width: 860px) and (orientation: landscape) {
    .cards {
      min-width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 3rem 5rem;
    h2 {
      font-size: 2.5rem;
    }
    .cards {
      min-width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem;
    h2 {
      font-size: 2rem;
    }
    .cards {
      width: 90%;
    }
  }
`;