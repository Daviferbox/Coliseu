import { useContext, useEffect, useState } from "react";
import ChampionshipCard from "../../components/ChampionshipCard";
import Header from "../../components/Header";
import { getChampionshipsByStatus } from "../../data/mockData.ts";
import type { Campeonato } from "../../components/interfaces/index.ts";
import { UsuarioLogadoContext } from "../../context/AuthContext.tsx";
import NewChampionship from "../NewChampionship";


function Championships() {

    const authContext = useContext(UsuarioLogadoContext);

    const [campeonatos, setCampeonatos] = useState<Campeonato[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const data: any[] = await getChampionshipsByStatus("todos");
            setCampeonatos(data);
        }

        fetchData();
    }, []);

    const handleAddChampionship = (newChampionship: Campeonato) => {
        setCampeonatos([newChampionship, ...campeonatos]);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Header />
            {authContext?.logado ? (
                <div className="area-adicionar_novo">
                    <button className="btn-link novo" onClick={openModal}>
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

            <NewChampionship 
                isOpen={isModalOpen}
                onClose={closeModal}
                onAddChampionship={handleAddChampionship}
            />
        </>
    )

}

export default Championships;