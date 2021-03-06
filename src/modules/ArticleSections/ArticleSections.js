import React from 'react'
import SectionPreview from '../Section/SectionPreview'

const ArticleSections = ({ sections }) => {

    var content = ''
    if(sections){
        content = sections.map((section, index) => {
            return (
                <SectionPreview key={index} section={section}/>
            )
        })
    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
}

export default ArticleSections
