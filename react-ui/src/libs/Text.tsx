import styled from 'styled-components'
import { fontSize } from './constants'
import { VFC } from 'react'

const Wrapper = styled.p`
  font-size: ${fontSize.m};
`

type Props = {
  text: string
}

export const Text: VFC<Props> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>
}
