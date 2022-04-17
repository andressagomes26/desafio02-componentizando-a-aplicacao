<h1 align="center">  Ignite | Desafio 02 | Componentizando a aplicacao </h1>

<p align="center"> 

<img src="https://user-images.githubusercontent.com/60404990/134786614-9ad16e14-321d-4c15-ad01-f0554530bf45.png" width="750" height="300"> 
</p>


<h2> Sobre o desafio 💻 </h2>
Nesse desafio, o principal objetivo é refatorar uma página para listagem de filmes de acordo com gênero. 

A aplicação já está totalmente funcional mas grande parte do seu código está diretamente no arquivo `App.tsx`. Para resolver isso da melhor forma, é necessário dividir a aplicação em **pelo menos** duas partes principais: sidebar e o conteúdo principal que possui o header e a listagem de filmes.

- A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes;
- Na sidebar é possível selecionar qual categoria de filmes deve ser listada;
- A primeira categoria da lista (que é "Ação") já deve começar como marcada;
- O header da aplicação possui apenas o nome da categoria selecionada que deve mudar dinamicamente.

<h3> Fake API com JSON Server</h3>

Para esse desafio, utilizou-se Fake API com JSON Server para simular uma API que possui as informações de gêneros e filmes. 

- Navegue até a pasta criada, abra no Visual Studio Code e execute os seguintes comandos no terminal:

```bash
yarn
yarn server
```

<h2> O que devo editar na aplicação?</h2>

Com o template já clonado, as dependências instaladas e a fake API rodando, você deve criar **pelo menos** os componentes SideBar e Content que já estão com os arquivos criados.
Os arquivos a serem editados são:

- **src/App.tsx**
Esse componente contém toda a aplicação com exceção do componente `Button` que não precisa ser alterado e `Icon` que também não precisa de alteração.
- **src/components/Content.tsx**
Esse componente, ainda vazio, deve possuir toda a lógica e corpo responsável pelo header e conteúdo da aplicação (seção contornada em vermelho):
- **src/components/SideBar.tsx**
Esse componente, também vazio, deve possuir toda a lógica e corpo responsável pela seção que contém o título do site e a parte de navegação à esquerda da página (seção contornada em vermelho): 

<h2> Resultado ✅✅ </h2> 
Para ver como ficou o resultado final da aplicação acesse o link: https://youtu.be/uRMcPD6mTJ4

<h2> Status do Projeto <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">  </h2> 
- Esse desafio foi entregue a partir da plataforma da Rocketseat. 💜 




