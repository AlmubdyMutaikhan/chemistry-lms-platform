import React from 'react';
import './VanDerWaalsBond.css';
import Suraq from '../Suraq/Quiz';

export default function VanDerWaalsBondPage() {

    const intermolecularForcesQuestions = [
        // True/False Questions
        {
            question: 'Ван-дер-Ваальс күштері иондар арасында түзіледі.',
            options: ['Дұрыс', 'Жалған'],
            answer: 1 // Жалған
        },
        {
            question: 'Диполь-диполь күштері тек полюсті молекулалар арасында түзіледі.',
            options: ['Дұрыс', 'Жалған'],
            answer: 0 // Дұрыс
        },
        {
            question: 'Лондон күштері тек газдарда кездеседі.',
            options: ['Дұрыс', 'Жалған'],
            answer: 1 // Жалған
        },
        {
            question: 'Су молекуласында тек Ван-дер-Ваальс күштері бар.',
            options: ['Дұрыс', 'Жалған'],
            answer: 1 // Жалған (сутектік байланыс та бар)
        },
        {
            question: 'Ван-дер-Ваальс күштері коваленттік байланыстан әлдеқайда әлсіз.',
            options: ['Дұрыс', 'Жалған'],
            answer: 0 // Дұрыс
        },
    
        // Matching Questions
        {
            question: 'Келесі молекулалардың қайсысында қандай молекулааралық байланыс бар екенін анықтаңыз:',
            matching: [
                { compound: "HCl", interaction: "Диполь-диполь әрекеттесуі" },
                { compound: "O₂", interaction: "Лондон дисперсиялық күштері" },
                { compound: "CO₂", interaction: "Лондон дисперсиялық күштері" },
                { compound: "NH₃", interaction: "Сутектік байланыс" },
                { compound: "CH₄", interaction: "Лондон дисперсиялық күштері" }
            ],
            rule: "Егер молекула полюсті болса, онда диполь-диполь әрекеттесуі бар. Егер H мен O/N/F атомдары болса, онда сутектік байланыс бар. Полюссіз молекулаларда Лондон күштері басым."
        },
    
        // Explanation of Intermolecular Forces
        {
            question: 'Ван-дер-Ваальс күштерінің түзілу механизмін сипаттау',
            explanation: [
                "📌 O₂ және CO₂ молекулаларында Лондон күштері қалай түзіледі?",
                "📌 HCl молекуласында диполь-диполь әрекеттесуі қалай жүреді?",
                "📌 H₂O мен NH₃ молекулаларында сутектік байланыс қалай түзіледі?",
                "✅ Оқушылар әр молекуланың электрон тығыздығын ескере отырып, диаграмма салады."
            ]
        },
    
        // Boiling Point Analysis
        {
            question: 'Молекулалардың қайнау температурасын салыстырыңыз:',
            boilingPoints: [
                { compound: "He", boilingPoint: "-268°C", interaction: "Лондон күштері" },
                { compound: "O₂", boilingPoint: "-183°C", interaction: "Лондон күштері" },
                { compound: "HCl", boilingPoint: "-85°C", interaction: "Диполь-диполь" },
                { compound: "H₂O", boilingPoint: "100°C", interaction: "Сутектік байланыс" }
            ],
            conclusion: [
                "✅ Сутектік байланыс бар молекулалардың қайнау температурасы ең жоғары.",
                "✅ Лондон күші ғана бар молекулалар өте төмен температурада қайнайды."
            ]
        }
    ];
    

    
  return (
    <div className="van-der-waals-bond-container">
      <h1>🔬 ВАН-ДЕР-ВААЛЬС КҮШТЕРІ ЖӘНЕ МОЛЕКУЛААРАЛЫҚ БАЙЛАНЫСТАР</h1>
      <p>
        Молекулааралық байланыстар – жеке молекулалар арасындағы әлсіз әрекеттесу күштері. Олар химиялық байланыстарға қарағанда әлдеқайда әлсіз, бірақ заттардың агрегаттық күйіне, еруіне, қайнау және балқу температурасына әсер етеді.
      </p>
      
      <h2>✅ Молекулааралық байланыстардың негізгі түрлері:</h2>
      <ul>
        <li>Сутектік байланыс – H және O, N, F арасында түзіледі.</li>
        <li>Ван-дер-Ваальс күштері – молекулалар арасындағы әлсіз тартылыс күштері.</li>
        <li>Диполь-диполь әрекеттесуі – тұрақты дипольдері бар молекулалар арасында түзіледі.</li>
        <li>Дисперсиялық (Лондон) күштері – уақытша дипольдер арасындағы ең әлсіз күш.</li>
      </ul>

      <h2>📌 Ван-дер-Ваальс күштерінің үш түрі:</h2>
      <table>
        <thead>
          <tr>
            <th>Күш түрі</th>
            <th>Түзілу механизмі</th>
            <th>Мысалдар</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Диполь-диполь әрекеттесуі</td>
            <td>Полюсті молекулалар арасындағы тұрақты тартылыс</td>
            <td>HCl, SO₂</td>
          </tr>
          <tr>
            <td>Дисперсиялық (Лондон) күштері</td>
            <td>Полюссіз молекулалардың уақытша диполь түзуі</td>
            <td>He, CH₄, O₂</td>
          </tr>
          <tr>
            <td>Диполь-индукцияланған диполь</td>
            <td>Полюсті молекула бейтарап молекуланы поляризациялайды</td>
            <td>H₂O – O₂</td>
          </tr>
        </tbody>
      </table>
      
      <h2>📖 ВАН-ДЕР-ВААЛЬС КҮШТЕРІ БОЙЫНША ТАПСЫРМАЛАР</h2>
      <h3>1️⃣ Теориялық сұрақтар:</h3>
      <ul>
        <li>✅ 1.1. Ван-дер-Ваальс күштері дегеніміз не?</li>
        <li>✅ 1.2. Ван-дер-Ваальс күштерінің қандай түрлері бар?</li>
        <li>✅ 1.3. Диполь-диполь әрекеттесуі қалай түзіледі?</li>
        <li>✅ 1.4. Лондон дисперсиялық күштері қалай пайда болады?</li>
        <li>✅ 1.5. Бұл молекулааралық күштер заттардың физикалық қасиеттеріне қалай әсер етеді?</li>
      </ul>
      
      <h2>🎯 ҚОРЫТЫНДЫ</h2>
      <p>
        🔹 Молекулааралық байланыстар заттардың күйін, қасиеттерін анықтайды.<br/>
        🔹 Ван-дер-Ваальс күштері – әлсіз, бірақ газдар, сұйықтар үшін маңызды байланыс.<br/>
        🔹 Лондон күштері – уақытша дипольдерден туындайтын ең әлсіз тартылыс күші.<br/>
        🔹 Диполь-диполь күштері – тұрақты полюсті молекулалар арасында әрекет етеді.<br/>
        🔹 Бұл күштер заттардың қайнау, балқу температурасына, ерігіштігіне және агрегаттық күйіне әсер етеді.
      </p>
      <Suraq questions={intermolecularForcesQuestions} />
    </div>
  );
}
