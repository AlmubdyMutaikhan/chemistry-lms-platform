import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAtom, faFlask, faCubes, faBong, faBurn, faVial,
  faGlobe, faBorderNone,
  faBorderAll
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';  // CSS file for styling
import { FaConnectdevelop } from 'react-icons/fa';

const chapters = [
  { id: 1, name: "Атомдық құрылым", icon: faAtom },
  { id: 2, name: "Химиялық байланыстар", icon: faBorderNone },
  { id: 3, name: "Химиялық байланыс түзілу механизмдері", icon: faBorderAll },
  { id: 4, name: "Барлық байланыстардың күші бірдей ме?", icon: faBorderAll },
  { id: 5, name: "Периодтық кесте және элементтердің қасиеттері", icon: faFlask },
  { id: 6, name: "Иондық байланыс", icon: faCubes },
  { id: 7, name: "Ковалентті байланыс", icon: faBong },
  { id: 8, name: "Металдық байланыс", icon: faBurn },
  { id: 9, name: "Молекулалық геометрия және VSEPR теориясы (электрондық жұптың шеткі қабықты өзара қуаты)", icon: faVial },
  // { id: 7, name: "Молекулалық аралық күштер", icon: faTemperatureHigh },
  // { id: 8, name: "Химиялық реакциялар және теңдеулер", icon: faBalanceScale },
  // { id: 9, name: "Заттардың күйлері және өзгерістер", icon: faTint },
  { id: 10, name: "Ерітінділер және ерігіштік", icon: faGlobe }
];


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarRef = useRef();
  const navigate = useNavigate();
  // Toggle expand/collapse on sidebar click
  const toggleSidebar = () => setCollapsed(!collapsed);

  // Handle clicking outside the sidebar to collapse it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef]);



  const handleClick = (event, chapter) => {
    event.stopPropagation();
    window.location.href = `/chapter/${chapter.id}`
  };


  return (
    <div ref={sidebarRef} className={`sidebar ${collapsed ? 'collapsed' : ''}`} onClick={toggleSidebar}>
      {chapters.map(chapter => (
        <div key={chapter.id} className="chapter-link" onClick={(e) => handleClick(e, chapter)}>
          <FontAwesomeIcon icon={chapter.icon} className="chapter-icon" />
          {!collapsed && <span>{`Бөлім-${chapter.id}: ${chapter.name}`}</span>}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
