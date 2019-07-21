import React from 'react';
import ReactDOM from 'react-dom';
import NasaImage from './NasaImage';
import renderer from 'react-test-renderer';

const match = {
  'params' : {
      'nasa_id' : 'aaaa'
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');

  
  ReactDOM.render(<NasaImage match={match} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<NasaImage match={match} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});