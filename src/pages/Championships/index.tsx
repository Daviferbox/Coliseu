import { useEffect, useState } from "react";
import ChampionshipCard from "../../components/ChampionshipCard";
import Header from "../../components/Header";
import { getChampionshipsByStatus } from "../../data/mockData.ts";
import type { Campeonato } from "../../components/interfaces/index.ts";


function Championships() {

    const [campeonatos, setCampeonatos] = useState<Campeonato[]>([])

    useEffect(() => {
        async function fetchData() {
            const data: any[] = await getChampionshipsByStatus("todos");
            setCampeonatos(data);
            console.log(data)
        }

        fetchData();
    }, []);

    return (
        <>
            <Header />
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