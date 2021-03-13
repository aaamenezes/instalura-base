import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { propToStyle } from '../../../theme/utils/propToStyle'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'
import Link from '../../commons/Link'

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${ ({ theme }) => theme.typographyVariants.paragraph1.fontSize };
    font-weight: ${ ({ theme }) => (
    theme.typographyVariants.paragraph1.fontWeight
  ) };
    line-height: ${ ({ theme }) => (
    theme.typographyVariants.paragraph1.lineHeight
  ) };
  `,
  smallestException: css`
    font-size: ${ ({ theme }) => (
    theme.typographyVariants.smallestException.fontSize
  ) };
    font-weight: ${ ({ theme }) => (
    theme.typographyVariants.smallestException.fontWeight
  ) };
    line-height: ${ ({ theme }) => (
    theme.typographyVariants.smallestException.lineHeight
  ) };
  `,
  title: css`
    ${ ({ theme }) => css`
      font-size: ${ theme.typographyVariants.titleXS.fontSize };
      font-weight: ${ theme.typographyVariants.titleXS.fontWeight };
      font-height: ${ theme.typographyVariants.titleXS.fontHeight };
    ` }
    ${ breakpointsMedia({
    md: css`
        ${ ({ theme }) => css`
          font-size: ${ theme.typographyVariants.title.fontSize };
          font-weight: ${ theme.typographyVariants.title.fontWeight };
          font-height: ${ theme.typographyVariants.title.fontHeight };
        ` }
      `
  }) }
  `
}

const TextBase = styled.span`
  ${ ({ variant }) => TextStyleVariantsMap[variant] }
  color: ${ ({ theme, color }) => get(theme, `colors.${ color }.color}`) };
  ${ propToStyle('marginBottom') }
  ${ propToStyle('margin') }
  ${ propToStyle('color') }
  ${ propToStyle('textAlign') }
`

function Text({ tag, variant, children, href, ...props }) {
  if (href) {
    return (
      <TextBase
        href={href}
        as={Link}
        variant={variant}
        {...props}
      >
        { children }
      </TextBase>
    )
  }

  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      { children }
    </TextBase>
  )
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: ''
}

export default Text
