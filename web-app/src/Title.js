import React from 'react'
import styled from 'styledcomponents'
const Title = ({ className, text }) => (
        <h1 className={className}>{ text }</h1>)
        const StyledTitle = styled(Title)`__    color: #B8161F;__    font: 70px; __    text-align: center; 
__    @media (min-width: 700px) {__        text-align: left; __    }__`; 
export default StyledTitle 