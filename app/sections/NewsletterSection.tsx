'use client';

import Modal, { ModalRef } from '@/components/Modal/Modal';
import { useRef, useState  } from 'react';

const NewsletterSection = () => {
  const [showModal, setShowModal] = useState();
  const modal = useRef<React.MutableRefObject<ModalRef | undefined>>(null);

  const handleClick = () => {
    modal.current?.open();
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h3 className="mb-4">Subscribe to our newsletter</h3>
        <form action="" className="flex flex-col gap-4">
          <input type="text" placeholder="name" className="input-field" />
          <input type="email" placeholder="email" className="input-field" />
        </form>
      </Modal>

      <section className="big-container">
        <div className="text-center">
          <h2>Your journey shouldnt end here</h2>
          <h4 className="my-4">
            Subscribe to out newsletter to learn more about us.
          </h4>
          <button className="primary-btn" onClick={handleClick}>
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default NewsletterSection;
