# Api - SmarTeach

## **Orientações iniciais**:

- Inicialmente é necessário que setenha Python 3 instalado. É aconcelhável criar um ambiente virtual para rodar a aplicação, bastando rodar o comando Python -m venv venv;
- E necessário criar um arquivo .env seguindo copiando e colando as variáveis preenchidos do .env.example;
- Se estiver a aplicação estiver rodando localmente, é necessário também instalar o mongoDb e realizar a conexão com seu banco de dados;
- Após isso é de sua importância especificar a string de conexão com o MongoDB como valor da variável DB_STR_CONNECTION dentro do seu arquivo .env;
- Caso tenha criado um ambiente virtual basta ativá-lo. No terminal cmd, vá na pasta venv e rode o comando \Scripts\activate;
- Após isso execute no terminal o comando pip install -r requirements.txt paRa instalar todos os pacotes necessários para a plicação funcionar;
- Após isso execute o comando flask run para rodar a aplicação. Se não exister, toda a estrutura do banco de dados necessária para o perfeito funcionamento da aplicação será criada automaticamente assim que a aplicação for startada;


## RESUMO DAS ROTAS

**LOGIN**
   - POST - /login faz a checagem e retorna se credenciais enviadas do usuário existem ou não e o level do usuário

**ESTUDANTES**
   - POST - /student Registra um novo estudante
   - GET - /student  Retorna todos os estudantes registrados
   - GET - /student/profile/id  Retorna um aluno específico
   - PATCH - /student Atualiza o registro de um estudante
   - DELETE - /student  Deleta um registro de estudante

**PROFESSORES**
   - POST - /teacher Registra um novo professor
   - GET - /teacher Retorna todos os professores registrados
   - GET - /teacher/profile/id  Retorna um professor específico
   - PATCH - /teacher Atualiza o registro de um professor
   - DELETE - /teacher  Deleta um registro de professor

**ADMINS**
   - POST - /admin Registra um novo professor
   - GET - /admin Retorna todos os professores registrados
   - GET - /admin/profile/id  Retorna um admin específico
   - PATCH - /admin Atualiza o registro de um professor
   - DELETE - /admin  Deleta um registro de professor

**TURMAS**
   - POST - /class Registra um novo professor
   - GET - /class Retorna todos os professores registrados
   - GET - /class/profile/id  Retorna uma turma específica
   - PATCH - /class Atualiza o registro de um professor
   - DELETE - /class  Deleta um registro de professor

## ROTAS

- **LOGIN**
    - **POST** /login
        
        ```json
        
        {
            "email": "Wolwerine@mail.com",
            "password": "Logan_178",
        }
        ```
        
        - Retorno da requisição caso as credencias enviadas correspondam as registradas no banco de dados, status code 200 (OK)
            - user_level corresponde ao nível do usuário faver alterações no banco de dados sendo:
                - "1" -> Estudante
                - "2" -> Professor
                - "3" -> Admin
        
        ```json
        {
         "2"
        }, 200
        
        ```
        
        - Retorno da requisição caso o enviado email não exista, status code 400 (BAD REQUEST)
        
        ```json
        {
         "Usuário não registrado!"
        }, 400
        ```
        
        - Retorno da requisição caso a senha enviada não condiza com a registrada no banco de dados, status code 400 (BAD_REQUEST)
        
        ```json
        {
         "Senha incorreta"
        }, 400
        ```

