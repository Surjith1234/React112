 import React from 'react'
 import styled from 'styled components'
 import { css } from 'styled-components'
import Form from '../../components/Form'
import Label from '../../components/Label'
import StyledButton from '../../components/Button'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
const WrapperGrid = styled.div`__    
${props => props.full && css`__        grid-column: 1 / 3;__    
`}__`;
const ContactForm = () => (__    <div>      
   <><h3>Email Us</h3><Form>
    <WrapperGrid>
      <Label>Name</Label>
      <Input type="text" name="name" />__
    </WrapperGrid>
    <WrapperGrid>__
      <Label>Company</Label>
      <Input type="text"
        name="company" />__            </WrapperGrid>__
    <WrapperGrid>__                <Label>Email Address</Label>__
      <Input type="email" name="email" />__            </WrapperGrid>__
    <WrapperGrid>__                <Label>Phone Number</Label>__
      <Input type="text" name="phone" />__            </WrapperGrid>__
    <WrapperGrid full>__                <Label>Message</Label>__
      <Textarea name="message" rows="5"></Textarea>__
    </WrapperGrid>__            <WrapperGrid full>__
      <StyledButton>Submit</StyledButton>__            </WrapperGrid>__
  </Form></> 
)   
  </div>
;
  export default ContactForm 