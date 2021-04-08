import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"

import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZES = {
    small: {
      "--padding": "4px 0 4px 21px",
      "--width": width + "px",
      "--fontSize": "14px",
      "--borderBottom": "1px solid " + COLORS.black,
    },
    large: {
      "--padding": "7px 0 7px 33px",
      "--width": width + "px",
      "--fontSize": "18px",
      "--borderBottom": "2px solid " + COLORS.black,
    },
  }
  const styles = SIZES[size]
  const ICON_WRAPPER = {
    small: {
      "--position": "relative",
      "--top": "18px",
      "--color": COLORS.gray700,
    },
    large: {
      "--position": "relative",
      "--top": "26px",
      "--color": COLORS.gray700,
    },
  }
  const stylesWrapper = ICON_WRAPPER[size]
  let i

  if (size === "small") {
    i = Icon({ id: icon, size: 10, strokeWidth: 1 })
  } else {
    i = Icon({ id: icon, size: 16, strokeWidth: 2 })
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInputIconWrapper style={stylesWrapper}>{i}</TextInputIconWrapper>
      <TextInput
        type="text"
        placeholder={placeholder}
        style={styles}
      ></TextInput>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`

const TextInputIconWrapper = styled.div`
  position: var(--position);
  top: var(--top);
  color: var(--color);
  &:hover {
    stroke: ${COLORS.black};
  }
  svg {
    stroke: var(--color);
    &:hover {
      stroke: ${COLORS.black};
    }
  }
`

const TextInput = styled.input`
  font-size: var(--fontSize);
  font-weight: 700;
  color: ${COLORS.gray700};
  width: var(--width);
  border: none;
  border-bottom: var(--borderBottom);
  border-radius: 0;
  padding: var(--padding);
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:hover {
    color: ${COLORS.black};
  }
`

export default IconInput
