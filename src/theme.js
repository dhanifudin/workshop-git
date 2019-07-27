import { swiss } from 'mdx-deck/themes'

export default {
  ...swiss,
  styles: {
    code: {
      fontSize: '0.4em'
    },
    blockquote: {
      background: '#f9f9f9',
      borderLeft: '10px solid #ccc',
      margin: '1.5em 10px',
      padding: '0.5em 10px',
      before: {
        color: '#ccc',
        content: 'open-quote',
        fontSize: '4em',
        lineHeight: '0.1em',
        marginRight: '0.25em',
        verticalAlign: '-0.4em',
      }
    },
  }
}
