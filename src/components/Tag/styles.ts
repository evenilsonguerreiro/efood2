import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.pink};
  color: ${cores.branco};
  width: 121px;
  height: 16px;
  padding: 3px 8px;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
`
