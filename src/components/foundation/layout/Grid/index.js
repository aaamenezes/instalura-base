import styled, { css } from 'styled-components'
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia'
import { propToStyle } from '../../../../theme/utils/propToStyle'

const Container = styled.div`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;

  ${ breakpointsMedia({
    sm: css`
      max-width: 576px; 
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px; 
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `
  }) }

  ${ propToStyle('flex') }
  ${ propToStyle('display') }
  ${ propToStyle('alignItems') }
  ${ propToStyle('marginTop') }
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
  ${ propToStyle('flex') }
  ${ propToStyle('flexDirection') }
  ${ propToStyle('marginTop') }
  ${ propToStyle('marginRight') }
  ${ propToStyle('marginBottom') }
  ${ propToStyle('marginLeft') }
  ${ propToStyle('justifyContent') }
  
`

const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 16px;
  padding-left: 16px;

  ${ ({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${ (100 * value) / 12 }%;
        max-width: ${ (100 * value) / 12 }%;
      `
    }

    if (typeof value === 'object') {
      return breakpointsMedia({
        xs: value?.xs ? css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${ (100 * value.xs) / 12 }%;
          max-width: ${ (100 * value.xs) / 12 }%;
        ` : '',
        sm: value?.sm ? css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${ (100 * value.sm) / 12 }%;
          max-width: ${ (100 * value.sm) / 12 }%;
        ` : '',
        md: value?.md ? css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${ (100 * value.md) / 12 }%;
          max-width: ${ (100 * value.md) / 12 }%;
        ` : '',
        lg: value?.lg ? css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${ (100 * value.lg) / 12 }%;
          max-width: ${ (100 * value.lg) / 12 }%;
        ` : '',
        xl: value?.xl ? css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${ (100 * value.xl) / 12 }%;
          max-width: ${ (100 * value.xl) / 12 }%;
        ` : ''
      })
    }

    return undefined
  } }

  ${ ({ offset }) => {
    if (typeof offset === 'number') {
      return css`
        margin-left: ${ (100 * offset) / 12 }%;
      `
    }

    if (typeof offset === 'object') {
      return breakpointsMedia({
        xs: offset?.xs ? css`margin-left: ${ (100 * offset.xs) / 12 }%;` : '',
        sm: offset?.sm ? css`margin-left: ${ (100 * offset.sm) / 12 }%;` : '',
        md: offset?.md ? css`margin-left: ${ (100 * offset.md) / 12 }%;` : '',
        lg: offset?.lg ? css`margin-left: ${ (100 * offset.lg) / 12 }%;` : '',
        xl: offset?.xl ? css`margin-left: ${ (100 * offset.xl) / 12 }%;` : ''
      })
    }

    return undefined
  } }

  ${ propToStyle('display') }
  ${ propToStyle('flexDirection') }
  ${ propToStyle('justifyContent') }
  ${ propToStyle('alignItems') }
  ${ propToStyle('order') }
`

export const Grid = {
  Container,
  Row,
  Col
}
