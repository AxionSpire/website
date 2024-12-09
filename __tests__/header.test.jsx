import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Header } from '../app/(display)/headerfooter'
 
describe('Header', () => {
  it('renders a header', () => {
    render(<Header />)

    const header = screen.getByRole('banner', {
      name: /site header/i
    })
 
    expect(header).toBeInTheDocument()
  })
})