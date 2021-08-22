import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const Forecast: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs>
          <Card>
            <Typography variant="body1" color=" textPrimary" display="block" align="center">
              Today
            </Typography>
            <br />
          </Card>
        </Grid>
        <Grid item xs>
          <Card>
            <Typography variant="body1" color=" textPrimary" display="block" align="center">
              Tomorrow
            </Typography>
            <br />
          </Card>
        </Grid>
        <Grid item xs>
          <Card>
            <Typography variant="body1" color=" textPrimary" display="block" align="center">
              The Day After Tomorrow
            </Typography>
            <br />
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Forecast
