import styled from "styled-components";

export const Wrap = styled.div`
//   margin-bottom: 10px;
`;
export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 79%;
  margin: auto;
  position:relative;
  input{
      font-style: normal;
      font-weight: 400;
      font-size: 16pxpx;
      line-height: 21px;
      margin: 0px;
      color: #grey;
      background: white;
      box-shadow: 0px 4.90168px 17.1559px rgba(0, 0, 0, 0.1);
      border-radius: 50px;
      border:none;
      width: 100%;
      height:50px;
      padding-left:10pxpx;
      position:relative;
      outline: none;
      padding-right: 57px;
      text-align: center;
  }
`;
export const Icon = styled.div`
  position: absolute;
  right: 20px;
  pointer: cursor;
  svg {
    color: #04A454;
    font-size: 15pxpx;
  }
`;
