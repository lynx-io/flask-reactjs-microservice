import React from 'react';
import { shallow } from 'enzyme';
import UsersList from '../UsersList';
import renderer from 'react-test-renderer';

const users = [
    {
        'active': true,
        'email': 'jesus@gmail.com',
        'id': 1,
        'username': 'jesus'
    },
    {
        'active': true,
        'email': 'jesus1@gmail.com',
        'id': 2,
        'username': 'jesus1'
    }
];

test('UsersList renders properly', () => {
    const wrapper = shallow(<UsersList users={users} />);
    const element = wrapper.find('h4');
    expect(element.length).toBe(2);
    expect(element.get(0).props.className).toBe('well');
    expect(element.get(0).props.children).toBe('jesus');
});

test('UsersList renders a snapshot properly', () => {
    const tree = renderer.create(<UsersList users={users} />).toJSON();
    expect(tree).toMatchSnapshot();
});