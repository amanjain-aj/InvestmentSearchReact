import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

describe("appComponent", () => {
    describe('boundary', () => {
        test("AppComponent boundary renders Login component for / route", () => {
            render(
                <Router initialEntries={['/']}>
                    <App />
                </Router>
            );
            expect(screen.getByText('Email ID')).toBeInTheDocument();
            expect(screen.getByText('Password')).toBeInTheDocument();
            expect(screen.getByText('SIGN IN')).toBeInTheDocument();
            expect(screen.getByAltText('Kanini')).toBeInTheDocument();
           
        });

        test("AppComponent boundary renders Login component for /login route", () => {
            render(
                <Router initialEntries={['/login']}>
                    <App />
                </Router>
            );
            expect(screen.getByText('Email ID')).toBeInTheDocument();
            expect(screen.getByText('Password')).toBeInTheDocument();
            expect(screen.getByText('SIGN IN')).toBeInTheDocument();
            expect(screen.getByAltText('Kanini')).toBeInTheDocument();
        });

        test("AppComponent boundary renders search component for /search route",  () => {
            render(
                <Router initialEntries={['/search']}>
                    <App />
                </Router>
            );
            expect(screen.getByAltText('Kanini')).toBeInTheDocument();
            
            // expect(await screen.findByRole("button", { name: "Log Out" })).toBeInTheDocument();

        });

        test("AppComponent boundary renders Destination component for /dashboard route", () => {
            render(
                <Router initialEntries={['/dashboard']}>
                    <App />
                </Router>
            );
            expect(screen.getByAltText('Kanini')).toBeInTheDocument();
        });
    });
});
