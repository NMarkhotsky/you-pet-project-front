import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { Icon } from '../Icon/Icon';
import { NavLink, UserMenuBox, UserMenuButton } from './UserMenu.styled';

export const UserMenu = ({ open }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1280); 
    };

    checkScreenSize(); 

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      {isDesktop ? (
        <UserMenuBox>
          <UserMenuButton type="button" onClick={() => dispatch(logout())}>
            Log out
            <Icon
              iconName={'icon-logout'}
              width={'24px'}
              height={'24px'}
              stroke={'#FEF9F9'}
            />
          </UserMenuButton>

          <NavLink to="/user">
            <Icon
              iconName={'icon-user'}
              width={'24px'}
              height={'24px'}
              fill={'#FFC107'}
            />
            {user.name}
          </NavLink>
        </UserMenuBox>
      ) : (
        <UserMenuBox>
          {open ? (
            <UserMenuButton type="button" onClick={() => dispatch(logout())}>
              Log out
              <Icon
                iconName={'icon-logout'}
                width={'24px'}
                height={'24px'}
                stroke={'#FEF9F9'}
              />
            </UserMenuButton>
          ) : (
            <NavLink to="/user">
              <Icon
                iconName={'icon-user'}
                width={'24px'}
                height={'24px'}
                fill={'#FFC107'}
              />
              {user.name}
            </NavLink>
          )}
        </UserMenuBox>
      )}
    </>
  );
};

UserMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

// <UserMenuBox>
//   {open ? (
//     <UserMenuButton type="button" onClick={() => dispatch(logout())}>
//       Log out
//       <Icon
//         iconName={'icon-logout'}
//         width={'24px'}
//         height={'24px'}
//         stroke={'#FEF9F9'}
//       />
//     </UserMenuButton>
//   ) : (
//     <NavLink to="/user">
//       <Icon
//         iconName={'icon-user'}
//         width={'24px'}
//         height={'24px'}
//         fill={'#FFC107'}
//       />
//       {user.name}
//     </NavLink>
//   )}
// </UserMenuBox>;