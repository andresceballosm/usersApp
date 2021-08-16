// vendors
import 'react-native';
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

// components
import HomeComponent from '../home.component';

const person = require('../../../mocks/person.json');
let component: any;


describe('<Home />', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() : any => Promise.resolve({
            json: () => Promise.resolve([person])
        }));
        component = render(<HomeComponent navigation={null}/> )
    });

    it('Render correctly', () => {
        expect(component).toBeDefined();
    });

    it('Api return user correctly', async () => {
        waitFor(() => {
            expect(component.getByTestId('test-users').toBeDefined());
        })
    });

    it('update users state correctly', async () => {
        const setUsers = jest.fn();
        waitFor(() => {
            expect(setUsers).toHaveBeenCalled();
        })
    })
});
 