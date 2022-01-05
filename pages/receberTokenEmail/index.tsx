import React from 'react';
import styled from 'styled-components';
import Layout from "../../components/layout";
import SubTitle from "../../components/subTitle";
import Inputs from "../../components/inputs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


// Styled Components
const Button = styled.button`
    margin: 2em 0;
    font-size: 1.2em;
    color: #fff;
    padding: 0.5em;
    border-radius: 0.3em;
    border: 1px solid rgba(52, 23, 5, .1);
    background: rgba(52, 23, 5, .7);
    cursor: pointer;

    &:hover {
        background: #6F3410;
        transition-duration: 1s;
        transition-timing-function: ease;
    }
`;

const Icon = styled.span`
    width: 1em;
    position: absolute;
    color: #c1c1c1;
    margin-left: 1em;
    top: 25.3em;
    z-index: 1;
`;

const IconEmail = styled(Icon)`
    top: 29.3em;
`


export default function receberTokenEmail() {
    return (
        <Layout title="Bem-vindo">
            <>
                <SubTitle text="Digite seu email: " />

                <Icon><FontAwesomeIcon icon={faUser} /></Icon>
                <Inputs type="text" placeholder="Nome completo" />

                <IconEmail><FontAwesomeIcon icon={faEnvelope} /></IconEmail>
                <Inputs type="email" placeholder="maria@teste.com" />

                <Button type="submit">Enviar</Button>
            </>
        </Layout>
    );
}