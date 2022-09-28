// Libraries
import styled, { css, keyframes } from "styled-components"

const Animation = keyframes`
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(100%);
  }
`

const LoadingLine = styled.div`
	width: 100%;
	height: 1px;
	background: linear-gradient(
		90deg,
		rgba(160, 62, 247, 0) 0%,
		rgba(42, 252, 97, 1) 17%,
		rgba(42, 252, 97, 1) 31%,
		rgba(160, 62, 247, 0) 59%
	);
	opacity: ${(props) => (props.visible ? "1" : "0")};
	visibility: ${(props) => (props.visible ? "visible" : "hidden")};

	${(props) =>
		props.play &&
		css`
			animation: ${Animation} ${(props) => props.duration || "1s"} linear
				infinite;
		`}
`

export default LoadingLine
