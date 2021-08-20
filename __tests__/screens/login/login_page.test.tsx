import React from 'react';
import renderer from 'react-test-renderer'
import LoginPage from '../../../src/presentation/screen/login/login_page';
import { render, fireEvent } from '@testing-library/react-native';
import axios from 'axios'
import LoginResponse from '../../../src/data/login/dto/login_response';
import loginPost from '../../fetchers/login/login_fetch';

// jest.mock('axios')
// const mockAxios = axios as jest.Mocked<typeof axios>
const mockAxios = jest.spyOn(axios, 'post')
const mockResponse400 : LoginResponse = {
    status: false,
    errors: ["Email validation error"],
    message: "Example of the message",
    data: {}
}
mockAxios.mockResolvedValue({data: mockResponse400})


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


    it("mock login request", async () => {
        const { getByTestId, getByPlaceholderText, getByText, queryAllByText } = render(<LoginPage/>)
        const loginButton = getByTestId("buttonLogin")

        fireEvent.changeText(getByPlaceholderText("Email"), "yudhanewbie@gmail.com")
        fireEvent.changeText(getByPlaceholderText("Password"), "yudhanewbie")
        fireEvent.press(loginButton)

        //isinya cuma axios.post aja cuma di file lain
        // const response = await loginPost()
        // console.log(response)

        // console.log(response)

        //it should return 400 from http, because failed in email validation (not have @ domainname.domain)
        //and shows the errors[0] message
        // expect(mockAxios).toHaveBeenCalledTimes(1)
        // expect(response.data).toBe(mockResponse400)
        expect(queryAllByText("Email validation error").length).toBe(0)
    })
})