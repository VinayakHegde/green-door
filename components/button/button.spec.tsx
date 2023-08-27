import { Button } from "./button";
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>test</Button>);
    expect(baseElement).toBeTruthy();
  });

  it('should render with the correct text', () => {
    const { getByText } = render(<Button>test</Button>);
    expect(getByText('test')).toBeTruthy();
  });

  it('should render with the correct variant', async () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>test</Button>);
    await userEvent.click(getByText('test'));
    expect(onClick).toHaveBeenCalled();
  });
});