import React, {useRef} from 'react'

import {ArrowLeft} from './ArrowLeft'
import {ArrowRight} from './ArrowRight'
import {
  CarouselItem,
  LeftCarouselButton,
  RightCarouselButton,
  CarouserContainer,
  CarouserContainerInner,
} from './Carousel.styled'

import {usePosition} from './usePosition'

export function Carousel({children}) {
  const ref = useRef()

  const {
    hasItemsOnLeft,
    hasItemsOnRight,
    scrollRight,
    scrollLeft,
  } = usePosition(ref)

  return (
    <CarouserContainer role="region">
      <CarouserContainerInner ref={ref}>
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index}>{child}</CarouselItem>
        ))}
      </CarouserContainerInner>
      <LeftCarouselButton
        hasItemsOnLeft={hasItemsOnLeft}
        onClick={scrollLeft}
        aria-label="Previous slide"
      >
        <ArrowLeft />
      </LeftCarouselButton>
      <RightCarouselButton
        hasItemsOnRight={hasItemsOnRight}
        onClick={scrollRight}
        aria-label="Next slide"
      >
        <ArrowRight />
      </RightCarouselButton>
    </CarouserContainer>
  )
}
