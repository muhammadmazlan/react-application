import {firebase, render, screen} from '@testing-library/react';
import LoginButton from './LoginButton';

describe('LoginButton', ()=>{
    it('should render the test of login within the button',()=>{
        render(<LoginButton />);
        const loginButton = screen.getByText('Login');
        expect(loginButton).toBeDefined();
    });
});
