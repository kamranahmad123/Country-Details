import { render, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from '../Home';

const mockStore = configureMockStore();

describe('HomePage', () => {
  it('The input should be included in the document', () => {
    const store = mockStore({
      country: {
        country: [
          { name: 'Sudan', population: '975' }],
      },
    });
    const { getByPlaceholderText, queryByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    );
    const inputData = getByPlaceholderText('Search');
    fireEvent.change(inputData, { target: { value: 'Sudan' } });
    expect(queryByText('Sudan')).toBeInTheDocument();
  });
});
