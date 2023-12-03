import { useRef, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  buttonCaption: string;
  children: React.ReactNode;
}

export interface ModalRef {
  open: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(function Modal(
  { children, buttonCaption }: ModalProps,
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className=" py-6 px-8 rounded-md shadow-md">
      {children}
      <form action="" method="dialog" className="text-right mt-4">
        <button className="accent-btn ">{buttonCaption}</button>
      </form>
    </dialog>
  );
});

export default Modal;
