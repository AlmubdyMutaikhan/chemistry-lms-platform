import React from 'react';
import Text from '../Text/Text';
import QuizComponent from '../Quizz/Quizz';
import HeadingComponent from '../Heading/Heading';
import Comment from '../Comments/Comments';
import { chapters } from '../../data/chapters';
import { useParams } from 'react-router-dom';
const Chapter= () => {
    const params = useParams();
    if(params.id == 1) {
        window.location.href = '/'
    }
    let chapterData = chapters[parseInt(params.id) - 1];
    
    return (
        <div className="atomic-structure-container">
            <HeadingComponent
                title={chapterData.heading.title}
                text={chapterData.heading.text}
            />


            <div className="model-viewer">
                <iframe
                    src={chapterData.modelViewer.src}
                    width={chapterData.modelViewer.width}
                    height={chapterData.modelViewer.height}
                    title={chapterData.modelViewer.title}
                />
            </div>

            <Text
                title={chapterData.textContent.title}
                text={chapterData.textContent.text}
                image={'https://zharar.com/uploads/posts/2020-07/1596210798_himijal.jpg'}
            />

            <QuizComponent quizData={chapterData.quizData} />
            <Comment />
     
        </div>
    );
};

export default Chapter;
