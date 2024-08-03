import clsx from 'clsx';

import useModal from '@hooks/useModal';
import Modal from '@/shared/components/Modal';
import MobileMenu from '../MobileMenu';
import Burger from './components/Burger';
import Logo from './components/Logo';
import LogoutBtn from './components/LogoutBtn';
import Title from './components/Title';
import styles from './Header.module.scss';
import useMedia from '@hooks/useMedia';

const Header = () => {
  const [isMenuOpen, openMenu, closeMenu] = useModal();
  const { isDesktop } = useMedia();
  return (
    <div className={clsx(styles.sectionHeader)}>
      <div className={styles.sectionTitle}>
        {!isDesktop ? (
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
      {isDesktop ? <LogoutBtn /> : ''}
      {isMenuOpen && (
        <Modal onClose={closeMenu}>
          <MobileMenu onClose={closeMenu} />
        </Modal>
      )}
    </div>
  );
};

export default Header;
