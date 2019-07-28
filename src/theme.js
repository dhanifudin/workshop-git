import { swiss } from 'mdx-deck/themes'

export default {
  ...swiss,
  styles: {
    h1: {
      fontSize: '2em',
    },
    h2: {
      fontSize: '1.5em'
    },
    h3: {
      fontSize: '1em'
    },
    p: {
      fontSize: '0.8em',
      textAlign: 'center',
    },
    code: {
      fontSize: '0.4em',
    },
    blockquote: {
      background: '#f9f9f9',
      borderLeft: '10px solid #ccc',
      margin: '1.5em 10px',
      padding: '0.5em 10px',
    },
  }
}
