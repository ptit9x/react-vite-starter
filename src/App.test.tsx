import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('renders the App component and handles click', () => {
        render(<App />)

        // Verify the initial text
        expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()

        // Get the button and check initial state
        const button = screen.getByRole('button', { name: /count is 0/i })
        expect(button).toBeInTheDocument()

        // Simulate a click event
        fireEvent.click(button)

        // Verify state update
        expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
    })
})
