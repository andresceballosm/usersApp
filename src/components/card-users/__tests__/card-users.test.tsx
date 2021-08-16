// vendors
import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

// components
import CardUsersComponent from '../card-users.component';

let component: any;
let handleTapDetail = jest.fn();

describe('<CardUsersComponent />', () => {
    beforeEach(() => {
        component = render(<CardUsersComponent username={'mojombo'} handleTapDetail={handleTapDetail}  /> )
    });

    it('Render correctly', () => {
        expect(component).toBeDefined();
    });

    it('Render data correctly', async () => {
        const { getByText } = component;
        const element = getByText('mojombo');
        expect(element).toBeDefined();
    });
});