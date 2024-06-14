import { Box } from "@mui/material"

function Home() {
  return (
    <Box
        my={4}
        display="block"
        textAlign="center"
        gap={4}
        p={2}
        sx={{ fontSize: '2em', marginTop: '15%'}}
    >
        Welcome, Bob
    </Box>
  )
}

export default Home