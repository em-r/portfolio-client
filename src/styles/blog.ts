import styled from 'styled-components';

export const Summary = styled.section`
    display: flex;
    flex-direction: column;
    border: 3px solid ${({ theme }) =>  theme === "dark" ? "#FFFFFF" : "#000000"};
    .body {
        display: flex;
        flex-direction: column;
        flex: 3;
        header {
            margin: 0;
        }
        @media (min-width: 600px){
            padding: 0 10px;
        }
    }
    .meta-data {
        display: flex;
        flex-direction: row;
        gap: 10px;
        background: #0555ea;
        color: #FFFFFF;
        justify-content: center;
        p {
            display: flex;
            align-items: center;
            gap: 5px;
            justify-content: center;
        }

        @media (min-width: 600px){
            flex-direction: column;
        }
    }
    @media (min-width: 600px){
        flex-direction: row;
        align-items: stretch;
    }
`;