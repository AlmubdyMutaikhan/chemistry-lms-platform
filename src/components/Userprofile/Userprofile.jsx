import React from 'react';
import './Userprofile.css';
import UserProgressChart from '../ChemStruct/Chart';
const UserProfile = () => {
    const userInfo = {
        name: "Ерболат Кәрімов",
        bio: "Химияға қызығушылық танытатын студент, энергетикалық химия саласында білімін тереңдетуде.",
        progressData: [
            { date: '2023-01-01', score: 75 },
            { date: '2023-02-01', score: 85 },
            { date: '2023-03-01', score: 95 }
        ],
        achievements: [
            "National Chemistry Award 2023",
            "Completed Advanced Organic Chemistry Course"
        ],
        favoriteElements: ["Oxygen", "Carbon", "Nitrogen"],
        recentActivities: [
            "Completed 'Organic Chemistry' course - May 1, 2023",
            "Attended webinar on 'Molecular Bonds' - April 25, 2023"
        ]
    };

    return (
        <div className="user-profile">
            <h1>Пайдаланушы профилі</h1>
            <h2>{userInfo.name}</h2>
            <p>{userInfo.bio}</p>
            <div className="user-section">
                <h3>Оқу Прогресі</h3>
                <UserProgressChart data={userInfo.progressData} />
            </div>
            <div className="user-section">
                <h3>Жетістіктер</h3>
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
            <div className="user-section">
                <h3>Соңғы Қызметтер</h3>
                <ul>
                    {userInfo.recentActivities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserProfile;
