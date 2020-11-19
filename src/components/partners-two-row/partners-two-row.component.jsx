import React from 'react';
import {ShadowBox, TwentyEightText, TwoRowContainer} from "../toolbelt/toolbelt.style";
import {TwoRowImage} from "../toolbelt/toolbelt.component";

const TwoRow = ({image, imageAlt, paragraphOne, paragraphTwo, paragraphThree, textReplace}) => {
    return (
        <TwoRowContainer>
            {
                !textReplace ? <TwoRowImage image={image} name={imageAlt}/> :
                    <TwentyEightText style={{textAlign: 'left', fontWeight: 'bolder', color: '#003145', margin: 0}}>{textReplace}</TwentyEightText>
            }
            <ShadowBox>
                <TwentyEightText style={{margin: '20px'}}>
                    {paragraphOne}
                </TwentyEightText>
                <TwentyEightText style={{margin: '20px'}}>
                    {paragraphTwo}
                </TwentyEightText>
                <TwentyEightText style={{margin: '20px'}}>
                    {paragraphThree}
                </TwentyEightText>
            </ShadowBox>
        </TwoRowContainer>
    );
};

export default TwoRow;
