import React, { useState } from 'react';
import style from './style.module.css';

const data = [
  {
    pergunta: 'O que você faz?',
    resposta:
      'Sou um desenvolvedor frontend,  sou responsável por criar e implementar a interface de sites e aplicativos, garantindo que os usuários possam interagir com as páginas de forma eficaz e intuitiva.',
  },
  {
    pergunta:
      'Quais são as principais tecnologias que você utiliza no frontend?',
    resposta:
      'As principais tecnologias incluem HTML, CSS, JavaScript, além de frameworks como ReactJS, VueJS e bibliotecas como jQuery, Tailwind CSS e pré-processadores como SASS e LESS.',
  },
  {
    pergunta: 'Como desenvolvedor frontend, vc faz sites ?',
    resposta:
      'Sim, porém o meu trabalho vai muito além disso. Minha atuação envolve criar interfaces modernas, funcionais e responsivas para sites e aplicações web, utilizando tecnologias como HTML, CSS e JavaScript. Também trabalho com frameworks e bibliotecas como ReactJS, VueJS e muitas outras ferramentas para garantir que o usuário tenha a melhor experiência possível. Além de codificar, também colaboro com designers, UX/UI e outras equipes para implementar layouts dinâmicos, integrações com APIs, melhorias na performance e a garantia de que o site seja acessível e otimizado para diferentes dispositivos e navegadores. ',
  },
  {
    pergunta: 'Qual é o papel do frontend no desempenho do site?',
    resposta:
      'O desenvolvedor frontend otimiza a experiência do usuário melhorando a performance do site, diminuindo o tempo de carregamento, implementando design responsivo e adotando técnicas para SEO.',
  },
  {
    pergunta: 'Quanto custa pra fazer um site?',
    resposta:
      'O custo para desenvolver um site pode variar bastante, dependendo de fatores como o tipo de site, sua complexidade e as funcionalidades necessárias. Por exemplo, sites simples com páginas estáticas têm um custo menor, enquanto projetos mais robustos, como e-commerces, portais com integrações complexas ou funcionalidades customizadas, tendem a ser mais caros.',
  },
  {
    pergunta: 'O que significa design responsivo?',
    resposta:
      'Design responsivo refere-se à capacidade do site ou aplicativo de se adaptar a diferentes dispositivos e tamanhos de tela, como celulares, tablets e desktops, oferecendo uma experiência consistente ao usuário.',
  },
  {
    pergunta: 'Qual a diferença entre frontend e backend?',
    resposta:
      'O frontend lida com a parte visível e interativa do site ou aplicativo, enquanto o backend gerencia o servidor, banco de dados e lógica de negócios que rodam por trás das cenas.',
  },
  {
    pergunta:
      'Como desenvolvedor frontend, você cohecimento sobre as tecnicas de UX/UI?',
    resposta:
      'Sim, ter conhecimentos em UX/UI ajuda o desenvolvedor frontend a criar interfaces mais amigáveis e eficientes, melhorando a experiência do usuário no site ou aplicativo.',
  },
  {
    pergunta: 'Quais são os principais desafios de um desenvolvedor frontend?',
    resposta:
      'Os principais desafios incluem garantir a compatibilidade entre navegadores, manter o desempenho ideal da interface, trabalhar com APIs e desenvolver código acessível e escalável.',
  },
  {
    pergunta: 'Antes da entrega você realiza testes de código no frontend?',
    resposta:
      'Testes no frontend, como testes unitários com ferramentas como Jest ou Cypress, ajudam a garantir que os componentes e funcionalidades da interface funcionem corretamente e evitem bugs futuros.',
  },
  {
    pergunta: 'Como o frontend se integra com APIs?',
    resposta:
      'O desenvolvedor frontend usa chamadas de API para se conectar com dados do backend ou de serviços de terceiros, manipulando esses dados e exibindo-os na interface para os usuários.',
  },
];

const Questions = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className="container">
      <div className={style.subtitle}>Perguntas frequentes</div>
      <div className={style.accordion}>
        {data.map((item, i) => (
          <div className={style.item}>
            <div className={style.question} onClick={() => toggle(i)}>
              <p>{item.pergunta}</p>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div
              className={selected === i ? style.respostaShow : style.resposta}
            >
              {item.resposta}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
