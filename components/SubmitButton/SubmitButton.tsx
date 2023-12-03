'use client';

import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="primary-btn">
      {pending ? 'Submitting' : 'Submit'}
    </button>
  );
};

export default SubmitButton;
