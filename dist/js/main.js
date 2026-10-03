// ========================================
// ROTEAMENTO DA SPA
// ========================================

const app = document.querySelector("#app");


// ========================================
// CONTEÚDOS DAS PÁGINAS
// ========================================

const paginas = {

    // ------------------------------------
    // INÍCIO
    // ------------------------------------

    inicio: `
        <section>
            <h2>Quem somos</h2>

            <img
                src="../imagens/ong.jpg"
                alt="Voluntários da ONG Esperança realizando uma ação social"
            >

            <p>
                A ONG Esperança atua na promoção da inclusão social
                e na melhoria da qualidade de vida de pessoas
                em situação de vulnerabilidade.
            </p>
        </section>
    `,


    // ------------------------------------
    // PROJETOS
    // ------------------------------------

    projetos: `
        <section>
            <h2>Projetos</h2>

            <p>
                Conheça os projetos desenvolvidos pela ONG Esperança
                para promover inclusão e transformação social.
            </p>
        </section>
    `,


    // ------------------------------------
    // CADASTRO
    // ------------------------------------

    cadastro: `
        <section aria-labelledby="titulo-cadastro">

            <h2 id="titulo-cadastro">
                Cadastro
            </h2>

            <p>
                Preencha o formulário abaixo para demonstrar seu interesse
                em participar das ações da ONG Esperança.
            </p>

            <form id="form-cadastro">

                <!-- DADOS PESSOAIS -->

                <fieldset>

                    <legend>Dados pessoais</legend>

                    <p>
                        <label for="nome">
                            Nome completo:
                        </label><br>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                        >
                    </p>

                    <p>
                        <label for="email">
                            E-mail:
                        </label><br>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        >
                    </p>

                    <p>
                        <label for="nascimento">
                            Data de nascimento:
                        </label><br>

                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            required
                        >
                    </p>

                    <p>
                        <label for="cpf">
                            CPF:
                        </label><br>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="000.000.000-00"
                            maxlength="14"
                            required
                        >
                    </p>

                    <p>
                        <label for="telefone">
                            Telefone:
                        </label><br>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            placeholder="(11) 99999-9999"
                            required
                        >
                    </p>

                </fieldset>


                <!-- ENDEREÇO -->

                <fieldset>

                    <legend>Endereço</legend>

                    <p>
                        <label for="endereco">
                            Endereço:
                        </label><br>

                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            required
                        >
                    </p>

                    <p>
                        <label for="numero">
                            Número:
                        </label><br>

                        <input
                            type="number"
                            id="numero"
                            name="numero"
                            min="0"
                            required
                        >
                    </p>

                    <p>
                        <label for="cidade">
                            Cidade:
                        </label><br>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            required
                        >
                    </p>

                    <p>
                        <label for="estado">
                            Estado:
                        </label><br>

                        <select
                            id="estado"
                            name="estado"
                            required
                        >

                            <option value="">
                                Selecione seu estado
                            </option>

                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>

                        </select>
                    </p>

                </fieldset>


                <!-- PARTICIPAÇÃO -->

                <fieldset>

                    <legend>Participação</legend>

                    <p>
                        <label for="participacao">
                            Como deseja participar?
                        </label><br>

                        <select
                            id="participacao"
                            name="participacao"
                            required
                        >

                            <option value="">
                                Selecione uma opção
                            </option>

                            <option value="voluntario">
                                Quero ser voluntário
                            </option>

                            <option value="doacao">
                                Quero contribuir com doação
                            </option>

                            <option value="ambos">
                                Quero ser voluntário e contribuir com doação
                            </option>

                        </select>
                    </p>

                    <p>
                        <label for="mensagem">
                            Mensagem:
                        </label><br>

                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="5"
                            cols="40"
                            placeholder="Conte-nos como gostaria de participar."
                        ></textarea>
                    </p>

                </fieldset>


                <!-- BOTÕES -->

                <p>

                    <button type="submit">
                        Enviar cadastro
                    </button>

                    <button type="reset">
                        Limpar formulário
                    </button>

                </p>

            </form>

        </section>
    `
};


// ========================================
// RENDERIZAÇÃO DA PÁGINA
// ========================================

function renderizarPagina() {

    const rota = window.location.hash.substring(1);

    const pagina = paginas[rota] || paginas.inicio;

    app.innerHTML = pagina;
}
// ========================================
// MODO ALTO CONTRASTE
// ========================================

const botaoContraste = document.querySelector("#botao-contraste");

botaoContraste.addEventListener("click", () => {

    document.body.classList.toggle("alto-contraste");

    const contrasteAtivo =
        document.body.classList.contains("alto-contraste");

    botaoContraste.setAttribute(
        "aria-pressed",
        contrasteAtivo
    );

});

// ========================================
// DETECTA MUDANÇAS NA URL
// ========================================

window.addEventListener(
    "hashchange",
    renderizarPagina
);


// ========================================
// CARREGA A PÁGINA INICIAL
// ========================================

renderizarPagina();