- **STUDENT**
    - **POST** /student
        
        ```json
        
        {
            "name":"Logan",
            "email": "Wolwerine@mail.com",
            "password": "PASSWORD_CONTENT",
            "class_number": 107
        }
        ```
        
        - Retorno da requisição status code 201 (CREATED)
        
        ```json
        {
         "msg": "Novo aluno cadastrado com sucesso!"
        }, 201
        
        ```
        
        - Retorno da requisição caso o email já exista, status code 409 (CONFLICT)
        
        ```json
        {
         "error": "Email já cadastrado!"
        }, 409
        ```
        
        - Retorno da requisição caso alguns dos campos estejam errados, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"error": "Campos incorretos inseridos na requisição: [campos_errados]"
        }, 400
        ```

        - Retorno da requisição caso o class_number não exista no banco de dados, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"error": "Turma inexistente"
        }, 400
        ```
        
        
    - **GET** /student
        
        - Retorno da requisição, status code 200 (OK)
        
        ```json
            [
                {
                    "_id": "66133b5d213ef81daa1f3532",
                    "class_number": 7,
                    "email": "yahoo@mail.com",
                    "name": "Joana"
                },
                {
                    "_id": "66133b70213ef81daa1f3533",
                    "class_number": 7,
                    "email": "bb_77@mail.com",
                    "name": "Billy"
                }
            ]
        ```
    
    - **GET** /student/profile/:id
        - Parâmetro necessário a essa requisição: id
        - Necessário enviar o parâmetro acima na URL desta requisição

        - Retorno da requisição quando há um estudante com o id enviado na URL, status code 200 (OK)
        
        ```json
                {
                    "_id": "66133b5d213ef81daa1f3532",
                    "class_number": 7,
                    "email": "yahoo@mail.com",
                    "name": "Joana"
                }, 200            
        ```

        - Retorno da requisição caso não exista um estudante com o id informado, status code 400(BAD_REQUEST)
        
        ```json
        {
            "Usuário inexistente"
        }, 400
        ```

    - **PATCH** /student
        - Parâmetros necessários : "id"
        - Parâmetros que podem ser atualizados : ['name', 'email', 'class_number']
        - Além do parâmetro "id" é necessário enviar mais um dos parâmetros aceitos acima

        ```json
        {
            "id": "66133b5d213ef81daa1f3532",
            "email": "joana@gmail.com",
            "name": "Joana Célia",
            "turma": 107
        }
        ```
        
        - Retorno da rota, status code 200 (OK)
        
        ```json
        {
            "Perfil de Estudante atualizado com sucesso!"
        }, 200
        ```
        
        - Retorno da requisição caso não exista um estudante com o id informado, status code 400(BAD_REQUEST)
        
        ```json
        {
            "Usuário inexistente"
        }, 400
        ```
        
        - Retorno da requisição caso alguns dos campos(KEYS) estejam incorretos, status code 400 (BAD_REQUEST)
        
        ```json
        {
            "Propriedade(s) invalida(s): [{'em223424bail': 'joana@gmail.com'}]"
        }, 400
        ```
        
        - Retorno da requisição caso o id informado tenha formato diferente do padrão aceito, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"O valor da propriedade 'id' enviado não é válida"
        }, 400
        ```
        
    - **DELETE** /student
        - Parâmetros necessários : "id"
        - Não é permitido enviar nenhum parâmtero além do parâmetro "id"
        
        ```json
        {
            "Perfil de Estudante deletado com sucesso!"
        },200
        ```

- **PROFESSORES**
    - **POST** /teacher
        - Parâmetros necessários a essa requisição: ['email' ,'name', 'subject', 'classes', 'period']
        - Não será aceito nenhum parâmetro diferente dos mencionados acima
        - E necessário que o(s) Número(s) da(s) turma(s) exista(m) no banco de dados
        
        ```json
        {
            "name":"Peter parker",
            "email": "spider@mail.com",
            "password": "PASSWORD_CONTENT",
            "subject": "Biologia",
            "classes": [280, 211, 107],
            "period": "vespertino"
        }
        ```
        
        - Retorno da requisição , 201 (CREATED)
        
        ```json
        {
            "Novo Professor registrado com sucesso!"
        }, 201
        ```
        
        - Retorno da requisição caso alguns dos campos estejam errados, status code 400(BAD_REQUEST)
        
        ```json
        {
        	"Campos incorretos inseridos na requisição: ['chave_incorreta']"
        },400
        ```
        
        - Retorno da requisição caso tente criar deixando de mencionar um dos parâmetros obrigatórios, status code 400 (CONFLICT)
        
        ```json
        {
        "há campos faltantes no corpo da requisição."
        },400
        ```
        
        - Retorno da requisição caso alguns dos campos tenham valor fora do padrão aceito, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"Foi atribuido um valor nulo nas seguintes propriedades: {'chave_onde_recebeu_valor_errado'}"
        },400
        ```

        - Retorno da requisição caso haja um número de turma que não exista no banco de dados, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"error": "Turma(s) inexistente(s):[777, 806]"
        }, 400
        ```
        
    - **GET** /teacher
        
        ```json
        {}
        ```
        
        - Retorno da requisição 200 (OK)
        
        ```json
        {[
            {
                "_id": "66134254213ef81daa1f3538",
                "classes": [
                    280
                ],
                "email": "spider-man@mail.com",
                "last_update_date": "07/04/2024 - 22:03",
                "name": "Peter parker",
                "period": "vespertino",
                "register_date": "07/04/2024 - 22:03",
                "subject": "Biologia"
            },
            {
                "_id": "661342a5213ef81daa1f3539",
                "classes": [
                    202
                ],
                "email": "sp_chade@mail.com",
                "last_update_date": "07/04/2024 - 22:04",
                "name": "Oxer Lux",
                "period": "vespertino",
                "register_date": "07/04/2024 - 22:04",
                "subject": "Matematica"
            }
        ]}, 200
        ```
        
        - Retorno da requisição caso não tenha perfil criado. 200 (OK)
        
        ```json
        {
        	[]
        }, 200
        ```
        
    - **GET** /teacher/profile/:id
        - Parâmetro necessário a essa requisição: id
        - Necessário enviar o parâmetro acima na URL desta requisição


        - Retorno da requisição quando há um professor com o id enviado na URL, status code 200 (OK)
        
        ```json
                {
                    "_id": "66134efc767db56eb350f95c",
                    "classes": [202],
                    "email": "ox@mail.com",
                    "last_update_date": "07/04/2024 - 22:57",
                    "name": "Oxer Lux",
                    "period": "vespertino",
                    "register_date": "07/04/2024 - 22:57",
                    "subject": "Matematica"
                }, 200            
        ```    
        
        - Retorno da requisição caso não exista um professor com o id informado, status code 400(BAD_REQUEST)
        
        ```json
        {
            "Usuário inexistente"
        }, 400
        ```

    - **PATCH** /teacher
        - Parâmetros necessários : "id"
        - Parâmetros que podem ser atualizados : ['email' ,'name', 'subject', 'classes', 'period']
        - Além do parâmetro "id" é necessário enviar mais um dos parâmetros aceitos acima
        
        ```json
        {
        	"id": "66133b70213ef81daa1f3533",
	        "name": "spider-man"
        }
        ```
        
        - Retorno da requisição 200 (OK)
        
        ```json
        {
            "Perfil de Professor atualizado com sucesso!"
        }, 200
        ```
        
        - Retorno da requisição caso alguns dos campos estejam errados, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"Propriedade(s) invalida(s): [{'chave_errada': 'spider-man'}]"
        }
        ```
        
        - Retorno da requisição caso id não exista, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"error": "Usuário inexistente"
        }
        ```
        
    - **DELETE**  /teacher
        - Parâmetros necessários : "id"
        - Não é permitido enviar nenhum parâmtero além do parâmetro "id
        
        ```json
        {
            "Perfil de Professor deletado com sucesso!"
        }, 200
        ```
        
        - Retorno da requisição caso id não exista, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"Usuário inexistente"
        }, 400
        ```

