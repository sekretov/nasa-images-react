import React from 'react';
import ReactDOM from 'react-dom';
import NasaImageList from './NasaImageList';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NasaImageList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<NasaImageList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});