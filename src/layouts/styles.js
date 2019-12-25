import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  background: ${props => props.theme.palette.clrBackground};

  transform: ${({ isMobilePortrait, isMobileLandscape, isSmallWidth }) => {
    if (isMobileLandscape) return 'scale(0.5) !important';
    if (isMobilePortrait) return 'scale(0.75) !important';
    if (isSmallWidth) return 'scale(1) !important';
  }};

  width: ${({ isMobilePortrait, isMobileLandscape, isSmallWidth }) => {
    if (isMobileLandscape) return '200% !important';
    if (isMobilePortrait) return '133.33% !important';
    if (isSmallWidth) return '100% !important';
  }};

  height: ${({ isMobilePortrait, isMobileLandscape, isSmallWidth }) => {
    if (isMobileLandscape) return '200% !important';
    if (isMobilePortrait) return '133.33% !important';
    if (isSmallWidth) return '100% !important';
    return '100%';
  }};
`;
