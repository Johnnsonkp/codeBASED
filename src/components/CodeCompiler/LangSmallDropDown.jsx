import React, { useEffect, useRef, useState } from "react";

const styles = `
.dropdown-container {
    position: relative;
    display: inline-block;
    text-align: left;
    display: flex;
}

.dropdown-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 500;
    color: #374151;
    background-color: white;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: background 0.2s;
}

.dropdown-button:hover {
    background: #f3f4f6;
}

.dropdown-menu {
    position: absolute;
    top: 40px;
    right: 0;
    width: 200px;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 8px 0;
    display: none;
}

.dropdown-menu.open {
    display: block;
}

.dropdown-item {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    font-size: 14px;
    color: #374151;
    cursor: pointer;
    transition: background 0.2s;
}

.dropdown-item:hover {
    background: #f3f4f6;
}

.dropdown-item svg {
    margin-right: 8px;
}
`;

const LangSmallDropDown = ({languageOptions, setLanguage, language}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const styleTag = document.createElement("style");
        styleTag.innerHTML = styles;
        document.head.appendChild(styleTag);
        return () => {
            document.head.removeChild(styleTag);
        };
    }, []);

    const handleDropDown = (e) => {
      setLanguage(languageOptions.filter((lang) => lang.value == e.target.value))
      console.log(e.target.value)
      console.log('language', language)
    }

    return (
      <div className="dropdown-container" ref={dropdownRef}>
        <img style={{width: '20px', height: '20px', marginRight: '8px'}} src={`${language[0].image}`} />
        <select value={language[0].value} className="dropdown-button" onChange={(e) => handleDropDown(e)}>
          {languageOptions && languageOptions.map((lang, index) => (
            <option 
              key={index}
              style={{fontSize: '8px'}}
              value={lang.value}
              // defaultChecked={language[0].value}
            >
              {/* {lang.name} */}
              {lang.value.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    );
};

export default LangSmallDropDown;
