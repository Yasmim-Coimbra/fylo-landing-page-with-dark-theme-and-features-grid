# Fylo Landing Page with Dark Theme and Features Grid

Essa é uma solução para o [Desafio: "Fylo Landing Page with Dark Theme and Features Grid" do Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Os desafios que esse site oferece ajuda desenvolvedores a melhorar suas habilidades de código!

## O Desafio

### Requisitos

Usuários devem poder ver:

- O layout ideal para o conteúdo dependendo do tamanho da tela do dispositivo

- Estados hover para todos os elementos interativos da página

- Mensagem de erro quando o campo de e-mail estiver vazio ou se o usuário digitar um formato de e-mail inválido

## Tecnologias Utilizadas

- HTML

- CSS

## Aprendizado

- Pratiquei o uso conjunto de FLEXBOX e GRID, usando de suas propriedades para criar um layout satisfatório e responsivo.

- Aprimorei minhas habilidades de resolução com páginas multi-seções.

- Pratiquei validação de formulários com JavaScript.

- Aprendi a identificar se o que foi digitado, pelo usuário, no campo de e-mail é um formato válido ou não. Veja abaixo o código utilizado:

``` javascript
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        emailValido = true;
    }
    else {
        emailValido = false;
    }
```

## Preview

### Desktop

![Preview do Projeto](./design/desktop-view.png)

### Active States

![Preview do Projeto](./design/active-states.gif)

### Mobile

![Preview do Projeto](./design/mobile-view.png)
