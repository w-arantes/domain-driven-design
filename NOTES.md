Entidade

Uma entidade é uma abstração que representa um conceito ou objeto dentro de um domínio específico. Ela encapsula atributos e comportamentos relacionados àquele conceito, garantindo consistência e integridade de dados.

Exemplo:
No domínio imobiliário, uma entidade pode ser “Propriedade”, com atributos como id, endereço, tamanho, valor, e comportamentos como calcularValorPorMetroQuadrado().

---

Casos de Uso

Casos de uso descrevem interações específicas entre usuários (ou sistemas externos) e o sistema para alcançar um objetivo. Eles mapeiam as funcionalidades do sistema e definem os fluxos de trabalho necessários.

Componentes de um Caso de Uso:

    1.	Ator: Quem interage com o sistema (usuário ou outro sistema).
    2.	Fluxo Principal: Sequência ideal de passos para alcançar o objetivo.
    3.	Fluxos Alternativos: Variações ou exceções no fluxo principal.
    4.	Resultados: Saída esperada ao concluir o caso de uso.

Exemplos no Domínio Imobiliário:

    1.	Cadastro de Propriedade
    •	Ator: Corretor ou administrador.
    •	Fluxo Principal:
    1.	O corretor preenche o formulário com os dados da propriedade.
    2.	O sistema valida os dados fornecidos.
    3.	O sistema salva a propriedade no banco de dados.
    4.	O sistema retorna uma confirmação.
    •	Fluxo Alternativo: Dados inválidos → Sistema exibe mensagem de erro.
    •	Resultado: Nova propriedade cadastrada no sistema.
    2.	Filtrar Imóveis Disponíveis
    •	Ator: Usuário ou corretor.
    •	Fluxo Principal:
    1.	O ator seleciona os critérios de filtro (cidade, preço, número de quartos).
    2.	O sistema aplica os critérios e retorna a lista de imóveis.
    •	Fluxo Alternativo: Nenhum imóvel encontrado → Sistema exibe mensagem.
    •	Resultado: Lista de imóveis que atendem aos critérios.
    3.	Agendar Visita
    •	Ator: Cliente.
    •	Fluxo Principal:
    1.	O cliente seleciona um imóvel.
    2.	O sistema exibe opções de datas disponíveis.
    3.	O cliente escolhe uma data.
    4.	O sistema confirma o agendamento.
    •	Fluxo Alternativo: Data não disponível → Sistema sugere outra data.
    •	Resultado: Visita agendada com sucesso.

Resumo Geral

    •	Entidades: Representam os objetos do domínio, como “Propriedade”, “Usuário”, “Contrato”.
    •	Casos de Uso: Definem como usuários e sistemas interagem com essas entidades para realizar objetivos específicos.
