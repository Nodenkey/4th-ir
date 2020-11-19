import React from 'react';
import {DisplayWrapper} from "./case-study-display.style";
import {caseStudy} from "../../utils/page-docs";



const CaseStudyDisplay = () => {
    return (
        <DisplayWrapper num='2' gap='100px'>
            {
                caseStudy.map(study =>
                    study.docs.map(doc =>
                        <a href={require(`../../assets/pdf/${doc.doc_name}`)} target="_blank" rel="noopener noreferrer" key={doc.id}><img src={require(`../../assets/images/${doc.image}`)} alt="my shiny PDF" border="0"/></a>
                    )
                )
            }
        </DisplayWrapper>
    );
};

export default CaseStudyDisplay;
