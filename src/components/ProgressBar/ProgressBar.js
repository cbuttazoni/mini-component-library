/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const ProgressBar = ({ value, size }) => {
  const borderRadius = value === 100 ? "4px" : 0
  const VALUE = {
    width: value + "%",
  }
  const SIZES = {
    small: {
      "--padding": 0,
      "--borderRadius": "4px",
      "--borderRightRadius": borderRadius,
      "--width": "370px",
      "--height": "8px",
      "--boxShadow": "inset 0px 2px 4px rgba(128, 128, 128, 0.35)",
    },
    medium: {
      "--padding": 0,
      "--borderRadius": "4px",
      "--borderRightRadius": borderRadius,
      "--width": "370px",
      "--height": "12px",
      "--boxShadow": "inset 0px 2px 4px rgba(128, 128, 128, 0.35)",
    },
    large: {
      "--padding": "4px",
      "--borderRadius": "8px",
      "--borderRightRadius": borderRadius,
      "--width": "370px",
      "--height": "24px",
      "--boxShadow": "inset 0px 2px 4px rgba(128, 128, 128, 0.35)",
    },
  }
  const styles = SIZES[size]

  return (
    <ProgressBarWrapper
      style={styles}
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      role="progressbar"
    >
      <ProgressBarValue style={VALUE}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </ProgressBarValue>
    </ProgressBarWrapper>
  )
}

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--borderRadius);
  width: var(--width);
  height: var(--height);
  box-shadow: var(--boxShadow);
  overflow: hidden;
`

const ProgressBarValue = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: var(--borderRightRadius);
  border-bottom-right-radius: var(--borderRightRadius);
`

export default ProgressBar
