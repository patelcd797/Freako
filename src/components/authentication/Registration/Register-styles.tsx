import styled from 'styled-components'

export const NameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 783px){
        display: block;
        > div > div > input{
            padding: 4%;
        }
         
    }
`;
