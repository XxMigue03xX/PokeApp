import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import { pokedexLoader } from "./loaders/pokedexLoader";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";

// El router de tipo browser siempre necesita que se configure correctamente la plataforma de despliegue (Netlify, Vercel, Servidor).
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/pokedex",
        element: (
        <ProtectedRoute>
            <Layout />
        </ProtectedRoute>
        ),
        children: [
            // {
            //     index: true,
            //     element: <p>Aqui va la pokedex</p>
            // },
            {
                path: "",
                element: <Pokedex/>,
                loader: pokedexLoader,
            },
            {
                path: ":pokemonId",
                element: <PokemonDetail />
            }
        ]
    },
]);