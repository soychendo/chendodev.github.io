import { skeletonStyle } from '../../styles/animation/styles'
import styled, { css } from 'styled-components'

export const ContainerSkeleton = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  margin-bottom: 1rem;
  @media (min-width: 480px) {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 768px) {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  @media (min-width: 992px) {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
 }
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease-out 0s;
  width: 100%;
  height: 355px;
`
export const CardImage = styled.img`
  width: 100%;
  height: auto !important;
  ${() => css`${skeletonStyle()}`}
`
export const CardTechnologies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  ${() => css`${skeletonStyle()}`}
`
export const ChildTechnology = styled.div`
  background-color: #191919;
  width: 30px;
  height: 30px;
  margin-left: 4px;
  border-radius: 50%;
`;
export const CardTitle = styled.div`
  text-align: center;
  color: #fff;
  ${() => css`${skeletonStyle()}`}
`;
export const CardDescription = styled.div`
  border: none;
  flex: 1 1 auto;
  padding: 1.25rem;
  ${() => css`${skeletonStyle()}`}
`
export const CardButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: #191919;
`
