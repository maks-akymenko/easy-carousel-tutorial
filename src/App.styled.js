import styled from 'styled-components'

export const H1 = styled('h1')`
  text-align: center;
  margin: 0;
  padding-bottom: 10rem;
`

export const Relative = styled('div')`
  position: relative;
`

export const Flex = styled('div')`
  display: flex;
`

export const HorizontalCenter = styled(Flex)`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  max-width: 25rem;
`

export const Container = styled('div')`
  height: 100vh;
  width: 100%;

  background: #ecf0f1;
`

export const Item = styled('div')`
  color: white;
  font-size: 2rem;
  text-transform: capitalize;

  width: ${({size}) => `${size}rem`};
  height: ${({size}) => `${size}rem`};

  display: flex;

  align-items: center;
  justify-content: center;
`
