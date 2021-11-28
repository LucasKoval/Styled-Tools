import styled from 'styled-components'

export const RecycleBinIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .trash {
    background: #ff6873;
    width: 66px;
    height: 80px;
    display: inline-block;
    margin: 0 auto;
    position: relative;
    -webkit-border-bottom-right-radius: 6px;
    -webkit-border-bottom-left-radius: 6px;
    -moz-border-radius-bottomright: 6px;
    -moz-border-radius-bottomleft: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .trash:after {
    position: absolute;
    left: -99px;
    right: 0;
    bottom: -50px;
    width: 300px;
  }

  .trash span {
    position: absolute;
    height: 12px;
    background: #ff6873;
    top: -19px;
    left: -10px;
    right: -10px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform: rotate(0deg);
    transition: transform 250ms;
    transform-origin: 19% 100%;
  }
  .trash span:after {
    content: '';
    position: absolute;
    width: 27px;
    height: 7px;
    background: #ff6873;
    top: -10px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform: rotate(0deg);
    transition: transform 250ms;
    transform-origin: 19% 100%;
    left: 27px;
  }

  .trash i {
    position: relative;
    width: 5px;
    height: 50px;
    background: #fff;
    display: block;
    margin: 14px auto;
    border-radius: 5px;
  }
  .trash i:after {
    content: '';
    width: 5px;
    height: 50px;
    background: #fff;
    position: absolute;
    left: -18px;
    border-radius: 5px;
  }
  .trash i:before {
    content: '';
    width: 5px;
    height: 50px;
    background: #fff;
    position: absolute;
    right: -18px;
    border-radius: 5px;
  }

  .trash:hover span {
    transform: rotate(-45deg);
    transition: transform 250ms;
  }
`
