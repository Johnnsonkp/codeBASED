import { useTheme } from '../theme-provider';

export default function Label({string}) {
  const {theme} = useTheme();
  
  return (
    <span 
      style={{
        // borderRadius: '12px', 
        borderRadius: '3px',
        marginRight: '0px',
        marginBottom: '8px',
        fontSize: '10px',
        background: `${theme == 'light'? '#3C3C3C' : '#EBEBEB'}`,
        color: `${theme == 'light'? '#EBEBEB' : '#3C3C3C'}`,
        padding: '0px 1px',
        fontWeight: 'bold'
      }}
    >
      {string}
    </span>
  )
}
