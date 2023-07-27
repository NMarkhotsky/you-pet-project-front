import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils/selectMediaRequests';

export const Wrapper = styled.div`
  margin-bottom: 24px;
  margin-top: 40px;
  @media ${selectTablet} {
    margin-bottom: 40px;
  }
  @media ${selectDesktop} {
    margin-bottom: 42px;
    margin-top: 40px;
  }
`;

export const NoticeCategoriesNavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media ${selectTablet} {
    gap: 12px;
  }
`;

export const NoticeCategoryItem = styled.li`
  display: flex;
  border: none;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 40px;
  cursor: pointer;

  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  letter-spacing: 0.56px;

  background-color: ${props => props.theme.colors.blueLight};
  color: ${props => props.theme.colors.blue};

  transition: all ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;