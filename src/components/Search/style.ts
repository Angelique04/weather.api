import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

export const StyledPaper = styled(Paper)`
  margin: ${({ theme }) => theme.spacing(3, 0)};
`
