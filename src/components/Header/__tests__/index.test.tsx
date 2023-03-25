import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../index';

describe('Tests for Header component', () => {
   it('should successfully render the Header', async () => {
      const { getByTestId } = render(<Header />);
      expect(getByTestId('company-logo')).toHaveTextContent('Century Cinema');
   });
});
