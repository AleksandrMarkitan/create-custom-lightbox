import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { LoaderInModal } from '../Loader/Loader';
import s from '../Modal/Modal.module.scss';

export const Modal = ({ closeModal, images, currentImageIndex }) => {
  const [loaded, setLoaded] = useState(false);
  const [index, setIndex] = useState(currentImageIndex);
  console.log(index);
  const url = images[index].largeImageURL;
  console.log(images.length);

  useEffect(() => {
    const closeByEsc = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  const closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const loadHandler = () => {
    setLoaded(true);
  };

  const openPrev = () => {
    if (index === 0) {
      return setIndex(images.length - 1);
    }
    setIndex(index - 1);
  };

  const openNext = () => {
    if (index === images.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  return (
    <>
      <div className={s.overlay} onClick={closeByBackdrop}>
        <div className={s.modal}>
          <button onClick={() => openPrev()}>Prev</button>
          <img
            src={url}
            alt=""
            onLoad={loadHandler}
            style={{ display: loaded ? 'block' : 'none' }}
          />
          {!loaded && <LoaderInModal />}
          <button onClick={() => openNext()}>Next</button>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  images: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
};
