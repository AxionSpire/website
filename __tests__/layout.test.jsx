import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Layout from '../app/layout'
 
describe('Layout', () => {
  it('renders a heading', () => {
    render(<Layout />)

    const heading = screen.getByRole('banner', {
      name: /site header/i
    })
 
    expect(heading).toBeInTheDocument()
  })
})