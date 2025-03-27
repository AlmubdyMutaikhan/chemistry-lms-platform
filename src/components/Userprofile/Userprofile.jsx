import React from 'react';
import './Userprofile.css';
import UserProgressChart from '../ChemStruct/Chart';
const UserProfile = () => {
    const userInfo = {
        name: "Яхия Салтанат Кенжеғалиқызы",
        bio: "Т.Есетов атындағы 264 мектеп-лицей химия пәні мұғалімі",
        progressData: [
            { date: '2024-01-01', score: 75 },
            { date: '2023-02-01', score: 85 },
            { date: '2022-03-01', score: 95 }
        ],
        achievements: [
            "Қорқыт ата атындағы институт магистранты",
            "Еңбек өтілі: 9 жыл"
        ],
        favoriteElements: ["Оттегі", "Сутек", "Литий"],
        recentActivities: [
            "Органикалық химия сабағын ұйымдастыру тренингі, 2024",
            "Химия негіздері курсы, 2023"
        ]
    };

    return (
        <div className="user-profile">
            <h1>Пайдаланушы профилі</h1>
            <h2>{userInfo.name}</h2>
            <p>{userInfo.bio}</p>
            <img height={500} width={'auto'} src='./image.png' />
            <div className="user-section">
                <h3>Туралы</h3>
                <ul>
                    {userInfo.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </div>
            <div className="user-section">
                <h3>Сүйікті Элементтер</h3>
                <ul>
                    {userInfo.favoriteElements.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserProfile;
