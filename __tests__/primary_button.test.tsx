import React from "react";
import renderer from 'react-test-renderer';
import PrimaryButton from "../src/presentation/shared_component/primary_button";

it('renders correctly', () => {
    const tree = renderer.create(<PrimaryButton/>);
    expect(tree).toMatchSnapshot()
})