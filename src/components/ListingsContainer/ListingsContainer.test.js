import React from 'react'
import ListingsContainer from './ListingsContainer'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('ListingContainer', () => {
    it('should display listing cards', () => {
        const listing1 = {
            "listing_id": 1,
            "area_id": 590,
            "name": "Daves Casa",
            "address": {
            "street": "2150 Quebec St",
            "zip": "80220"
            },
            "details": {
            "neighborhood_id": 5124122,
            "superhost": true,
            "seller_source": "91jss1",
            "beds": 3,
            "baths": 2.5,
            "cost_per_night": 10,
            "features": [
            "hot tub",
            "espresso machine"
            ]
            },
            "dev_id": "u4gh2j",
            "area": "rino",
            "db_connect": 834470
            }
        const listing2 = {
            "listing_id": 2,
            "area_id": 590,
            "name": "Laurens Casa",
            "address": {
            "street": "2150 Southie Ave",
            "zip": "02121"
            },
            "details": {
            "neighborhood_id": 5124122,
            "superhost": true,
            "seller_source": "91jss1",
            "beds": 5,
            "baths": 5.5,
            "cost_per_night": 1000,
            "features": [
            "hot tub",
            "espresso machine"
            ]
            },
            "dev_id": "u4gh2j",
            "area": "rino",
            "db_connect": 834470
            }
        const { getByText } = render(<MemoryRouter><ListingsContainer listings={[listing1, listing2]} /></MemoryRouter>)

        expect(getByText('Daves Casa')).toBeInTheDocument()
        expect(getByText('Laurens Casa')).toBeInTheDocument()
    })
})