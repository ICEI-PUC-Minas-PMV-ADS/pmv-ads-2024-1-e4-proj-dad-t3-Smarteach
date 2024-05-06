from datetime import datetime

class Teacher():
    def __init__(self, **kwargs):
        self.name = kwargs['name']
        self.email = kwargs['email']
        self.password = kwargs['password']
        self.period = kwargs['period']
        self.subject= kwargs['subject']
        self.classes = [int(elt) for elt in kwargs['classes']]
        self.register_date = datetime.now().strftime("%d/%m/%Y - %H:%M")
        self.last_update_date = datetime.now().strftime("%d/%m/%Y - %H:%M") 
    

    @staticmethod
    def verify_new_teacher_data(data: dict):

        available_keys = ['email' ,'name', 'password', 'subject', 'classes', 'period']
        class_list = data.get("classes")
        data_keys = data.keys()

        if len(data_keys) < 6:
            return f'há campos faltantes no corpo da requisição.'

        wrong_keys = [key for key in data_keys if key not in available_keys]

        if wrong_keys:
            return f'Campos incorretos inseridos na requisição: {wrong_keys}'
        
        none_values = {key for key in data if not data[key] and type(data[key]) != list}

        if none_values:
            return f'Foi atribuido um valor nulo nas seguintes propriedades: {none_values}'
        
        wrong_values = none_values = {key for key in data if type(data[key]) is not str and type(data[key]) is not list }

        if wrong_values:
            return f'Valores incorretos foram atribuidos as seguintes propriedades: {none_values}'
        
        for class_number in class_list:
            
            if type(class_number) == str:
                if not class_number.isnumeric():
                    return 'Valor incorreto atribuído a propriedade class_number'
                
            if type(class_number) != int and type(class_number) != str:
                return 'Valor incorreto atribuído a propriedade class_number'
            