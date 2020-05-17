import React from 'react'
import ListingDetails from './ListingDetails'
import {render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('ListingDetails', () => {
    it('should display basic info about the listing', () => {
        const { getByText } = render(<MemoryRouter><ListingDetails  details={}/></MemoryRouter>)
// need to pass listing in as a prop
        // expect(getByText())
        // expect(getByText())
        // expect(getByText())
        // expect(getByText())

    })
    it('should display basic info about the listing', () => {
        const { getByText } = render(<MemoryRouter><ListingDetails  details={}/></MemoryRouter>)

// need to pass listing in as a prop
        // expect(getByText('Bedrooms: 3')).toBeInTheDocument
        // expect(getByText('Bathrooms: 3')).toBeInTheDocument
        // expect(getByText('Cost per Night: $')).toBeInTheDocument

    })
    it('should display a list of features', ()  => {
        const { getByText } = render(<MemoryRouter><ListingDetails  details={}/></MemoryRouter>)

        // need to pass listing in as a prop
        expect(getByText()).toBeInTheDocument
        expect(getByText()).toBeInTheDocument

    })

    it('should pictures of the lisiting', ()  => {
        const { getByAltText } = render(<MemoryRouter><ListingDetails  details={}/></MemoryRouter>)

        expect(getByAltText('')).toBeInTheDocument()
    })
    it('should call the saveToFavorites method when the Add to Favorites button is clicked', () => {
        const mockSaveToFavorites = jest.fn()
        const { getByText } = render(<MemoryRouter><ListingDetails  details={} saveToFavorites={mockSaveToFavorites}/></MemoryRouter>)

        fireEvent.click(getByText('Add to Favorites'))
        expect(mockSaveToFavorites).toHaveBeenCalled()
        
    })
    it('should call the removeFromFavorites method when the Remove from Favorites button is clicked', () => {
        const mockRemoveFromFavorites = jest.fn()
        const { getByText } = render(<MemoryRouter><ListingDetails  details={} removeFromFavorites={mockRemoveFromFavorites}/></MemoryRouter>)

        fireEvent.click(getByText('Remove from Favorites'))
        expect(mockRemoveFromFavorites).toHaveBeenCalled()

    })
})