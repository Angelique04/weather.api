import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const Forecast: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textPrimary">
                Today
              </Typography>
              <Divider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} spacing={1}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textPrimary">
                Tomorrow
              </Typography>
              <Divider />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} spacing={1}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textPrimary">
                AfterTomorrow
              </Typography>
              <Divider />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Forecast
