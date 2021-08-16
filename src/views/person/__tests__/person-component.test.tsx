// vendors
import 'react-native';
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

// components
import PersonComponent from '../person.component';
import CardUserComponent from '../../../components/card-user/card-user.component';

const person = require('../../../mocks/person.json');
let component: any;

describe('<PersonComponent />', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() : any => Promise.resolve({
            json: () => Promise.resolve(person)
        }));
        component = render(<PersonComponent /> )
    });

    it('Render correctly', () => {
        expect(component).toBeDefined();
    });

    it('Api return user correctly', async () => {
        waitFor(() => {
            expect(component.getByTestId('card-user-test').toBeDefined());
        })
    });

    it('update user state correctly', async () => {
        const setUser = jest.fn();
        waitFor(() => {
            expect(setUser).toHaveBeenCalled();
        })
    });

    it('render CardUserComponent correctly', async () => {
        waitFor(() => {
            expect(CardUserComponent).toHaveBeenCalled();
        })
    })
});
 