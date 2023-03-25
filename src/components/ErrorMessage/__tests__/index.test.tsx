import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import ErrorMessage from '../index';

describe('Tests for ErrorMessage component', () => {
   it('should successfully render the ErrorMessage', async () => {
      const { getByText } = render(<ErrorMessage />);
      expect(getByText('Something went wrong. Please try again.')).toBeInTheDocument();
   });
});
