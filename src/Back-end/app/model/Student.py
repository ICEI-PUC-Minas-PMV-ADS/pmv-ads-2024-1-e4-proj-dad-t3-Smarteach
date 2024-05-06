from datetime import datetime

class Student():
    def __init__(self, **kwargs):
        self.name = kwargs['name']
        self.email = kwargs['email']
        self.password = kwargs['password']
        self.class_number = int(kwargs['class_number'])
    
    @staticmethod
    def verify_student_data(data: dict):
    
        available_keys = ['name', 'email', 'password', 'class_number']
        class_number = data.get('class_number')
        data_keys = data.keys()

        if len(data_keys) < 4:
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
        
        if type(class_number) == str:
            if not class_number.isnumeric():
                return 'Valor incorreto atribuído a propriedade class_number'
            
        if type(class_number) != int and type(class_number) != str:
            return 'Valor incorreto atribuído a propriedade class_number'