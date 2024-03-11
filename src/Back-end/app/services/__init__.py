
def verify_new_teacher_data(data: dict):

    available_keys = ['nome', 'disciplina', 'turmas', 'turno']

    data_keys = data.keys()

    wrong_keys = [key for key in data_keys if key not in available_keys]

    if wrong_keys:
        return f'Campos incorretos inseridos na requisição: {wrong_keys}'
    
    wrong_values = {key for key in data if not data[key] or type(data[key]) is not str and type(data[key]) is not list }

    if wrong_values:
        return f'Faltou atribuir os valores das seguintes propriedades: {wrong_values}'