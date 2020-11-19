import React from 'react';
import {BuildTeamWrapper} from "./build-team.style";
import {PageHeader} from "../toolbelt/toolbelt.style";
import Button from "../button/button.component";
import ProductGif from "../../assets/images/product.gif";

const BuildTeam = () => {
    return (
        <BuildTeamWrapper>
            <PageHeader>Looking for a different Team Member?</PageHeader>
            <PageHeader style={{maxWidth: 1000, fontWeight: 400}}>Build your own Virtual Team to solve unique challenges and increase efficiency</PageHeader>
            <img src={ProductGif} alt='product gif'/>
            <Button type='secondary' link='/learn-more' >Learn more</Button>
        </BuildTeamWrapper>
    );
};

export default BuildTeam;
