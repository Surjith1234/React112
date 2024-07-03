 import React from 'react';
 import styled from 'styledcomponents'
 import { css } from 'styled-components'
 const Container = styled.div`__    margin-left: auto; __    margin-right: auto;__    max
width: 1170px;      ${props => props.wrapper && css`__        box
shadow: 0 0 20px 0 rgba(184, 22, 31, 0.3);__        > * {__            
padding: 1em;         }    __        @media (min-width: 700px) {__            
display: grid;             grid-template-columns: 1fr 2fr; __            > * {__                
padding: 2em;             }        }__    `}__`; 
export default Container