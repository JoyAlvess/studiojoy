import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SubTitle from '../components/subTitle';
import Button from '../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import SocialIcons from '../components/socialIcons';

const Icon = styled.span`
    width: 1.5em;
    position: absolute;
    color: #6f3410;
    margin-left: 1.2em;
    top: 25em;
    z-index: 1;
`;

const IconMobileAlt = styled(Icon)`
  width: 1.2em;
 top: 28.7em;
`;

export default function Home() {
  return (
    <Layout title="Joyce Alves">
      <>
        <SubTitle text="Como deseja receber o token:" />

        <Icon><FontAwesomeIcon icon={faEnvelope} /></Icon>
        <Button text="Email" href="/receberTokenEmail" />

        <IconMobileAlt><FontAwesomeIcon icon={faMobileAlt} /></IconMobileAlt>
        <Button text="Celular" href="/receberTokenMobile" />

        <SocialIcons />
      </>
    </Layout>



  );
}
