import React from 'react';
import {Grid, PageHeader, PageSubHeaderAlt} from "../toolbelt/toolbelt.style";
import {AdvantageContainer, AdvantageHeader, AdvantagesWrapper} from "./advantages.style";
import Button from "../button/button.component";
import {pageDetails} from "../../utils/page-docs";

const Advantages = ({num, name}) => {
    let advantages = [];
    let factsheet = '';

    pageDetails.forEach(detail => {
        if (detail.name === name) {
            advantages = detail.advantages;
            factsheet = detail.factsheet;
        }
    })


    return (
        <AdvantagesWrapper>
            <PageHeader style={{marginBottom: 100}}>Advantages</PageHeader>
            <Grid num={num} gap='10px' style={{overflow: 'hidden'}}>
                {
                    advantages.map(advantage =>
                        <AdvantageContainer key={advantage.id}>
                            <AdvantageHeader>{advantage.title}</AdvantageHeader>
                            <PageSubHeaderAlt>{advantage.explain}</PageSubHeaderAlt>
                        </AdvantageContainer>
                    )
                }
            </Grid>
            {
                  factsheet ? <Button link={require(`../../assets/pdf/${factsheet}`)} name={factsheet} type='download'>Download
                                Factsheet</Button> :
                            <Button link='#'>Download Factsheet</Button>

            }
        </AdvantagesWrapper>
    );
};

export default Advantages;
