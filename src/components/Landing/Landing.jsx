import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

const ChemistryLandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-header">
        <h1>Химия</h1>
        <p>
          Химия – айналамыздағы барлық заттардың құрылымы мен қасиеттерін зерттейтін ғылым. Бұл ғылымның негізінде атомдар және олардың арасындағы байланыстар жатыр. Атомдар бір-бірімен әрекеттесіп, молекулалар түзеді, ал бұл процестер біз күнделікті көріп жүрген заттардың түзілуіне себепші болады.
        </p>
      </div>

      <div className="landing-content">
        <p>
          Бұл сайт химиялық байланыстардың түрлерін, олардың ерекшеліктерін және қасиеттерін қарастыруға арналған. Сен коваленттік, иондық, металлдық, сутектік байланыстар туралы білесің, олардың қалай түзілуін көріп, түсінігіңді интерактивті тапсырмалар арқылы бекітесің.
        </p>

        <h2>✔️ Сайтта не үйренесің?</h2>
        <ul>
          <li>⚛️ Химиялық байланыстардың негізгі түрлерін ажырату</li>
          <li>⚛️ Атомдардың электрондық құрылымын талдау</li>
          <li>⚛️ Люис құрылымдарын дұрыс құрастыру</li>
          <li>⚛️ Электртерістілік айырмашылығын есептеу</li>
          <li>⚛️ Әртүрлі химиялық қосылыстардың қасиеттерін зерттеу</li>
        </ul>

        <p>
          Бұл сайт мектеп оқушылары мен химияға қызығатындар үшін жасалған. Оқыту материалдары қарапайым, түсінікті және интерактивті түрде ұсынылады. Визуалды анимациялар, тесттер мен ойындар арқылы сен химиялық байланыстардың қалай жұмыс істейтінін тереңірек түсінесің.
        </p>
      </div>

      <div className="landing-footer">
        <Link to='/chapter/1'>Дайынсың ба? Онда бастайық!</Link>
      </div>
    </div>
  );
};

export default ChemistryLandingPage;
