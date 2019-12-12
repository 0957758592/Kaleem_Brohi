import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  background: ${props => props.theme.palette.clrBackground};

  @media (max-width: 1600px) {
    transform: scale(0.85);
    transform-origin: 0 0;
    width: 117.64%;
    height: 117.64%;
  }

  @media (max-width: 1500px) {
    transform: scale(0.75);
    transform-origin: 0 0;
    width: 133.33%;
    height: 133.33%;
  }

  @media (max-width: 1080px) {
    transform: scale(0.65);
    transform-origin: 0 0;
    width: 153.84%;
    height: 153.84%;
  }

  @media (max-width: 940px) {
    transform: scale(0.55);
    transform-origin: 0 0;
    width: 181.81%;
    height: 181.81%;
  }

  @media (max-width: 790px) {
    transform: scale(0.45);
    transform-origin: 0 0;
    width: 222.22%;
    height: 222.22%;
  }

  @media (max-width: 700px) {
    transform: scale(0.35);
    transform-origin: 0 0;
    width: 285.71%;
    height: 285.71%;
  }

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
