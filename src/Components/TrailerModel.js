import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  width: 80%;
  max-width: 800px;
`;

const TrailerModal = ({ ytTrailer, onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent>
        <iframe
          title="YouTube Trailer"
          width="100%"
          height="400"
          src={ytTrailer}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </ModalContent>
    </ModalBackground>
  );
};

export default TrailerModal;
