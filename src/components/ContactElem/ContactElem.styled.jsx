import styled from "@emotion/styled";

export const Contact = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    border-bottom: 1px solid #ccc;

svg {
    width: 20px;
    height: 20px;
    fill: #333;
    margin-right: 10px;
}
`
export const Name = styled.p`
width: 140px;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.2;
    color: #333;
    margin: 0;
`
export const Number = styled.p`
    margin-left: 30px;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.2;
    color: #999;
    
`
export const Button = styled.button`
    display: inline-block;
    padding: 5px 10px;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.2;
    color: #fff;
    background-color: #0074d9;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: auto;

    &:hover {
        background-color: #001f3f;
    }
`