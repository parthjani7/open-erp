import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Login from '../app/(auth)/login/page'
jest.mock('../public/google.svg', () => 'svg')

describe('Login', () => {
  let email: HTMLElement
  beforeEach(() => {
    render(<Login />)
    email = screen.getByPlaceholderText('Email')
  })

  it('page is accessible', async () => {
    expect(email).toBeInTheDocument()
  })
})
