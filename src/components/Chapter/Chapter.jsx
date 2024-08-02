import React from 'react';
import Text from '../Text/Text';
import QuizComponent from '../Quizz/Quizz';
import HeadingComponent from '../Heading/Heading';
import Comment from '../Comments/Comments';
import { chapters } from '../../data/chapters';
import { useParams } from 'react-router-dom';

const images  = [
    'https://zharar.com/uploads/posts/2020-07/1596210798_himijal.jpg',
    'https://zharar.com/uploads/posts/2020-07/1596210798_himijal.jpg',
    'https://avatars.mds.yandex.net/i?id=b3ae3fe94eec23ae7d81d0e84ca2b667_l-4578587-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=1910add4cd9d3f567979ac13c79840fb4d4a623c-5284061-images-thumbs&n=13',
    'https://cdn.britannica.com/29/7529-050-9B1F15DF/VSEPR-electron-pair-arrangements-shapes.jpg',
    'https://avatars.mds.yandex.net/i?id=a493df62ae12c121d15b8cafd428c6b5_l-9152477-images-thumbs&n=13',
    'https://fsd.kopilkaurokov.ru/uploads/user_file_56d271b284a43/img_user_file_56d271b284a43_37.jpg',
    'https://avatars.mds.yandex.net/i?id=11b4fa83fed7ae6584aaf87a418c93390ef4cb2a-7760211-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=2f8071e091fcdd29ee5b3d6428e339ea_l-4936408-images-thumbs&n=13',
    'https://shareslide.ru/img/thumbs/6069a770272c984fba79f89e3f9a8c88-800x.jpg'

]

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
                image={images[parseInt(params.id) - 1]}
            />

            <QuizComponent quizData={chapterData.quizData} />
            <Comment />
     
        </div>
    );
};

export default Chapter;
