# Food-Explorer

Esta é uma aplicação front-end que consome uma api própria para mostrar, criar, editar e deletar os produtos que estão disponíveis no cardápio de um restaurante.

## Instruções e deploy

Para acessar e usar a aplicação, basta acessar o link de onde foi feito o deploy do projeto em https://lsfoodexplorer.netlify.app

Existem dois tipos de usuários possíveis para esta aplicação: usuário admin, e usuário cliente. É possível também criar um usuário próprio e acessar como cliente.

## Usuário Admin e usuário cliente

### Admin

Para acessar como usuário admin, na página inicial de login, você pode usar uma conta de teste:

Email: `user.adm@email.com` / 
Senha: `123456`

Como usuário admin, você poderá visualizar todos os pratos disponíveis no catálogo, além de poder editar e excluir pratos já existentes, bem como criar e inserir pratos novos no catálogo.

*Nota*: *as alterações feitas como usuário admin são temporárias e a aplicação retornará ao seu estado inicial, uma vez que o conteúdo da aplicação online é refletida com base neste repositório.*

### Cliente

De modo similar ao usuário admin, você tembém pode usar diretamente uma conta de teste:

Email: `user.client@email.com` / 
Senha: `123456`

Enquanto usuário cliente, você poderá visualizar todos os pratos disponíveis no cardápio e aumentar ou diminuir a quantidade de itens a serem incluidos no pedido, e isso será refletido no preço exibido pelo produto mencionado.

## Criar conta e fazer login

Se optar por criar uma conta, é possível fazer isso através da página de cadastro do usuário. Preencha os campos com suas informações, e então preencha-os novamente na tela de login.

![SignUpPage-FoodExplorer](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/eb071fce-0d78-40f8-9c11-7801d998d661)


![LoginPage-FoodExplorer](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/26ab958a-7046-4b82-b52e-3a161613ff47)


## Visualização de páginas pelo usuário admin

### Página principal:

![mainPage-FoodExplorer](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/9124e2fb-8e62-4777-a754-fb3fd5435025)

![mainPage2-FoodExplorer](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/544a915f-2245-4044-b887-25109d2125b7)

### Página de detalhes do prato:

![DetailsPage-FoodExplorer](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/f8755a41-0886-48b5-9ace-dced377540cb)

### Página de edição do prato:

![EditFoodPage-FoodExplorer](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/e1c92073-0d4d-483b-97b4-230348ce4105)

### Página de cadastro de um novo prato:

![NewFoodPage-FoodExplorer](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/73b885da-d7f5-4f95-9c29-0ef4ec5da424)

## visualização de páginas pelo usuário cliente

### Página principal:

![ClientMainPage2-FoodExplorer](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/8f5ad512-b0a7-4c6e-8644-d98a8f679744)

![ClientMainPage-FoodExplorer](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/fc00352e-25a0-4502-b74d-b7728d8482a8)

### Página de detalhes do prato:

![ClientDetailsPage-FoodExplorer](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/c11a9e69-a11c-4407-a62c-74f7d2f91612)

## Iniciando a aplicação localmente

Para inicializar este projeto localmente, é necessário antes que configure corretamente a sua api e siga as instruções disponíveis em: https://github.com/lucassaymon1/Food-Explorer-back#readme
. Após isso, é preciso também configurar o `axios` para fazer as requisições para o endereço correto do servidor.

Na pasta `services/index`:

![Axios-Frontend](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/ae368419-14f9-4c8e-b5fc-a03e7d1d5a37)


### comandos para iniciar o projeto

Na pasta raíz do projeto, execute os comandos:

`npm install` - Instala todos os pacotes de dependencias do projeto, bem como a pasta node_modules.

`npm run dev` - Inicializa um servidor local para que o front-end possa acessá-lo.

Após isso, clique no link que aparacer no terminal ou, no navegador, acesse a rota que estará indicada no terminal

![image](https://github.com/lucassaymon1/Food-Explorer-front/assets/102837549/8943271a-ed36-4b3b-b5cb-28874d8ee06e)

Por fim, seguindo esses passos e as instruções presentes no repositório do Back-end do projeto, será possível executar o projeto localmente.
