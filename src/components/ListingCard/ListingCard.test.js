import React from 'react'
import ListingCard from './ListingCard'
import {render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('ListingCard', () => {
    it('displays the some basic info about the listing', () => {
        const { getByText } = render(
        <MemoryRouter>
            <ListingCard name={'The Palace'} />
        </MemoryRouter>)
        
        expect(getByText('The Palace')).toBeInTheDocument()
    })

    it('should display an image of the listing', () => {
        const { getByAltText } = render(<MemoryRouter>
            <ListingCard name={'The Palace'} listing_id={5}/>
        </MemoryRouter>)

        expect(getByAltText('The Palace')).toBeInTheDocument()
    })

    it('should call setCurrentListings method when Listing Details button is clicked', () => {
        const mockSetCurrentListing = jest.fn()
        const { getByText } = render(
        <MemoryRouter>
            <ListingCard name={'The Palace'} setCurrentListing={mockSetCurrentListing}/>
        </MemoryRouter>)

        fireEvent.click(getByText('Listing Details'))

        expect(mockSetCurrentListing).toHaveBeenCalled()
        
    })

})