import styled from 'styled-components'

export const SportCard = styled.div`
  padding: 2rem 0;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 1rem 0;
  }

  .container {
    position: relative;
  }

  .container .card {
    position: relative;
    width: 320px;
    height: 450px;
    background: #232323;
    border-radius: 20px;
    overflow: hidden;
  }

  .container .card:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #9bdc28;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }
  .container-blue .card-blue:before {
    background: #03a9f4;
  }
  .container-coral .card-coral:before {
    background: #e91e63;
  }

  .container .card:hover:before {
    clip-path: circle(300px at 80% -20%);
  }

  .container .card:after {
    content: 'Nike';
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 25, 0.05);
  }
  .container-blue .card-blue:after {
    color: rgba(0, 204, 255, 0.05);
  }
  .container-coral .card-coral:after {
    color: rgba(252, 93, 238, 0.05);
  }

  .container .card .imgBx {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    width: 100%;
    height: 220px;
    transition: 0.5s;
  }

  .container .card:hover .imgBx {
    top: 0%;
    transform: translateY(0%);
  }

  .container .card .imgBx img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    width: 270px;
  }

  .container .card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
  }

  .container .card:hover .contentBx {
    height: 210px;
  }

  .container .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin: 0;
  }

  .container .card .contentBx .size,
  .container .card .contentBx .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    padding-top: 0;
    padding-bottom: 0;
  }

  .container .card:hover .contentBx .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }

  .container .card:hover .contentBx .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
  }

  .container .card .contentBx .size h3,
  .container .card .contentBx .color h3 {
    color: #fff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
  }

  .container .card .contentBx .size span {
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    transition: 0.5s;
    color: #111;
    border-radius: 4px;
    cursor: pointer;
  }

  .container .card .contentBx .size span:hover {
    background: #9bdc28;
  }
  .container-blue .card-blue .contentBx-blue .size span:hover {
    background: #03a9f4;
  }
  .container-coral .card-coral .contentBx-coral .size span:hover {
    background: #e91e63;
  }

  .container .card .contentBx .color span {
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }

  .container .card .contentBx .color span:nth-child(2) {
    background: #9bdc28;
  }

  .container .card .contentBx .color span:nth-child(3) {
    background: #03a9f4;
  }

  .container .card .contentBx .color span:nth-child(4) {
    background: #e91e63;
  }

  .container .card .contentBx a {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
    margin-top: 0;
  }

  .container .card:hover .contentBx a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;
  }
`
