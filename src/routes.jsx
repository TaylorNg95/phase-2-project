import App from "./App"
import Home from "./pages/Home"
import PlayerList from "./pages/PlayerList"
import NewPlayerForm from "./pages/NewPlayerForm"
import Notes from "./pages/Notes"
import EditPlayerForm from "./pages/EditPlayerForm"
import ErrorPage from "./pages/ErrorPage"

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/players',
                element: <PlayerList />
            },
            {
                path: '/new',
                element: <NewPlayerForm />
            },
            {
                path: '/notes/:id',
                element: <Notes />
            },
            {
                path: '/edit/:id',
                element: <EditPlayerForm />
            }
        ]
    }
]

export default routes