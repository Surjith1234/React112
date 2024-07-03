import React, { Component } from 'react'
import Container from '../../components/Container'
import Title from '../../components/Title'
import CompanyInfo from '../Form/CompanyInfo'
import ContactForm from '../Form/ContactForm'
import Index from '../Form/Index'
class Main extends Component {    render () 
{     
       return (__            <Container>
                       <><Title text="Title" /><Container wrapper>                    <CompanyInfo />
               <ContactForm />               </Container></>   
       );       
                 </Container>__            
}
}
export default Main 