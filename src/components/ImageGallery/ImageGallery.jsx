import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.scss';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={image.id}
          image={image.webformatURL}
          largeImageURL={image.largeImageURL}
          openModal={openModal}
          index={index}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

// onClick={e => openModal(e)} // in ul open tag
