// vendors
import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

// components
import CardUserComponent from '../../../components/card-user/card-user.component';

let component: any;
const person = require('../../../mocks/person.json');

describe('<CardUserComponent />', () => {
    beforeEach(() => {
        component = render(<CardUserComponent user={person} /> )
    });

    it('Render correctly', () => {
        expect(component).toBeDefined();
    });

    it('Render data correctly', async () => {
        const { getByText } = component;
        const element = getByText('San Francisco');
        expect(element).toBeDefined();
    });
});
 