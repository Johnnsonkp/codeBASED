export const LeftSlideButton = ({onClick}) => {
  return (
    <button onClick={onClick} style={{padding: "0.3em 0.6em", margin: '2px', border: "1px solid #3C3C3C", borderRadius: '2px'}}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}

export const RightSlideButton = ({onClick}) => {
  return (
    <button 
      onClick={onClick} style={{padding: "0.3em 0.6em", margin: '2px', border: "1px solid #3C3C3C", borderRadius: '2px'}}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
            fill="currentColor"
          />
        </svg>
    </button>
  )
}