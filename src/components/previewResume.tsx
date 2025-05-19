import {useState} from 'react';
import Modal from 'react-modal';
import { resume } from 'src/lib/static';
import Button from './button';
import Resume from './resume';

const PreviewResume = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (
      <>
        <Button className="bg-purple bg-hover-light-purple button-glow-purple space-infront" onClick={() => setModalOpen(true)}>
          <span className="fa-solid fa-eye"/>
          <span className="space-infront">Preview Resume</span>
        </Button>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
      
          contentLabel="John Keyes Resume"
        >
          <Resume/>
        </Modal>
      </>
    );
};

export default PreviewResume;