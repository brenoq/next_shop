import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',
  width: '10rem',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    backgroundColor: '$green500',
  },
})

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Enviar
    </Button>
  )
}
