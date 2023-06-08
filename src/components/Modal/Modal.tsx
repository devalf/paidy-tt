import React, { PropsWithChildren } from 'react';
import cn from 'classnames';

import { Icon } from '../';

import PaidyLogo from '../../assets/images/paidy-logo.png';
import { ReactComponent as LeftArrowIcon } from '../../assets/svg/line-angle-left-icon.svg';
import { ReactComponent as CloseIcon } from '../../assets/svg/close-line-icon.svg';

type ModalProps = {
  isOpen: boolean;
  onCloseClick: () => void;
  headerContent?: React.ReactNode;
};

/**
 * Very basic Modal component which can be used to display single modal.
 * It was not build in a correct way, but it is enough for test task.
 */
export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  onCloseClick,
  children,
  headerContent,
}) => {
  return (
    <div className={cn('overlay', { opened: isOpen })}>
      <div className={'modal'}>
        <div className={'modal-header'}>
          <div className={'modal-header-topline'}>
            <div>
              <Icon component={LeftArrowIcon} />
            </div>
            <div className={'ct-flex-v-centered'}>
              <img src={PaidyLogo} alt='paidy logo' className={'modal-header-logo'} />
              <span className={'ml-s'}>paidy</span>
            </div>
            <div onClick={onCloseClick}>
              <Icon component={CloseIcon} />
            </div>
          </div>

          {headerContent && <div className={'modal-header-content pt'}>{headerContent}</div>}
        </div>
        <div className={'modal-content'}>{children}</div>
      </div>
    </div>
  );
};
