import PropTypes from 'prop-types';
import {
  ContainerList,
  TopPart,
  ListTitle,
  PetsCardList,
  Button,
} from './PetsList.styled';
import { PetsItem } from '../PetsItem/PetsItem';
import { Icon } from '../Icon/Icon';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Title,
  TitleBr,
  CatImg,
  Img,
} from '../../pages/NotFoundPage/NotFoundPage.styled';

import catdesktop1x from '../../assets/images/NotFoundImages/catdesktop.png';
import catdesktop2x from '../../assets/images/NotFoundImages/catdesktop@2x.png';
import cattablet1x from '../../assets/images/NotFoundImages/cattablet.png';
import cattablet2x from '../../assets/images/NotFoundImages/cattablet@2x.png';
import catmobile1x from '../../assets/images/NotFoundImages/catmobile.png';
import catmobile2x from '../../assets/images/NotFoundImages/catmobile@2x.png';

export const PetsList = ({ pets, deletePet }) => {
  useEffect(() => {
    if (pets === [] && !pets) {
      return;
    }
  }, [pets]);

  return (
    <ContainerList>
      <TopPart>
        <ListTitle>My pets:</ListTitle>

        <NavLink to="/add-pet">
          <Button type="button">
            Add Pet
            <Icon
              iconName={'icon-plus-small'}
              width={'24px'}
              height={'24px'}
              stroke={'#FEF9F9'}
              fill={'#FEF9F9'}
            />
          </Button>
        </NavLink>
      </TopPart>
      <PetsCardList>
        {pets.map(card => (
          <PetsItem key={card._id} item={card} deletePet={deletePet} />
        ))}
      </PetsCardList>
      {pets.length === 0 && (
        <div>
          <Title>
            <TitleBr>Sorry!</TitleBr> You don't have any pets &#58;&#40;
          </Title>
          <CatImg>
            <picture>
              <source
                srcSet={(catdesktop1x, catdesktop2x)}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={(cattablet1x, cattablet2x)}
                media="(min-width: 768px) and (max-width: 1279px)"
              />
              <source
                srcSet={(catmobile1x, catmobile2x)}
                media="(max-width: 767px)"
              />
              <Img src={catdesktop1x} alt="Cat with tongue" />
            </picture>
          </CatImg>
        </div>
      )}
    </ContainerList>
  );
};

PetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deletePet: PropTypes.func.isRequired,
};