- **ADMIN**
    - **POST** /admin
        - Parâmetros necessários a essa requisição: ['email' ,'name']
        - Não será aceito nenhum parâmetro diferente dos mencionados acima
        
        ```json
        {
            "name":"Peter parker",
            "email": "spider@mail.com",
            "password": "PASSWORD_CONTENT"
        }
        ```
        
        - Retorno da requisição , 201 (CREATED)
        
        ```json
        {
            "Novo Administrador registrado com sucesso!"
        }, 201
        ```
        
        - Retorno da requisição caso alguns dos campos estejam errados, status code 400(BAD_REQUEST)
        
        ```json
        {
        	"Campos incorretos inseridos na requisição: ['chave_incorreta']"
        },400
        ```
        
        - Retorno da requisição caso tente criar deixando de mencionar um dos parâmetros obrigatórios, status code 400 (CONFLICT)
        
        ```json
        {
        "há campos faltantes no corpo da requisição."
        },400
        ```
        
        - Retorno da requisição caso alguns dos campos tenham valor fora do padrão aceito, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"Foi atribuido um valor nulo nas seguintes propriedades: {'chave_onde_recebeu_valor_errado'}"
        },400
        ```
        
    - **GET** /admin
        
        ```json
        {}
        ```
        
        - Retorno da requisição 200 (OK)
        
        ```json
            {[
                {
                    "_id": "661345867628c7095ed10686",
                    "email": "jonas777@mail.com",
                    "last_update_date": "07/04/2024 - 22:16",
                    "name": "Jonas",
                    "register_date": "07/04/2024 - 22:16"
                }
            ]}, 200
        ```
        
        - Retorno da requisição caso não tenha nunhum perfil criado. 200 (OK)
        
        ```json
        {
        	[]
        }, 200
        ```
    
    - **GET** /admin/profile/:id
    - Parâmetro necessário a essa requisição: id
    - Necessário enviar o parâmetro acima na URL desta requisição


    - Retorno da requisição quando há um admin com o id enviado na URL, status code 200 (OK)
    
    ```json
        {
            "_id": "66254f7ed8c150d334543771",
            "email": "ana77@mail.com",
            "last_update_date": "21/04/2024 - 14:40",
            "name": "Ana Maia",
            "password": "ana-123456",
            "register_date": "21/04/2024 - 14:40"
        }, 200            
    ```    
    
    - Retorno da requisição caso não exista um admin com o id informado, status code 400(BAD_REQUEST)
    
    ```json
    {
        "Usuário inexistente"
    }, 400
    ```
        
    - **PATCH** /admin
        - Parâmetros necessários : "id"
        - Parâmetros que podem ser atualizados : ['email', 'name']
        - Além do parâmetro "id" é necessário enviar mais um dos parâmetros aceitos acima
        
        ```json
        {
        	"id": "66133b70213ef81daa1f3533",
	        "name": "spider-man"
        }
        ```
        
        - Retorno da requisição 200 (OK)
        
        ```json
        {
            "Perfil de Administrador atualizado com sucesso!"
        }, 200
        ```
        
        - Retorno da requisição caso alguns dos campos estejam errados, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"Propriedade(s) invalida(s): [{'chave_errada': 'spider-man'}]"
        }
        ```
        
        - Retorno da requisição caso id não exista, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"Usuário inexistente"
        },400
        ```
        
    - **DELETE**  /admin
        - Parâmetros necessários : "id"
        - Não é permitido enviar nenhum parâmtero além do parâmetro "id
        
        ```json
        {
            "Perfil de Administrador deletado com sucesso!"
        }, 200
        ```
        
        - Retorno da requisição caso id não exista, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"Usuário inexistente"
        }, 400
        ```
    
    - **TURMA**
    - **POST** /class
        - Parâmetros necessários a essa requisição: ['number']
        - Não será aceito além do parâmetro mencionado acima
        - O valor da propriedade "number" deve ser um número inteiro maior ou igual a 100 e menor que 1000
        
        ```json
        {
            "number": 208,
        }
        ```
        
        - Retorno da requisição , 201 (CREATED)
        
        ```json
        {
            "Nova turma registrada com sucesso!"
        }, 201
        ```
        
        - Retorno da requisição caso o campo esteja errado, status code 400(BAD_REQUEST)
        
        ```json
        {
        	"Necessario enviar o campo 'number' e o seu respectivo valor"
        },400
        ```
        
        - Retorno da requisição caso tente criar uma turma co mum número que foje da regra mencionada acima, status code 400(BAD_REQUEST)
        
        ```json
        {
        "O valor da propriedade 'number' deve ser um número inteiro, maior ou igual a 100 e menor que 1000"
        },400
        ```
        
    - **GET** /class
        
        ```json
        {}
        ```
        
        - Retorno da requisição 200 (OK)
        
        ```json
        {
            "number": 280,
            "teachers": [],
            "students": [],
            "timeline": {...},
            "register_date": "07/04/2024 - 22:34",
            "last_update_date": "07/04/2024 - 22:34"
        }, 200
        ```

    - **GET** /class/profile/:id
        - Parâmetro necessário a essa requisição: id
        - Necessário enviar o parâmetro acima na URL desta requisição


        - Retorno da requisição quando há uma turma com o id enviado na URL, status code 200 (OK)
        
        ```json
            {
                "_id": "661349b9dd0843bd401e0613",
                "last_update_date": "07/04/2024 - 22:34",
                "number": 280,
                "register_date": "07/04/2024 - 22:34",
                "students": [],
                "teachers": [],
                "timeline": {...}
            }, 200            
        ```    
        
        - Retorno da requisição caso não exista uma turma com o id informado, status code 400(BAD_REQUEST)
        
        ```json
        {
            "Turma inexistente"
        }, 400
        ```
        
    - **PATCH** /class
        - Parâmetros necessários : "id"
        - Parâmetros que podem ser atualizados : ['number', 'students', 'teacher']
        - Além do parâmetro "id" é necessário enviar mais um dos parâmetros aceitos acima
        
        ```json
        {
            "id": "6612bacc718d5c45e9f2bb56",
            "number": 899
        }
        ```
        
        - Retorno da requisição 200 (OK)
        
        ```json
        {
            "Turma atualizada com sucesso"
        }, 200
        ```
        
        - Retorno da requisição caso alguns dos campos estejam errados, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"Propriedade(s) invalida(s): [{'chave_errada': 105}]"
        }
        ```
        
        - Retorno da requisição caso id não exista, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"Turma inexistente"
        },400
        ```
        
    - **DELETE**  /class
        - Parâmetros necessários : "id"
        - Não é permitido enviar nenhum parâmtero além do parâmetro "id
        
        ```json
        {
            "Turma deletada com sucesso!"
        }, 200
        ```
        
        - Retorno da requisição caso id não exista, status code 400 (BAD_REQUEST)
        
        ```json
        {
        	"Turma inexistente"
        }, 400
        ```