import React from 'react';
import styled from 'styled-components';
import Header from './Header';
const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  background-color: #fbf9f7;
  .container {
    width: 1000px;
    margin-top: 100px;
    .head {
      padding-bottom: 10px;
      span:first-child {
        font-weight: 350;
        font-size: 1.75rem;
        margin-right: 30px;
      }
      span:nth-child(2) {
        font-size: 1.25rem;
      }
    }
    .section {
      display: flex;
      .column {
        flex-grow: 1;
        margin-right: 10px;
        height: 550px;
        width: 490px;
      }
      .column.first {
        background: white;
        padding: 0 30px;
        .part1,
        .part2 {
          padding-top: 30px;
          h4 {
            font-size: 1.5rem;
            padding-bottom: 30px;
          }
          span:first-child {
            font-size: 1.5rem;
          }
          div {
            display: flex;
            justify-content: space-between;
            padding-bottom: 30px;
            border-bottom: 1px solid black;
          }
        }
        .part3 {
          ul {
            padding-top: 30px;
            font-size: 1.2rem;
            li {
              padding-bottom: 10px;
              display: grid;
              grid-template-columns: 1fr 3fr 1.5fr;
            }
          }
        }
      }
    }
    .second {
      .part1 {
        background: white;
        padding: 40px 30px;
        margin-bottom: 10px;
        height: 300px;
        .header {
          font-size: 1.5rem;
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
        }
        .pictures {
          display: flex;
          div {
            width: 100px;
            height: 150px;
            background: gray;
            margin-right: 15px;
          }
        }
      }
      .part2 {
        padding: 30px 30px;
        height: 240px;
        background: white;
        .header {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }
        .container-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          .header {
            padding-right: 20px;
            font-size: 1rem;
            display: flex;
            justify-content: space-between;
          }
          .first {
            border-right: 1px solid black;
            .interestPictuer {
              display: flex;
              div {
                width: 70px;
                height: 100px;
                margin-right: 10px;
                background: gray;
              }
            }
          }
          .second {
            padding-left: 10px;
            .comments {
              div {
                width: 100%;
                height: 50px;
                background: gray;
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
`;
const MyPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <div className="container">
          <div className="head">
            <span>??? ??????</span>
            <span>
              ??? ?????? ??????: 0x3f6c462a37CcBE577175C2653d38956C965???52E75
            </span>
          </div>
          <div className="section">
            <div className="column first">
              <div className="part1">
                <h4>??? ?????? ??????</h4>
                <div>
                  <span>SKKRYPTO</span>
                  <span>????????? ?????? {'>'}</span>
                </div>
              </div>
              <div className="part2">
                <h4>?????? ??????</h4>
                <div>
                  <span>550??????</span>
                  <span>??? ?????? {'>'}</span>
                </div>
              </div>
              <div className="part3">
                <ul>
                  <li>
                    <span>05.08</span> <span>????????? ??????</span>
                    <span>+100??????</span>
                  </li>
                  <li>
                    <span>05.07</span> <span>?????? ??????</span>
                    <span>+200??????</span>
                  </li>
                  <li>
                    <span>05.06</span> <span>?????? ??????</span>
                    <span>-500??????</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column second">
              <div className="part1">
                <div className="header">
                  <span>???????????? ??????</span>
                  <span>??? ?????? {'>'}</span>
                </div>
                <div className="pictures">
                  <div />
                  <div />
                </div>
              </div>
              <div className="part2">
                <div className="header">
                  <span>??? ??????</span>
                </div>
                <div className="container-2">
                  <div className="first">
                    <div className="header">
                      <span>?????? ??????</span>
                      <span>????????? {'>'}</span>
                    </div>
                    <div className="interestPictuer">
                      <div />
                      <div />
                    </div>
                  </div>
                  <div className="second">
                    <div className="header">
                      <span>?????? ??????</span>
                      <span>????????? {'>'}</span>
                    </div>
                    <div className="comments">
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledMain>
    </>
  );
};

export default MyPage;
