import styled from "@emotion/styled";

export const Label = styled.label`
    dispay: block;
    width: 100%;
    margin-top: 30px;
    font-size: 1.3rem;
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
    margin-top: 5px;
    width: 95%;
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