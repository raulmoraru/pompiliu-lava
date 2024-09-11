import React from 'react';
import './ConfirmationModal.scss'; // Import the custom SCSS file
import PropTypes from 'prop-types';
import CustomButton from '../Button/Button';
import closeIcon from '../../assets/icons/close.svg';

const MyModal = ({ show, onClose, title, modalBodyDOM, variant = 'confirmation', onConfirm, onCancel }) => {
    return (
        <>
            {show ? (
                <div className="modal fade show d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{title}</h5>
                                <CustomButton
                                    variant='tertiary'
                                    title={<img className='close' src={closeIcon} alt="Close" />}
                                    handleOnClick={onClose}
                                />
                            </div>
                            <div className="modal-body">
                                {modalBodyDOM}
                            </div>
                            <div className="modal-footer">
                                <CustomButton
                                    className='p-0 me-3'
                                    variant='tertiary'
                                    title={variant === 'informative' ? 'Acknowledge' : 'Cancel'}
                                    handleOnClick={onCancel || onClose}
                                />
                                {
                                    variant === 'delete' ?
                                        <CustomButton
                                            variant="danger"
                                            title="Delete"
                                            handleOnClick={onConfirm}
                                        /> : variant === 'informative' ?
                                            null
                                            :
                                            <CustomButton
                                                title="Confirm"
                                                handleOnClick={onConfirm}
                                            />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show" onClick={onClose}></div>
                </div>
            ) : null}
        </>
    );
};

MyModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.oneOfType(PropTypes.string, PropTypes.node),
    modalBodyDOM: PropTypes.oneOfType(PropTypes.string, PropTypes.node),
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    variant: PropTypes.oneOf(['delete', 'confirmation', 'informative']),
};

export default MyModal;
