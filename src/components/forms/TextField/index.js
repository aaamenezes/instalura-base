import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Text from '../../foundation/Text'

const InputWrapper = styled.div`
  margin-bottom: 17px;
`

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${ ({ theme }) => theme.colors.support.gray };
  padding: 12px 16px;
  outline: 0;
  border-radius: ${ ({ theme }) => theme.borderRadius.large };

  ${ ({ theme, isFieldInvalid }) => isFieldInvalid && css`
      border-color: ${ theme.colors.feedback.error.color };
      & + span {
        color: ${ theme.colors.feedback.error.color }
        font-size: 11px;
      }
  ` }
`

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1'
}

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  error,
  isTouched,
  ...props
}) {
  const hasError = Boolean(error)
  const isFieldInvalid = hasError && isTouched

  return (
    <InputWrapper>
      <Input
        type='text'
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        isFieldInvalid={isFieldInvalid}
        {...props}
      />
      {isFieldInvalid && (
        <Text
          variant='smallestException'
          color='feedback.error'
          role='alert'
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  )
}

TextField.defaultProps = {
  error: '',
  isTouched: false
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
