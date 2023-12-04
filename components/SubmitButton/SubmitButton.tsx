'use client';

import { useFormStatus } from 'react-dom';

const SubmitButton = ({ buttonCaption }: { buttonCaption: string }) => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="primary-btn">
      {pending ? 'Submitting' : buttonCaption}
    </button>
  );
};

export default SubmitButton;
