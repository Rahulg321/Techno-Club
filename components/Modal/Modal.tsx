import { useRef, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';

interface ModalProps {
  children: React.ReactNode;
}

export interface ModalRef {
  open: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(function Modal(
  { children },
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

  return createPortal(
    <dialog ref={dialog} className=" py-6 px-8 rounded-md shadow-md">
      <form method="dialog" className="text-right mb-8">
        <button className=" ">
          <ImCross size="20" />
        </button>
      </form>
      {children}
    </dialog>,
    document.getElementById('modal-root') as Element
  );
});

export default Modal;
