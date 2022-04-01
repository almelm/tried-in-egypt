import styled from "@emotion/styled";

export const Input = styled.input`
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  margin: 2rem 0;
  font-size: 2.4rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  display: block;
  width: 100%;
  outline: none;
  color: #fff;
  background-color: rgba(0,0,0,0.5);
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,0.5);
`;

export const Button = styled.button`
  color: #fff;
  background-color: rgba(0,0,0,0.5);
  border-color: #007bff;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  line-height: 1.5;
  height: calc(1.5em + 1rem + 13px);
  border-radius: 0.25rem;
  user-select: none;
  &:hover {
    color: #fff;
    background-color: rgba(0,0,0,0.1);
    border-color:rgba(0,0,0,0.5);
    cursor: pointer;
  }
  &:active {
    background-color: #0062cc;
    border-color: #005cbf;
  }
`;