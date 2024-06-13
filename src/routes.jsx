import App from "./pages/App"
import PlayerList from "./pages/PlayerList"
import NewPlayerForm from "./pages/NewPlayerForm"
import Notes from "./pages/Notes"
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
                path: '/notes',
                element: <Notes />
            }
        ]
    }
]

export default routes