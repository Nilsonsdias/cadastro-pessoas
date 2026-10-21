# Elo — Cadastro de pessoas

Aplicação estática em português, com autenticação e banco no Supabase.

## Publicar no GitHub Pages

1. Envie os arquivos desta pasta para a raiz do repositório, na branch principal.
2. Abra **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **Deploy from a branch**.
4. Escolha a branch principal (normalmente **main**) e a pasta **/(root)**; clique em **Save**.
5. Aguarde a publicação e use o endereço mostrado pelo GitHub Pages.

Não é necessário executar npm, instalar dependências ou fazer build. O arquivo de entrada é index.html. Os caminhos relativos funcionam também em sites de projeto, publicados em /nome-do-repositorio/.

## Supabase

A aplicação usa o projeto **Cadastro - Teste**. A tabela public.pessoas e as políticas de acesso já foram configuradas. config.js contém somente a URL e a chave pública publishable; nunca adicione uma chave service_role ou secreta.

Entre com um usuário do Supabase Auth. Se o e-mail ainda estiver pendente, confirme pelo link recebido antes de entrar. Cada usuário acessa somente seus próprios registros; o HTML público não dá acesso aos cadastros sem login.

## Funcionalidades

- Cadastro de nome, CPF, telefone, endereço e data de nascimento.
- Validação de CPF, prevenção de duplicatas por usuário, edição e exclusão.
- Pesquisa por nome, CPF ou telefone.
- Relatório por mês ou intervalo DD/MM, incluindo a virada do ano.
- Exportação CSV e impressão de todos os resultados filtrados.
- Demonstração com dados fictícios que ficam apenas na memória.

## Arquivos

- index.html: interface.
- style.css: estilos responsivos.
- app.js: integração com Supabase Auth e REST, cadastro e relatórios.
- domain.mjs: validações e filtros.
- config.js: configuração pública do projeto Supabase.
- .nojekyll: mantém a publicação como arquivos estáticos.

Referência: [Configurar GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
