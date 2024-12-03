import React from "react";

const Dropdown = () => {
  const buttonStyles = {
    position: "relative",
    width: "100%",
    cursor: "default",
    borderRadius: "0.375rem",
    backgroundColor: "white",
    padding: "0.375rem 0.625rem",
    textAlign: "left",
    color: "rgb(17, 24, 39)", // text-gray-900
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)", // shadow-sm
    border: "1px solid rgba(209, 213, 219, 1)", // ring-gray-300
    outline: "none",
    fontSize: "0.875rem", // sm:text-sm
    lineHeight: "1.5rem",
  };

  const labelStyles = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "rgb(17, 24, 39)", // text-gray-900
    lineHeight: "1.5rem",
  };

  const listStyles = {
    position: "absolute",
    zIndex: 10,
    marginTop: "0.25rem",
    maxHeight: "14rem", // max-h-56
    width: "100%",
    overflow: "auto",
    borderRadius: "0.375rem",
    backgroundColor: "white",
    padding: "0.25rem",
    fontSize: "1rem", // sm:text-sm
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)", // shadow-lg
    border: "1px solid rgba(0, 0, 0, 0.05)", // ring-black/5
  };

  const listItemStyles = {
    position: "relative",
    cursor: "default",
    userSelect: "none",
    padding: "0.5rem 0.75rem",
    color: "rgb(17, 24, 39)", // text-gray-900
    display: "flex",
    alignItems: "center",
  };

  const imgStyles = {
    width: "1.25rem", // size-5
    height: "1.25rem",
    borderRadius: "9999px",
    marginRight: "0.75rem", // ml-3
  };

  const truncateStyles = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  return (
    <div>
      <div style={{ position: "relative", marginTop: "0.5rem" }}>
        <button
          type="button"
          style={buttonStyles}
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >




          <span style={{ display: "flex", alignItems: "center" }}>
            <span style={{ ...truncateStyles }}>Tom Cook</span>
          </span>
          <span
            style={{
              pointerEvents: "none",
              position: "absolute",
              insetY: 0,
              right: 0,
              marginLeft: "0.75rem",
              display: "flex",
              alignItems: "center",
              paddingRight: "0.5rem",
              color: "rgb(156, 163, 175)", // text-gray-400
            }}
          >
            <svg
              style={{ width: "1.25rem", height: "1.2`5rem" }}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          
        </button>


        <ul style={listStyles} tabIndex="-1" role="listbox" aria-labelledby="listbox-label">
          <li style={listItemStyles} id="listbox-option-0" role="option">
            <span style={{ ...truncateStyles, fontWeight: "normal" }}>Wade Cooper</span>
            <span
              style={{
                position: "absolute",
                insetY: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                paddingRight: "1rem",
                color: "rgb(79, 70, 229)", // text-indigo-600
              }}
            >
              <svg
                style={{ width: "1.25rem", height: "1.25rem" }}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </li>
        </ul>


        
      </div>
    </div>
  );
};

export default Dropdown;
