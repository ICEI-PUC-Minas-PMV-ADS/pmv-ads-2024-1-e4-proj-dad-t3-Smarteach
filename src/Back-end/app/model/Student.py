from datetime import datetime

class Student():
    def __init__(self, **kwargs):
        self.name = kwargs['name']
        self.class_number = kwargs['class_number']
        self.email = kwargs['email']
    
    @staticmethod
    def verify_student_data(data: dict):
    
        available_keys = ['name', 'email', 'class_number']
        data_keys = data.keys()

        if len(data_keys) < 3:
            return f'há campos faltantes no corpo da requisição.'

        wrong_keys = [key for key in data_keys if key not in available_keys]

        if wrong_keys:
            return f'Campos incorretos inseridos na requisição: {wrong_keys}'
        
        none_values = {key for key in data if not data[key]}

        if none_values:
            return f'Foi atribuido um valor nulo nas seguintes propriedades: {none_values}'
        
        wrong_values = none_values = {key for key in data if type(data[key]) is not str and type(data[key]) is not int }

        if wrong_values:
            return f'Valores incorretos foram atribuidos as seguintes propriedades: {none_values}'