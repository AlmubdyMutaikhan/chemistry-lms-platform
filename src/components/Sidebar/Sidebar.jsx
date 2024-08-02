import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAtom, faFlask, faCubes, faBong, faBurn, faVial,
  faTemperatureHigh, faBalanceScale, faTint, faGlobe
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';  // CSS file for styling

const chapters = [
  { id: 1, name: "Атомдық Құрылым", icon: faAtom },
  { id: 2, name: "Периодтық Кесте және Элементтердің Қасиеттері", icon: faFlask },
  { id: 3, name: "Иондық Байланыс", icon: faCubes },
  { id: 4, name: "Ковалентті Байланыс", icon: faBong },
  { id: 5, name: "Металдық Байланыс", icon: faBurn },
  { id: 6, name: "Молекулалық Геометрия және VSEPR Теориясы (Электрондық Жұптың Шеткі Қабықты Өзара Қуаты)", icon: faVial },
  { id: 7, name: "Аралық Молекулалық Күштер", icon: faTemperatureHigh },
  { id: 8, name: "Химиялық Реакциялар және Теңдеулер", icon: faBalanceScale },
  { id: 9, name: "Заттардың Күйлері және Өзгерістер", icon: faTint },
  { id: 10, name: "Ерітінділер және Ерігіштік", icon: faGlobe }
];


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
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
          {!collapsed && <span>{`Chapter ${chapter.id}: ${chapter.name}`}</span>}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
