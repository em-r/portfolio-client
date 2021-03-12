import styled from 'styled-components';

export const Summary = styled.section`
    display: flex;
    flex-direction: column;
    border: 3px solid ${({ theme }) =>  theme === "dark" ? "#FFFFFF" : "#000000"};
    .body {
        display: flex;
        flex-direction: column;
        flex: 3;
        padding: 0 10px;
        header {
            font-family: Mosk, sans-serif;
        }
        @media (min-width: 600px){
            padding: 0 10px;
        }
    }
    .meta-data {
        font-family: Mosk, sans-serif;
        display: flex;
        flex-direction: row;
        gap: 10px;
        background: #0555ea;
        color: #FFFFFF;
        justify-content: space-evenly;
        p {
            display: flex;
            align-items: center;
            gap: 5px;
            justify-content: center;
        }

        @media (min-width: 600px){
            flex-direction: column;
            padding: 0 5px;
        }
    }
    @media (min-width: 600px){
        flex-direction: row;
        align-items: stretch;
    }
`;

export const BlogTags = styled.ul`
    display: flex;
    gap: 5px;
    list-style: none;
    padding-left: 0;
    margin-top: auto;
    .blog-tag {
        background: #f2f2f2;
        color: #1d4354;
        padding: 0 10px;
        border-radius: 12px;
    }
`;