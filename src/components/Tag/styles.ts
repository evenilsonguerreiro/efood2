import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.pink};
  color: ${cores.branco};
  padding: 3px 8px;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 4px;
  height: auto;
`
