import React from 'react';
import './MetallicBond.css';
import Suraq from '../Suraq/Quiz';

export default function MetallicBondPage() {


    const bondQuestions = [
        {
            question: 'Коваленттік байланыста электрондар атомдар арасында теңдей бөлінеді.',
            options: ['Дұрыс', 'Жалған'],
            answer: 0 // Дұрыс
        },
        {
            question: 'Металдар коваленттік байланыс түзе алады.',
            options: ['Дұрыс', 'Жалған'],
            answer: 1 // Жалған
        },
        {
            question: 'SiO₂ – иондық байланысы бар қосылыс.',
            options: ['Дұрыс', 'Жалған'],
            answer: 1 // Жалған (коваленттік байланыс)
        },
        {
            question: 'Коваленттік байланыста атомдар арасында еркін электрондар қозғалады.',
            options: ['Дұрыс', 'Жалған'],
            answer: 1 // Жалған
        },
        {
            question: 'MgCl₂ – иондық байланысы бар қосылыс.',
            options: ['Дұрыс', 'Жалған'],
            answer: 0 // Дұрыс
        }
    ];
    

  const modelViewer = {
    src: "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html",
    width: "100%",
    height: "600",
    title: "Interactive build an atom simulation",
  };

  return (
    <div className="metallic-bond-container">
      <h1>⚙️ МЕТАЛДЫҚ БАЙЛАНЫС ДЕГЕНІМІЗ НЕ?</h1>
      <p>
        Металдық байланыс – металл атомдарының бірігіп, валенттік электрондарын ортақ пайдалануы нәтижесінде түзілетін химиялық байланыс.
      </p>
      
      <h2>✅ Негізгі ерекшеліктері:</h2>
      <ul>
        <li>Металл атомдары валенттік электрондарын “ортақ электрон теңізіне” жібереді</li>
        <li>Бос электрондар металдық тор ішінде еркін қозғалады</li>
        <li>Күшті байланыс, бірақ икемділігі жоғары</li>
        <li>Жақсы электр және жылу өткізгіш</li>
      </ul>

      <h3>📌 Мысал:</h3>
      <ul>
        <li>Cu (мыс), Fe (темір), Al (алюминий)</li>
        <li>→ Электрондар металл атомдары арасында еркін қозғалады.</li>
      </ul>

      <div>
                <iframe
                    src={modelViewer.src}
                    width={'100%'}
                    height={modelViewer.height}
                    title={modelViewer.title}
                />
      </div>

      <h2>⚙️ МЕТАЛДЫҚ БАЙЛАНЫСТЫҢ ҚАСИЕТТЕРІ</h2>
      <table>
        <thead>
          <tr>
            <th>Қасиет</th>
            <th>Сипаттама</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Электр өткізгіштігі</td>
            <td>Металдарда еркін электрондар бар, олар электр тогын тасымалдайды.</td>
          </tr>
          <tr>
            <td>Жылу өткізгіштігі</td>
            <td>Бос электрондар жылуды тез тасымалдайды.</td>
          </tr>
          <tr>
            <td>Созылғыштық және икемділік</td>
            <td>Металдық байланыс бағытталмағандықтан, атомдар орын ауыстыра алады.</td>
          </tr>
          <tr>
            <td>Металдық жылтыр</td>
            <td>Металдар жарықты шағылыстырады.</td>
          </tr>
          <tr>
            <td>Жоғары балқу және қайнау температурасы</td>
            <td>Металдық байланыс күшті, оны бұзу қиын.</td>
          </tr>
        </tbody>
      </table>

      <img style={{marginTop: 20}} src='https://avatars.mds.yandex.net/i?id=88557a0daf42b32d53512e367e4dd50e_l-4406655-images-thumbs&n=13' width='100%' />
      
      <h2>🔩 МЕТАЛДЫҚ БАЙЛАНЫСТЫҢ ҚОЛДАНЫЛУЫ</h2>
      <ul>
        <li>✅ Электр сымдары (Cu, Al) – жоғары электр өткізгіштігі үшін қолданылады.</li>
        <li>✅ Құрылыс материалдары (Fe, Al) – беріктігі үшін пайдаланылады.</li>
        <li>✅ Зергерлік бұйымдар (Au, Ag, Pt) – тотығуға төзімділігі жоғары.</li>
        <li>✅ Көлік өндірісі (Al, Fe) – жеңіл әрі мықты металдар қолданылады.</li>
        <li>✅ Магниттер (Fe, Co, Ni) – магниттік қасиеттері үшін маңызды.</li>
      </ul>
      
      <h2>📖 МЕТАЛДЫҚ БАЙЛАНЫС БОЙЫНША ТАПСЫРМАЛАР</h2>
      <h3>1️⃣ Теориялық сұрақтар:</h3>
      <ul>
        <li>✅ 1.1. Металдық байланыс дегеніміз не?</li>
        <li>✅ 1.2. Металдық байланыс қандай элементтер арасында түзіледі?</li>
        <li>✅ 1.3. “Электрон теңізі” моделі нені білдіреді?</li>
        <li>✅ 1.4. Металдық байланыс қандай қасиеттерге жауап береді?</li>
        <li>✅ 1.5. Неліктен металдар электр тогын өткізеді?</li>
      </ul>
      
      <h2>🎯 ҚОРЫТЫНДЫ</h2>
      <p>
        🔹 Металдық байланыс – бұл металдардың валенттік электрондарын ортақ пайдалануынан туындайтын байланыс түрі.<br/>
        🔹 Электрон теңізі моделіне байланысты металдар жоғары электр және жылу өткізгіштікке ие.<br/>
        🔹 Металдар мықты, созылғыш және көптеген өндіріс салаларында қолданылады.
      </p>
      <Suraq questions={bondQuestions} />
    </div>
  );
}
