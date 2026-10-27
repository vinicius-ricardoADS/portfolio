# Portfólio de Vinícius Ricardo Rosa Noli

Portfólio pessoal desenvolvido para apresentar projetos e habilidades como Desenvolvedor Full Stack.

## Sobre o Projeto

Este é um site de portfólio moderno e responsivo que destaca:
- Informações profissionais e acadêmicas
- Habilidades técnicas em desenvolvimento full stack
- Projetos principais desenvolvidos
- Formas de contato
- Experiências profissionais

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com CSS Grid e Flexbox
- **JavaScript** - Interatividade e animações
- **Google Fonts** - Tipografia (Inter)

## Características

### Design
- Interface moderna e minimalista
- Tema dark mode
- Animações suaves e transições
- Totalmente responsivo (mobile, tablet, desktop)

### Funcionalidades
- Menu de navegação responsivo
- Scroll suave entre seções
- Animações ao scroll
- Efeitos hover interativos
- Botão "Voltar ao topo"
- Contador animado de estatísticas
- Links para GitHub e email

### Seções

1. **Hero** - Apresentação inicial com nome, título e CTAs
2. **Sobre** - Informações profissionais e estatísticas
3. **Habilidades** - Grid com as principais tecnologias dominadas
4. **Projetos** - Cards detalhados dos projetos em destaque:
   - Company Appraiser Web
   - Company Appraiser Server
   - Financial Control
5. **Contato** - Informações de contato e links

## Como Usar

### Visualização Local

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em seu navegador
3. Ou use um servidor local como Live Server (VS Code)

### Hospedagem

Este site pode ser hospedado em diversas plataformas gratuitas:

#### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/portfolio.git
git push -u origin main
```
Depois, ative GitHub Pages nas configurações do repositório.

#### Netlify
1. Arraste a pasta do projeto para [Netlify Drop](https://app.netlify.com/drop)
2. Ou conecte seu repositório GitHub ao Netlify

#### Vercel
```bash
npm i -g vercel
vercel
```

## Estrutura de Arquivos

```
site_portfolio/
│
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
└── README.md           # Documentação do projeto
```

## Personalização

### Cores
As cores principais podem ser alteradas no arquivo `styles.css` nas variáveis CSS:

```css
:root {
    --primary-color: #3b82f6;
    --primary-dark: #2563eb;
    --primary-light: #60a5fa;
    /* ... */
}
```

### Conteúdo
- Edite `index.html` para atualizar textos, projetos e informações
- Adicione novos projetos duplicando a estrutura `.project-card`
- Modifique habilidades editando os `.skill-card`

### Recursos Opcionais

O arquivo `script.js` inclui um efeito de digitação comentado que pode ser ativado para o subtítulo da hero section. Descomente as linhas indicadas para habilitar.

## Projetos em Destaque

### 1. Company Appraiser Web
Sistema frontend para avaliação de produtos com React e TypeScript.

**Tecnologias:** React, TypeScript, Vite, CSS

### 2. Company Appraiser Server
Backend para coleta de feedback de produtos com geração de relatórios.

**Tecnologias:** Node.js, TypeScript, Fastify, MySQL, Prisma

### 3. Financial Control
Aplicação de controle financeiro mobile e web.

**Tecnologias:** Angular, Ionic, TypeScript, SCSS, Capacitor, Android

## Habilidades Destacadas

- Análise de Dados
- Python
- CSS
- .NET
- JavaScript
- TypeScript
- Angular
- Node.js
- Ionic
- Android
- Java
- MongoDB

## Contato

- **Email:** viniciusnoli2016@gmail.com
- **GitHub:** [vinicius-ricardoADS](https://github.com/vinicius-ricardoADS)
- **Empresa:** Cadmus TI

## Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## Atualizações Futuras

- [ ] Adicionar modo claro/escuro toggle
- [ ] Incluir seção de blog
- [ ] Adicionar mais projetos
- [ ] Implementar formulário de contato funcional
- [ ] Integrar com CMS para gerenciamento de conteúdo
- [ ] Adicionar seção de certificações

---

Desenvolvido com dedicação por **Vinícius Ricardo Rosa Noli**
