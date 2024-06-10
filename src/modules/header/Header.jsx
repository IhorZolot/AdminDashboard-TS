import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

import useModal from '../../hooks/useModal';
import Modal from '../../shared/components/Modal';
import MobileMenu from '../MobileMenu';
import Burger from './components/Burger';
import Logo from './components/Logo';
import LogoutBtn from './components/LogoutBtn';
import Title from './components/Title';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, openMenu, closeMenu] = useModal();
  const isMobile = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <div className={clsx(styles.sectionHeader)}>
      <div className={styles.sectionTitle}>
        {!isMobile ? (
          <Burger
            onClick={() => {
              openMenu();
            }}
          />
        ) : (
          ''
        )}
        <Logo />
        <Title />
      </div>
      {isMobile ? <LogoutBtn /> : ''}
      {isMenuOpen && (
        <Modal onClose={closeMenu}>
          <MobileMenu onClose={closeMenu} />
        </Modal>
      )}
    </div>
  );
};

export default Header;
