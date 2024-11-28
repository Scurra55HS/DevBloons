import { FooterContainer, FooterSection, ContactSection, FollowUsSection, FooterBottom, IconLink, ImgFooter, TitleF } from "../../Styles/Footer";
import bru from '../../img/bruGit.jpg'
import caio from '../../img/caioGit.jpg'
import mm from '../../img/mmGit.jpg'
import pedro from '../../img/pedroGit.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <ContactSection>
          <h3>Entre em Contato:</h3> <br/>
          <p>Email: <a href="mailto:contato@devbloons.com" style={{ color: '#ffffff' }}>contato@devbloons.com</a></p> <br/>
          <p>Telefone: +55 (82) 99999-9999</p>
        </ContactSection>
        <TitleF>DEVBLOONS</TitleF>
        <FollowUsSection>
          <h3>Siga-nos:</h3>
          
          <IconLink href="https://github.com/Scurra55HS" target="_blank">
            <ImgFooter src={bru}/>
          </IconLink>

          <IconLink href="https://github.com/caioliweira" target="_blank">
            <ImgFooter src={caio}/>
          </IconLink>

          <IconLink href="https://github.com/MANOELOMENA" target="_blank">
            <ImgFooter src={mm}/>
          </IconLink>

          <IconLink href="https://github.com/Zangao69" target="_blank">
            <ImgFooter src={pedro}/>
          </IconLink>

        </FollowUsSection>
      </FooterSection>
      <FooterBottom>
        <p>© 2024 - Devbloons Security. All rights reserved</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
