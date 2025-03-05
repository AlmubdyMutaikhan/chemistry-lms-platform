import Suraq from '../Suraq/Quiz';
import './Bonding.css';
import { useState } from 'react';

export default function BondingMechanisms() {
  const [active, setActive] = useState('');

  const toggleActive = (type) => {
    setActive(active === type ? '' : type);
  };

  const bondingQuestions = [
    {
      question: 'Иондық байланыс кезінде не болады?',
      options: [
        'Атомдар электрон жұптарын ортақтасады.',
        'Металл атомы электрондарын береді, бейметалл қабылдайды.',
        'Электрондар металл торында еркін қозғалады.',
        'Молекула пішіні маңызды болады.'
      ],
      answer: 1
    },
    {
      question: 'Коваленттік байланыстың басты ерекшелігі қандай?',
      options: [
        'Электрондар екі атом арасында ортақтасады.',
        'Металл атомдары валенттік электрондарын береді.',
        'Иондар электростатикалық тартылысты түзеді.',
        'Электрондар металл торында қозғалады.'
      ],
      answer: 0
    },
    {
      question: 'Металдық байланыста электрондар қалай әрекет етеді?',
      options: [
        'Олар атомдарға тығыз байланысқан.',
        'Олар электрон жұптарын ортақтасады.',
        'Электрондар еркін қозғалады және "теңіз" түзеді.',
        'Олар тек бір атомға тиесілі.'
      ],
      answer: 2
    },
    {
      question: 'NaCl қосылысы қандай байланыспен түзіледі?',
      options: [
        'Коваленттік байланыс',
        'Металдық байланыс',
        'Иондық байланыс',
        'Сутектік байланыс'
      ],
      answer: 2
    },
    {
      question: 'Коваленттік байланыстың мысалы қайсы?',
      options: [
        'NaCl',
        'O₂ молекуласы',
        'Fe металлы',
        'Cu торы'
      ],
      answer: 1
    },
    {
      question: 'Металдық байланыстың мысалы ретінде қай затты айтуға болады?',
      options: [
        'H₂',
        'O₂',
        'NaCl',
        'Cu'
      ],
      answer: 3
    }
  ];
  

  return (
    <div className="bonding-container">
      <h1>Химиялық байланыс түзілу механизмдері</h1>

      <div
        className={`bond-card ${active === 'ionic' ? 'active' : ''}`}
        onClick={() => toggleActive('ionic')}
      >
        <h2>🔷 Электронды беру (иондық байланыс)</h2>
        {active === 'ionic' && (
          <div className="bond-content">
            <ul>
              <li>Металл атомы валенттік электрондарын береді (оң ион – катион түзіледі).</li>
              <li>Бейметалл атомы электрон қабылдайды (теріс ион – анион түзіледі).</li>
              <li>Иондар арасында электростатикалық тартылыс пайда болады.</li>
            </ul>
            <div className="example">
              📌 <strong>Na (1s² 2s² 2p⁶ 3s¹)</strong> → Na⁺ + e⁻ <br />
              📌 <strong>Cl (1s² 2s² 2p⁶ 3s² 3p⁵)</strong> + e⁻ → Cl⁻ <br />
              📌 Na⁺ + Cl⁻ → <strong>NaCl (иондық байланыс)</strong>
            </div>
          </div>
        )}
      </div>

      <div
        className={`bond-card ${active === 'covalent' ? 'active' : ''}`}
        onClick={() => toggleActive('covalent')}
      >
        <h2>🔷 Электронды ортақтасу (коваленттік байланыс)</h2>
        {active === 'covalent' && (
          <div className="bond-content">
            <ul>
              <li>Атомдар электрон жұптарын ортақтасады.</li>
              <li>Электрондар екі атомға да тиесілі болады.</li>
              <li>Байланыс бағытталған, яғни молекуланың пішіні маңызды.</li>
            </ul>
            <div className="example">
              📌 H₂ молекуласы: H• + •H → H:H <br />
              📌 O₂ молекуласы: O• • + •O• → O::O <br />
              📌 N₂ молекуласы: N• • + •N• → N:::N
            </div>
          </div>
        )}
      </div>

      <div
        className={`bond-card ${active === 'metallic' ? 'active' : ''}`}
        onClick={() => toggleActive('metallic')}
      >
        <h2>🔷 Электрон теңізі (металдық байланыс)</h2>
        {active === 'metallic' && (
          <div className="bond-content">
            <ul>
              <li>Металл атомдары валенттік электрондарын босатады.</li>
              <li>Бос электрондар металл торында еркін қозғалады.</li>
              <li>Электр өткізгіштік, жылу өткізгіштік жоғары болады.</li>
            </ul>
            <div className="example">
              📌 Cu, Fe, Al – металдық байланыс <br />
              📌 Электрондар “бұлт” сияқты қозғалады, сондықтан металдар иілгіш, жылтыр және жақсы өткізгіш.
            </div>
          </div>
        )}
      </div>

      <div>
        <Suraq questions={bondingQuestions}/>
      </div>
    </div>
  );
}
