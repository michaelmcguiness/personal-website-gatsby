import React from 'react';

import EssayList from '../Essays/EssayList';
import { EssayWrapper, 
    EssayTitle, P, Tag, TagBox, Q
} from './Styling';

/*
| This component will take in an essay ID as a prop
| It will search through the EssayList for the essay with that ID
| It will render that essay
*/

const Essay = (props) => {
    // find essay object
    const essay = EssayList.filter((item) => props.id === item.id)[0];

    // render essay
    return (
        <EssayWrapper>
            <EssayTitle>{essay.title}</EssayTitle>
            <TagBox>
                <p>Sources:</p>
                {essay.sources.map(source => {
                    return (
                        <a href={source.link} 
                            target="_blank"
                            style={
                                {
                                    textDecoration: "none", 
                                    color: "dodgerblue"
                                }
                            }>
                            {source.title}
                        </a>
                    )
                })}
            </TagBox>
            <TagBox>
                <p>Categories:</p>
                {essay.categories.map(category => {
                    return (
                        <Tag to={category.route}>{category.name}</Tag>
                    )
                })}
            </TagBox>
            {essay.essay.map(content => {
                if (content.type === "Paragraph") {
                    return <P>{content.content}</P>
                } else if (content.type === "Quote") {
                    return <Q>{content.content}</Q>
                } else {
                    return <img src={content.link} alt={content.alt} />
                }
            })}
        </EssayWrapper>
    )

}

export default Essay;