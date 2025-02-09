import { useTheme } from '../theme-provider';

export default function NumBubble({num}) {
  const {theme} = useTheme();
  
  return (
    <span 
      style={{
        borderRadius: '14px', 
        marginRight: '5px',
        fontSize: '10px',
        background: `${theme == 'light'? '#3C3C3C' : '#EBEBEB'}`,
        color: `${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
        padding: '2px 5px',
        fontWeight: 'bold'
      }}
    >
      {num}
    </span>
  )
}
