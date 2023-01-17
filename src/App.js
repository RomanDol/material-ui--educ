import React, { useState } from "react"
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material"
import { Container } from "@mui/system"
import MenuIcon from "@mui/icons-material/Menu"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Layers, PlayCircle } from "@mui/icons-material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import RestoreIcon from "@mui/icons-material/Restore"
import AddLocationIcon from "@mui/icons-material/AddLocation"
import FolderIcon from "@mui/icons-material/Folder"

const theme = createTheme()
const classes = {
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(1) },
  title: { flexGrow: 1 },

  mineFeaturesPost: {
    position: "relative",
    color: theme.palette.warning.main,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    bacgroundPosition: "center",
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: "rgba(0,0,0,.3)",
  },
  mineFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  cardMedia: {
    pt: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    mt: theme.spacing(4),
  },
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(theme)

function App() {
  const [value, setValue] = useState("resents")
  const [open, setOpen] = useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={classes.title}>
              Web Developer Blog
            </Typography>
            <Box mr={3}>
              <Button
                color="inherit"
                variant="outlined"
                onClick={handleClickOpen}
              >
                Log in
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog title"
              >
                <DialogTitle id="form-dialog title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see videos</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color='primary'>
                  Cancel
                  </Button>
                  <Button onClick={handleClose} color='primary'>
                  Log in
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">
              Log Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Paper
          sx={classes.mineFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            <Box sx={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <Box sx={classes.mineFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Web Developer Blog
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    amet error ducimus numquam, odit ex aperiam ipsam ab ipsum
                    qui.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <Box sx={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Web Developer Blog
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              consectetur deleniti accusantium! Nulla molestias, laudantium modi
              temporibus maiores delectus possimus fugiat porro corrupti?
              Asperiores blanditiis harum consequatur possimus quisquam
              temporibus.
            </Typography>
            <Box sx={classes.mainButton}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Container sx={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={classes.card}>
                  <CardMedia
                    sx={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent sx={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Repellendus, sapiente.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Layers />
                    <PlayCircle />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          sx={classes.root}
        >
          <BottomNavigationAction
            label="Recents"
            value="resents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<AddLocationIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="subtitle1"
        >
          Web Developer Blog React js Material UI site
        </Typography>
      </footer>
    </>
  )
}

export default App
