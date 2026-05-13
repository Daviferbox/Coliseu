import { useState } from "react";
import Header from "../../components/Header";


function NewChampionship() {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        disponivelParaInscricao: false,
        jogo: "",
        formato: "",
        premiacao: "",
        regras: "",
        dataProximoJogo: "",
        status: "",

    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (<>
        <Header />
        <h1>Cadastrar Campeonato</h1>
        <div className="container_inputs">

            <form>

                <div>
                    <label htmlFor="Nome">Nome do Campeonato</label>
                    <input type="text" name="Nome" placeholder="Insira aqui um nome para o Campeonato!" value={formData.nome} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Descricao">Descrição do Campeonato</label>
                    <input type="textarea" name="Descricao" placeholder="Insira aqui um Descrição para o seu Campeonato!" value={formData.descricao} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="Disponivel">Disponível para Inscrição</label>
                    <input type="checkbox" name="Disponivel" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Descricao">Jogo</label>
                    <input type="text" name="Descricao" placeholder="Insira aqui um Descrição para o seu Campeonato!" value={formData.descricao} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Descricao">Descrição do Campeonato</label>
                    <input type="textarea" name="Descricao" placeholder="Insira aqui um Descrição para o seu Campeonato!" value={formData.descricao} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Descricao">Descrição do Campeonato</label>
                    <input type="textarea" name="Descricao" placeholder="Insira aqui um Descrição para o seu Campeonato!" value={formData.descricao} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Descricao">Descrição do Campeonato</label>
                    <input type="textarea" name="Descricao" placeholder="Insira aqui um Descrição para o seu Campeonato!" value={formData.descricao} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Descricao">Descrição do Campeonato</label>
                    <input type="textarea" name="Descricao" placeholder="Insira aqui um Descrição para o seu Campeonato!" value={formData.descricao} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Descricao">Descrição do Campeonato</label>
                    <input type="textarea" name="Descricao" placeholder="Insira aqui um Descrição para o seu Campeonato!" value={formData.descricao} onChange={handleChange} />
                </div>


            </form>
        </div>
    </>)
}

export default NewChampionship;