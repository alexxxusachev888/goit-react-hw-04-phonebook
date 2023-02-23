import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    margin: 0 auto;
`
export const Label = styled.label`
    display: inline-block;
    margin-top: 20px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    color: #333;
    transition: all 0.3s ease;
    &::hover {
        color: #0074d9;
        cursor: pointer;
    }
    &:focus-within {
        color: #0074d9;
    }
`
export const Input = styled.input`
    display: block;
    margin-top: 5px;
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    color: #333;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: #0074d9;
        box-shadow: 0 0 0 3px rgba(0, 116, 217, 0.3);
      }
`
export const Button = styled.button`
    display: inline-block;
    padding: 10px 20px;
    margin-top: 30px;
   
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    border-color: #0260E8;
    background-color: #FFFFFF;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      background-color: #005ca9;
      border-color: #005ca9;
      color: #F2F8FD;
    }
   
`