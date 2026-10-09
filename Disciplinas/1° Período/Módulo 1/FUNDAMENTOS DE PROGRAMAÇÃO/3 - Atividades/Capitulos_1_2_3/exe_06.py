# Verificar Login e Senha

usuario = "aluno"
senha = "1234"

login = input("Usuários: ")
pw = input("Senha: ")

if login == usuario and pw == senha:
    print("Login realizado com sucesso!")
else:
    print("Usuário ou senha incorretos!")