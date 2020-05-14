import React from 'react'
import Header from './Header'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
    it('displays a header', () => {
        const { getByText } = render(<Header />)

        expect(getByText('V.R.A.D.')).toBeInTheDocument()
    })

    it('when a guest signs in, it should display their name', () =>  {
        const { getByText } = render(<MemoryRouter><Header user={ {name: 'Lauren', email: 'meatballs@aol.com', purpose: 'fugitive' }}/></MemoryRouter>)

        expect(getByText('User: Lauren')).toBeInTheDocument()
    })

    it('when a guest signs in, it should display their trip purpose', () =>  {
        const { getByText } = render(<MemoryRouter><Header user={ {name: 'Lauren', email: 'meatballs@aol.com', purpose: 'fugitive' }}/></MemoryRouter>)

        expect(getByText('Trip Purpose: fugitive')).toBeInTheDocument()
    })
})