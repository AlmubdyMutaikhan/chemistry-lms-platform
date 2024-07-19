import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAtom, faFlask, faCubes, faBong, faBurn, faVial,
  faTemperatureHigh, faBalanceScale, faTint, faGlobe
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';  // CSS file for styling

const chapters = [
  { id: 1, name: "Atomic Structure", icon: faAtom },
  { id: 2, name: "Periodic Table and Element Properties", icon: faFlask },
  { id: 3, name: "Ionic Bonding", icon: faCubes },
  { id: 4, name: "Covalent Bonding", icon: faBong },
  { id: 5, name: "Metallic Bonding", icon: faBurn },
  { id: 6, name: "Molecular Geometry and VSEPR Theory", icon: faVial },
  { id: 7, name: "Intermolecular Forces", icon: faTemperatureHigh },
  { id: 8, name: "Chemical Reactions and Equations", icon: faBalanceScale },
  { id: 9, name: "States of Matter and Changes", icon: faTint },
  { id: 10, name: "Solutions and Solubility", icon: faGlobe }
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const sidebarRef = useRef();

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

  return (
    <div ref={sidebarRef} className={`sidebar ${collapsed ? 'collapsed' : ''}`} onClick={toggleSidebar}>
      {chapters.map(chapter => (
        <Link key={chapter.id} to={`/chapter/${chapter.id}`} className="chapter-link">
          <FontAwesomeIcon icon={chapter.icon} className="chapter-icon" />
          {!collapsed && <span>{`Chapter ${chapter.id}: ${chapter.name}`}</span>}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
