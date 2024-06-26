import { Container, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"

// -------

function Home() {
    console.log('in home')
  return (
    <Container maxWidth='md' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh'}}>
        <Typography component='h1' color='primary' sx={{fontSize: '2em', marginTop: '20%'}}>
            Welcome, User!
        </Typography>
        <Button component={Link} to='/players' variant='outlined' sx={{marginTop: '2%', border: 'solid 2px'}}>View Players</Button>
    </Container>
  )
}

export default Home