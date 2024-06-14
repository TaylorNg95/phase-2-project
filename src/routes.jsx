import App from "./pages/App"
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