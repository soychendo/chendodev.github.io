import { css, keyframes } from 'styled-components'

const skeletonLoading = keyframes`
  from {
      background-position: 0% 0%;
  }
  to {
      background-position: -135% 0%;
  }
`

const skeletonBackground = (light: boolean) => (
  css`
    background: ${!light
      ? css`linear-gradient(-90deg, #333 0%, #ddd 50%, #333 100%)`
      : css`linear-gradient(-90deg, #191919 0%, #242424 50%, #191919 100%)`};
    background-size: 400% 400%;
    animation: ${skeletonLoading} 1.4s ease-in-out infinite;
    `
)

export const skeletonStyle = (light = true) => skeletonBackground(light)
