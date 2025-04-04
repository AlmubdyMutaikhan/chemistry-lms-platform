import React from 'react';
import './IonicBond.css';
import Suraq from '../Suraq/Quiz';

export default function IonicBondPage() {

    const bondQuestions = [
        // True/False Questions
        {
          question: 'Иондық байланыс тек бейметалдар арасында түзіледі.',
          options: ['Дұрыс', 'Жалған'],
          answer: 1 // Жалған
        },
        {
          question: 'NaCl – иондық байланысы бар қосылыс.',
          options: ['Дұрыс', 'Жалған'],
          answer: 0 // Дұрыс
        },
        {
          question: 'MgO молекуласында Mg анион болып табылады.',
          options: ['Дұрыс', 'Жалған'],
          answer: 1 // Жалған
        },
        {
          question: 'Иондық қосылыстар жоғары температурада балқиды.',
          options: ['Дұрыс', 'Жалған'],
          answer: 0 // Дұрыс
        },
        {
          question: 'Иондық байланыс металдар мен бейметалдар арасында түзіледі.',
          options: ['Дұрыс', 'Жалған'],
          answer: 0 // Дұрыс
        },
      
        // Matching Questions
        {
          question: 'Келесі заттардың қай байланыс түріне жататынын анықтаңыз:',
          options: [
            'NaCl – Иондық байланыс',
            'CO₂ – Коваленттік байланыс',
            'MgO – Иондық байланыс',
            'H₂O – Коваленттік байланыс',
            'CaF₂ – Иондық байланыс'
          ],
          answer: [0, 1, 2, 3, 4] // Correct matching indices
        },
      
        // Interactive Game-Based Questions
        {
          question: '“Ионды тап!” Қай қосылыста иондық байланыс бар?',
          options: ['NaCl', 'H₂O', 'MgO', 'NH₃', 'KBr', 'CO₂', 'CaF₂', 'O₂'],
          answer: [0, 2, 4, 6] // NaCl, MgO, KBr, CaF₂
        },
      
        {
          question: '“Кім жылдам?” Бұл элементтердің иондарын дұрыс сәйкестендіріңіз.',
          options: [
            'Na → Na⁺',
            'Cl → Cl⁻',
            'Mg → Mg²⁺',
            'O → O²⁻',
            'K → K⁺',
            'Br → Br⁻',
            'Ca → Ca²⁺',
            'F → F⁻'
          ],
          answer: [0, 1, 2, 3, 4, 5, 6, 7] // Correct order
        },
      
        // Creative Thinking Questions
        {
          question: '“Өз иондық қосылысыңды жаса!” Металл және бейметалл таңдап, олардың иондық байланысын сипаттаңыз.',
          options: [
            'Na + Cl → NaCl',
            'Mg + O → MgO',
            'Ca + F → CaF₂',
            'K + Br → KBr'
          ],
          answer: [0, 1, 2, 3] // Any correct formation is valid
        },
      
        {
          question: '“Химиялық комикс” тапсырмасы: Na мен Cl атомдарының иондық байланыс түзу процесін қалай сипаттайсыз?',
          options: [
            'Na электронын береді, Cl электронды қабылдайды → NaCl',
            'Na мен Cl бірдей бөліседі → Коваленттік байланыс',
            'Na басқа металмен байланысады',
            'Cl басқа бейметалмен байланысады'
          ],
          answer: 0 // Correct explanation
        }
      ];
      

      
  return (
    <div className="ionic-bond-container">
      <h1>⚡ ИОНДЫҚ БАЙЛАНЫС ДЕГЕНІМІЗ НЕ?</h1>
      <p>
        Иондық байланыс – бұл электрон беру және алу арқылы түзілетін химиялық байланыс.
      </p>

      <div>
        <iframe width="100%" height="600" src="https://www.youtube.com/embed/ygeC3xHuvmg" title="Understand Ionic Bond in Animated way" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      
      <h2>✅ Негізгі ерекшеліктері:</h2>
      <ul>
        <li>Бір атом электрон береді (металл → катион, оң зарядты ион)</li>
        <li>Басқа атом электрон қабылдайды (бейметалл → анион, теріс зарядты ион)</li>
        <li>Электростатикалық тартылыс күші арқылы тұрақты байланыс түзіледі</li>
        <li>Әдетте металл + бейметалл арасында кездеседі</li>
        <li>Күшті байланыс, балқу және қайнау температурасы жоғары</li>
        <img width='100%' height='auto' src='https://celes.club/pictures/uploads/posts/2023-06/1685621785_celes-club-p-khlorid-natriya-risunok-risunok-43.jpg' />
      </ul>
      
      <h3>📌 Мысал:</h3>
      <ul>
        <li>NaCl (натрий хлориді, ас тұзы)</li>
        <li>Na → Na⁺ + e⁻ (электрон берді, катион түзілді)</li>
        <li>Cl + e⁻ → Cl⁻ (электрон қабылдады, анион түзілді)</li>
        <li>Na⁺ + Cl⁻ → NaCl (иондық байланыс)</li>
      </ul>

      <h2>⚙️ ИОНДЫҚ БАЙЛАНЫСТЫҢ ҚАСИЕТТЕРІ</h2>
      <table>
        <thead>
          <tr>
            <th>Қасиет</th>
            <th>Сипаттама</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Жоғары балқу және қайнау температурасы</td>
            <td>Иондық тордағы күшті электростатикалық тартылыстар көп энергия қажет етеді.</td>
          </tr>
          <tr>
            <td>Суда жақсы ериді</td>
            <td>Көптеген иондық қосылыстар суда диссоциацияланып, ерітіндіде иондарға бөлінеді.</td>
          </tr>
          <tr>
            <td>Электр тогын өткізеді (ерітіндіде)</td>
            <td>Сулы ерітіндіде еркін қозғалатын иондар электр тогын өткізеді.</td>
          </tr>
          <tr>
            <td>Қатты күйде мықты, бірақ сынғыш</td>
            <td>Күшті иондық тор, бірақ механикалық күш әсер етсе, иондар орын ауыстырып, бір-бірін тебеді.</td>
          </tr>
        </tbody>
      </table>
      
      <h2>🔬 ИОНДЫҚ ҚОСЫЛЫСТАРДЫҢ ҚОЛДАНЫЛУЫ</h2>
      <ul>
        <li>✅ NaCl (ас тұзы) – тағамдық өнімдерде қолданылады.</li>
        <li>✅ CaCO₃ (әк тас) – құрылыс материалдарында қолданылады.</li>
        <li>✅ KCl (калий хлориді) – тыңайтқыш ретінде пайдаланылады.</li>
        <li>✅ NaF (натрий фториді) – тіс пасталарының құрамында бар.</li>
        <li>✅ Al₂O₃ (алюминий оксиді) – корунд және зергерлік тастарды (рубин, сапфир) түзу үшін қажет.</li>
      </ul>
      
      <h2>📖 ИОНДЫҚ БАЙЛАНЫС БОЙЫНША ТАПСЫРМАЛАР</h2>
      <h3>1️⃣ Теориялық сұрақтар:</h3>
      <ul>
        <li>✅ 1.1. Иондық байланыс дегеніміз не?</li>
        <li>✅ 1.2. Иондық байланыс қандай атомдар арасында түзіледі?</li>
        <li>✅ 1.3. Катион мен анион дегеніміз не?</li>
        <li>✅ 1.4. Неліктен иондық байланыс тұрақты?</li>
        <li>✅ 1.5. Неліктен иондық қосылыстар электр тогын өткізеді?</li>
      </ul>
      
      <h2>🎯 ҚОРЫТЫНДЫ</h2>
      <p>
        🔹 Иондық байланыс – электрон беру және алу арқылы түзілетін күшті электростатикалық байланыс.<br/>
        🔹 Металдар катиондарға, бейметалдар аниондарға айналады.<br/>
        🔹 Иондық қосылыстар қатты, суда жақсы ериді және электр тогын өткізеді.
      </p>

      <Suraq questions={bondQuestions} />
    </div>
  );
}
