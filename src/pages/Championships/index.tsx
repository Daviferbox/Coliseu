import { useContext, useEffect, useState } from "react";
import ChampionshipCard from "../../components/ChampionshipCard";
import Header from "../../components/Header";
import { getChampionshipsByStatus } from "../../data/mockData.ts";
import type { Campeonato } from "../../components/interfaces/index.ts";
import { useNavigate } from "react-router-dom";
import { UsuarioLogadoContext } from "../../context/AuthContext.tsx";


function Championships() {

    const navigate = useNavigate();
    const authContext = useContext(UsuarioLogadoContext);

    const [campeonatos, setCampeonatos] = useState<Campeonato[]>([])

    useEffect(() => {
        async function fetchData() {
            const data: any[] = await getChampionshipsByStatus("todos");
            setCampeonatos(data);
        }

        fetchData();
    }, []);

    return (
        <>
            <Header />
            {authContext?.logado ? (
                <div className="area-adicionar_novo">
                    <button className="btn-link novo" onClick={() => navigate("/CadastrarNovoCampeonato")}>
                        Adicionar Novo Campeonato
                    </button>
                </div>

            ) : <></>}
            <div className="campeonatos-cards">
                {campeonatos?.map((e: Campeonato) => (
                    <ChampionshipCard key={e.id} campeonato={e} />
                )
                )}
            </div>
        </>
    )

}

export default Championships;