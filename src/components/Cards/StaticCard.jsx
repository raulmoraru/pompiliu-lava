import React from 'react';
import PropTypes from 'prop-types';
import imgPlaceholder from '../../assets/icons/image-placeholder.svg';
import extraActionsIcon from '../../assets/icons/extra-actions.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import './StaticCard.scss';

const StaticCard = ({ title, description, className, handleOnClick, hasExtraActions, isRemovable, ...rest }) => {
    const cardClass = `custom-card ${className}`;

    return (
        <div className={cardClass} {...rest}>
            <img className='icon' src={imgPlaceholder} />
            <div className='card-content'>
                {title}
                <small>{description}</small>
            </div>
            {
                hasExtraActions ?
                    <img className='card-extra-actions' src={extraActionsIcon} /> :
                    null
            }
            {
                !hasExtraActions && isRemovable ?
                    <img className='card-extra-actions' src={deleteIcon} /> :
                    null
            }
        </div>
    );
};

StaticCard.propTypes = {
    title: PropTypes.oneOfType(PropTypes.string, PropTypes.node),
    description: PropTypes.oneOfType(PropTypes.string, PropTypes.node),
    className: PropTypes.string,
    handleOnClick: PropTypes.func,
    isRemovable: PropTypes.bool,
};

export default StaticCard;
