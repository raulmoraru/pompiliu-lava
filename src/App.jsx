import CustomButton from './components/Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import StaticCard from './components/Cards/StaticCard';
import MyModal from './components/Modal/ConfirmationMoldal';

import './App.scss';

const App = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showInformativeModal, setShowInformativeModal] = useState(false);
  const [hasExtraActions, setHasExtraActions] = useState(false);
  const [hasDelete, setHasDelete] = useState(false);

  const handleToggleConfirmationModal = () => {
    setShowConfirmationModal(!showConfirmationModal);
  };

  const handleToggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const handleToggleInformativeModal = () => {
    setShowInformativeModal(!showInformativeModal);
  };

  const handleConfirm = () => {
    console.log('Confirmed');
    setShowConfirmationModal(false); // Close the modal after confirming
    setShowDeleteModal(false); // Close delete modal if it was open
    setShowInformativeModal(false); // Close informative modal if it was open
  };

  const handleCancel = () => {
    console.log('Canceled');
    setShowConfirmationModal(false);
    setShowDeleteModal(false);
    setShowInformativeModal(false);
  };

  const handleAddExtraActions = () => {
    setHasExtraActions(!hasExtraActions);
  }

  const handleAddDelete = () => {
    setHasDelete(!hasDelete);
  }

  return (
    <div className="app">
      <h3 className='title d-flex justify-content-center'>
        Here you can see all the components that I have created
      </h3>
      <div className='buttons-container mt-4 mb-4'>
        <h3 className='p-4 d-flex justify-content-center'>
          Buttons
        </h3>
        <div className='elements'>
          <div className='d-flex flex-column justify-content-center element'>
            <h5 className='mb-4 d-flex justify-content-center'>
              Primary
            </h5>
            <CustomButton
              variant={'primary'}
              title={'Button'}
            />
            <p className="text-center text-break mt-3">Triggers the main action for a task or process</p>
          </div>
          <div className='divider'></div>
          <div className='d-flex flex-column justify-content-center element'>
            <h5 className='mb-4 d-flex justify-content-center'>
              Secondary
            </h5>
            <CustomButton
              variant={'secondary'}
              title={'Button'}
            />
            <p className="text-center text-break mt-3">Supports the primary action or offers alternatives.</p>
          </div>
          <div className='divider'></div>
          <div className='d-flex flex-column justify-content-center element'>
            <h5 className='mb-4 d-flex justify-content-center'>
              Tertiary
            </h5>
            <CustomButton
              variant={'tertiary'}
              title={'Button'}
            />
            <p className="text-center text-break mt-3">Used for less prominent actions or links</p>
          </div>
          <div className='divider'></div>
          <div className='d-flex flex-column justify-content-center element'>
            <h5 className='mb-4 d-flex justify-content-center'>
              Danger
            </h5>
            <CustomButton
              variant={'danger'}
              title={'Button'}
            />
            <p className="text-center text-break mt-3">Initiates deletion and prompts for confirmation</p>
          </div>
        </div>
        <CustomButton
          className='show-use-case-button'
          title='Show use case'
        />
      </div>
      <div className='cards-container mt-4 mb-4'>
        <h3 className='p-4 d-flex justify-content-center'>
          Static Card
        </h3>
        <div className='elements'>
          <StaticCard
            title={'My cards title'}
            description={'My cards description'}
            hasExtraActions={hasExtraActions}
            isRemovable={hasDelete}
          />
          {
            hasDelete ?
              <p className="text-center text-break w-30">Offers a way to remove this card if that is the only extra action needed</p> :
              hasExtraActions ?
                <p className="text-center text-break w-30">Offers additional options for further actions such as editing or deleting.</p>
                : <p className="text-center text-break w-30">The static card serves as a navigational element linking to other content</p>
          }
          <div className='d-flex ms-4 flex-column w-25 justify-content-between'>
            <CustomButton
              variant={!hasExtraActions ? 'primary' : 'danger'}
              title={!hasExtraActions ? 'Add extra actions' : 'Remove extra actions'}
              disabled={hasDelete}
              handleOnClick={handleAddExtraActions}
            />
            <CustomButton
              variant={!hasDelete ? 'primary' : 'danger'}
              title={!hasDelete ? 'Add delete' : 'Remove delete'}
              disabled={hasExtraActions}
              handleOnClick={handleAddDelete}
            />
          </div>
        </div>
        <CustomButton
          className='show-use-case-button'
          title='Show use case'
        />
      </div>
      <div className='modals-container mt-2'>
        <h3 className='p-4 d-flex justify-content-center'>
          Modals
        </h3>
        <div className='elements'>
          <CustomButton
            onClick={handleToggleConfirmationModal}
            title={'Trigger Confirmation Modal'}
          />
          <MyModal
            key='confirmModal'
            show={showConfirmationModal}
            variant='confirmation'
            modalBodyDOM={<>Prompts users to confirm their intended action before proceeding, ensuring they are fully aware of the consequences</>}
            title={'Confirmation Modal'}
            onClose={handleToggleConfirmationModal}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
          <CustomButton
            onClick={handleToggleDeleteModal}
            title={'Trigger Delete Modal'}
          />
          <MyModal
            key='deleteModal'
            show={showDeleteModal}
            variant='delete'
            modalBodyDOM={<>Requests user approval before permanently deleting content, often providing a clear warning about the irreversibility of the action</>}
            title={'Delete Modal'}
            onClose={handleToggleDeleteModal}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
          <CustomButton
            onClick={handleToggleInformativeModal}
            title={'Trigger Informative Modal'}
          />
          <MyModal
            key='informativeModal'
            show={showInformativeModal}
            variant='informative'
            modalBodyDOM={<>Delivers important information or updates to the user, typically without requiring any further action, simply acknowledging the message</>}
            title={'Informative Modal'}
            onClose={handleToggleInformativeModal}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        </div>
        <CustomButton
          className='show-use-case-button'
          title='Show use case'
        />
      </div>
    </div>
  );
}

export default App;
