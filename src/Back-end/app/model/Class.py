
class Class():
    def __init__(self, **kwargs):
        self.number = kwargs['number']
        self.teachers = []
        self.students = []
        self.timeline = empty_timeline
    
    @staticmethod
    def verify_new_class_data(data, classes_data):

        class_number = data.get('number')

        if not class_number:
            return 'Necessario enviar o campo "number" e o seu respectivo valor'
        
        if type(class_number) != int:
            return 'O valor da propriedade "number" deve ser um número inteiro, maior ou igual a 100 e menor que 1000'
        
        if class_number < 100 or class_number >= 1000:
            return 'O valor da propriedade "number" deve ser um número inteiro, maior ou igual a 100 e menor que 1000'
        
        db_classes_number_list = [x.get('number') for x in classes_data]
        
        if class_number in db_classes_number_list:
            return 'Já existe uma turma registrada com este número'



empty_month_timeline = {
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
    "6": {},
    "7": {},
    "8": {},
    "9": {},
    "10": {},
    "11": {},
    "12": {},
    "13": {},
    "14": {},
    "15": {},
    "16": {},
    "17": {},
    "18": {},
    "19": {},
    "20": {},
    "21": {},
    "22": {},
    "23": {},
    "24": {},
    "25": {},
    "26": {},
    "27": {},
    "28": {},
    "29": {},
    "30": {},
    "31": {},
}

empty_timeline = {
    "2023":{
        "01":{},
        "02":{},
        "03":{},
        "04":{},
        "05":{},
        "06":{},
        "07":{},
        "08":{},
        "09":{},
        "10":{},
        "11":{},
        "12":{},
    },
    "2024":{
        "01":empty_month_timeline,
        "02":empty_month_timeline,
        "03":empty_month_timeline,
    }
}