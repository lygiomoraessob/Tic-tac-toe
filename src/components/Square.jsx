import Button from '@mui/material/Button';

export default function Square({ value, onSquareClick }) {
  return (
    <Button
      variant="contained"
      onClick={onSquareClick}
      sx={{
        width: 64,
        height: 64,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: value === 'X' ? '#000' : value === 'O' ? '#888' : '#222',
        border: '2px solid #fff',
        margin: '4px',
        '&:hover': {
          backgroundColor: '#444',
        },
      }}
    >
      {value}
    </Button>
  );
}