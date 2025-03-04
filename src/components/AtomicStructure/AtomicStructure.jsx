import React from 'react';
import './AtomicStructure.css';
import ThreeDAnimation from '../ThreeD/ThreeD'; // Assume this is the Three.js component created previously
import Text from '../Text/Text';
import QuizComponent from '../Quizz/Quizz';
import HeadingComponent from '../Heading/Heading';
import Comment from '../Comments/Comments';
const AtomicStructure = () => {
 
    const quizData = [
        {
            "question": "Гелийдің атомдық нөмірі қандай?",
            "options": ["1", "2", "3", "4"],
            "correctAnswer": "2"
        },
        {
            "question": "Атом ядросында қай бөлшек жоқ?",
            "options": ["Протон", "Нейтрон", "Электрон", "Кварк"],
            "correctAnswer": "Электрон"
        },
        {
            "question": "Молекулалық массаның өлшем бірлігі қалай аталады?",
            "options": ["Грамм", "Атомдық массалық бірлік", "Моль", "Килограмм"],
            "correctAnswer": "Атомдық массалық бірлік"
        },
        {
            "question": "Химиялық реакция нәтижесінде қалыптасқан заттар қалай аталады?",
            "options": ["Реагенттер", "Катализаторлар", "Өнімдер", "Коэффициенттер"],
            "correctAnswer": "Өнімдер"
        },
        {
            "question": "Элементтердің қай кезеңінде металлдар ең көп?",
            "options": ["1-ші", "2-ші", "3-ші", "4-ші"],
            "correctAnswer": "3-ші"
        },
        {
            "question": "Электрондық қабықшаның энергетикалық деңгейі нешеу?",
            "options": ["2", "5", "7", "10"],
            "correctAnswer": "7"
        },
        {
            "question": "Кез келген химиялық реакцияда сақталатын заң қалай аталады?",
            "options": ["Массаның сақталу заңы", "Энергияның сақталу заңы", "Жылдамдық заңы", "Температураның сақталу заңы"],
            "correctAnswer": "Массаның сақталу заңы"
        }
    ];
    
      
  return (
    <div className="atomic-structure-container">
     <HeadingComponent
    title="Атомдық құрылым"
    text="Заттың негізгі құрауыштарын зерттеңіз. Атомдардың қалай бірігіп молекулаларды қалыптастыратынын түсініңіз. Біз бұны Гелий мысалында көреміз. Төменде оның атомдық құрылысы көрсетілген."
    />


      {/* Interactive 3D Model */}
      <div className="model-viewer">
        <ThreeDAnimation />
      </div>
      
     
      {/* Educational Video Embed */}
      <div className="video-container">
      <iframe width="500" height="900" src="https://www.youtube.com/embed/uDvPX8GWhtY" title="Атом құрамы мен құрылысы. Изотоптар .1 бөлім. 7 сынып." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <Text 
    title="Атомдық құрылымға тереңірек үңілу"
    text="Атомдық құрылым дегеніміз атомның құрамын анықтайды, ол ядродан тұрады, оған протондар мен нейтрондар кіреді, сондай-ақ осы ядроны айналып жүретін электрондар бар. Атомдардың құрылысы химиялық реакциялардың қалай жүретінін және материалдардың қалай қалыптасатынын түсінуде маңызды рөл атқарады. Протондар - оң зарядталған бөлшектер, ал нейтрондар - зарядсыз. Электрондар теріс зарядталған, олар ядроның айналасында әртүрлі энергетикалық деңгейлердегі орбиталарда орналасқан. Атомның химиялық қасиеттері негізінен сыртқы қабықшадағы электрондар санымен анықталады. Бұл электрондар атомдар арасындағы байланыстарды қалыптастыруға қатысады, мысалы, ковалентті және иондық байланыстар сияқты. Сонымен қатар, электрондық конфигурация және олардың энергия деңгейлерінің толықтығы химиялық элементтердің табиғаттағы әрекеттесуін анықтайды. Осы білімдер арқылы ғалымдар жаңа материалдарды жасай алады және белгілі бір химиялық реакцияларды реттей алады, бұл бүкіл әлемде ғылыми және технологиялық прогресті ілгерілетуге мүмкіндік береді."
    image='https://www.pureairemonitoring.com/wp-content/uploads/2019/12/Helium-gas.jpg'
    text2="
Гелий — периодтық кестеде екінші элемент, атомдық саны 2. Ол сутегіден кейінгі ең жеңіл газ және ең аз реакцияға бейім элементтердің бірі. Гелийдің ядросы екі протоннан және, көбінесе, екі нейтроннан тұрады, ал электрондық қабығында екі электрон бар. Бұл конфигурация оны инертті етеді, өйткені оның сыртқы электрондық қабығы толық толтырылған.

Гелий екі түрлі изотоптан тұрады: гелий-3 және гелий-4. Гелий-4 жер қыртысында көп кездесетін негізгі изотоп болып табылады. Гелий ғарышта, жұлдыздар мен құймақ қабаттарында көп мөлшерде кездеседі, және ол жұлдыздық ядролық реакциялардың нәтижесінде түзіледі.

Гелийдің қолданылу аясы өте кең: ол балондар мен дирижабльдерді ісіктіруде, жоғары дәлдіктегі ғылыми зерттеулерде, таза орталарды құруда, медицинада резонанстық томографияда, дем алу араласымдарында, және температурасы төмен криогендік қондырғыларда қолданылады. Гелий өте төмен температурада сұйық күйге айналады, ол қасиеті қазіргі заманғы физикалық зерттеулерде маңызды рөл атқарады."
/>

     <QuizComponent quizData={quizData} />
    <Comment />
     
    </div>
  );
};

export default AtomicStructure;
