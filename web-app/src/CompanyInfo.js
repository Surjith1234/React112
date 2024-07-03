import React from 'react'
import styled from 'styledcomponents'
const WrapperCompanyInfo=styled.div`__    background: #E6343B;__`; 
const CompanyName = styled.h3`    margin: 0 0 
1rem 0;__    text-align: center;__    color: #fff; __    @media (min-width: 
700px) {__        text-align: left; __    }__`;
const WrapperList = styled.ul`__    list-style: none;__    margin:0 0 1rem 0;__    padding:0;__    
text-align: center;__    @media (min-width: 700px) {__        text-align: 
left; __    }__`;
const CompanyInfo = () => (__    
<WrapperCompanyInfo>      
   <><CompanyName>Sample Company</CompanyName><WrapperList>__
    <li>Address</li>__            <li>Phone Number</li>__
    <li>Email</li>__        </WrapperList></>  
)
</WrapperCompanyInfo>
;
export default CompanyInfo 