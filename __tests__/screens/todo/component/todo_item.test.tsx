import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from '../../../../src/presentation/screen/todo/component/todo_item';
import { render, fireEvent } from '@testing-library/react-native';


describe('<TodoItem/>', () => {
    it('todo item', () => {

        //mock the props that passed to TodoItem
        const todo = {title: "Example"}
        const onEditTap = jest.fn()
        const onDeleteTap = jest.fn()
        onDeleteTap.mockReturnValueOnce(true)
    
    
        //check if the widget render correctly
        const component = renderer.create(<TodoItem todo={todo} deleteTodo={onDeleteTap} editTodo={onEditTap}/>)
        expect(component).toMatchSnapshot()
    
        //check if the button pressed
        const { getByText } = render(<TodoItem todo={todo} deleteTodo={onDeleteTap} editTodo={onEditTap}/>)
        const buttonEdit = getByText("Edit")
        fireEvent.press(buttonEdit)
    
        const buttonDelete = getByText("Delete")
        fireEvent.press(buttonDelete)
    
        expect(onEditTap).toBeCalledTimes(1)
        expect(onDeleteTap.mock.results[0].value).toBe(true)
    
    })
})

