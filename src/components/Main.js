import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainHeader = styled.header`
  padding: 80px;
  display: flex;
  justify-content: space-between;
  color: white;
  h1 {
    text-shadow: 0px 2px 5px black;
    font-weight: bold;
    font-size: 3rem;
  }
  ul {
    display: flex;
    li {
      padding: 0 20px;
      color: black;
    }
  }
`;

const StyledMain = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('https://s3-alpha-sig.figma.com/img/9ee2/f09b/e38830be7860d2bf18b936775037b474?Expires=1621209600&Signature=HtC8B1D2XKxC-i2zD3Jcwm0IUIjDO9YcJ8UskpJI7CLdQUYVWScClneDHWtPzfLY09SMMNqH66mgU3ZHrsX~oCXTh5BxRkCbHrJykFK-7XIi-78rWUCqKqYj1z~hh-d-MJ6wMcHgA2Uhqq12y78KHMGXp7oEKPP~z5GjPCvlfWwOPi9urjFvYCm1tD-rPQFmTasbE4s3onvARQw8pu~q4LIFZcFajrs-tn8EkvIE12bIK47nLXz3KI-lgflojxc29XZUNd9ha2KercPRX0G1v2X1WAsBbbK8b~~nx1Jw~X-sVcwq6Zev8gZv1CZbRM9aAcjte2RGhOizEYeN4wtNlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
  background-repeat: no-repeat;
  background-size: cover;

  div:first-child {
    height: 100%;
    width: 100%;
    background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 0, 0.5)
    );
    text-opacity: 1;
  }
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 0 80px;
`;

const StyledArticle = styled.article`
  width: 20rem;
  height: 20rem;
  background: rgba(192, 192, 192, 0.5);
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    margin: 30px 0;
  }
  .description {
    font-size: 1.125rem;
    padding: 0 10px;
    line-height: 1.5rem;
    height: 10rem;
    display: flex;
    align-items: center;
  }
  .button {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      padding: 1rem 3rem;
      background: rgba(196, 196, 196);
    }
  }
`;

const MainHeader = () => {
  return (
    <StyledMainHeader>
      <h1>
        SKKU
        <br />
        NFT
        <br />
        Gallery
      </h1>

      <ul>
        <Link to="/guide" style={{ textDecoration: 'none' }}>
          <li>???????????????</li>
        </Link>
        <Link to="/mypage" style={{ textDecoration: 'none' }}>
          <li>My Page</li>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <li>Log In</li>
        </Link>
      </ul>
    </StyledMainHeader>
  );
};

const Main = () => {
  return (
    <StyledMain>
      <div>
        <MainHeader />
        <StyledSection>
          <StyledArticle>
            <h1>(??????)NFT ?????????</h1>
            <div className="description">
              <p>
                (??????) ?????? ?????????????????? ????????? ??????, ??????, ~?????? ????????????
                ???????????????. ???????????? ???????????? ?????? ????????? ??????????????? ????????????
                ????????? ??? ????????????.
              </p>
            </div>
            <div className="button">
              <Link
                to="/nftgallery"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <p>Go</p>
              </Link>
            </div>
          </StyledArticle>
          <StyledArticle>
            <h1>?????? ??????</h1>
            <div className="description">
              <p>
                ?????????????????? ????????? ???????????? ?????? ??? ??? ????????????. NFT??? ????????????
                ???????????????.
              </p>
            </div>
            <div className="button">
              <Link
                to="/author"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <p>Go</p>
              </Link>
            </div>
          </StyledArticle>
          <StyledArticle>
            <h1>?????? DB</h1>
            <div className="description">
              <p>
                ????????????????????? ????????? ?????? ?????????????????? DB????????? ???????????????.{' '}
              </p>
            </div>
            <div className="button">
              <p>Go</p>
            </div>
          </StyledArticle>
        </StyledSection>
      </div>
    </StyledMain>
  );
};

export default Main;
