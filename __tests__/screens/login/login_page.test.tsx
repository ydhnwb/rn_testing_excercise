import React from 'react';
import renderer from 'react-test-renderer'
import LoginPage from '../../../src/presentation/screen/login/login_page';
import { render, fireEvent } from '@testing-library/react-native';


describe("test the login page", () => {
    it("should render correctly", () => {
        const widget = renderer.create(<LoginPage/>)
        expect(widget).toMatchSnapshot()
    })

    //gonna use render, not renderer
    it("validation should run correctly", () => {
        const { getByTestId, getByPlaceholderText, getByText, queryByText } = render(<LoginPage/>)

        //it is actually like doing web crawling.
        //also you can use by testId so it get the component directly, BUT it you need to pass ...props to every component
        const loginButton = getByTestId("buttonLogin")

        //should show email error
        fireEvent.press(loginButton)
        getByText("Email is not valid")

        //should show password error AND error email SHOULD NOT BE SHOWN
        fireEvent.changeText(getByPlaceholderText("Email"), "yudhanewbie@gmail.com")
        fireEvent.press(loginButton)
        getByText("Password is not valid")
        expect(queryByText("Email is not valid")).toBe(null)
    })
})