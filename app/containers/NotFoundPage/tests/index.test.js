import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import NotFoundPage from '../index';

const renderer = new ShallowRenderer();

describe('<NotFoundPage />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<NotFoundPage />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
