from datetime import datetime
from calendar import isleap

class Class():
    def __init__(self, **kwargs):
        self.number = kwargs['number']
        self.teachers = []
        self.students = []
        self.timeline = create_month_timeline(datetime.now().year)
        self.register_date = datetime.now().strftime("%d/%m/%Y - %H:%M")
        self.last_update_date = datetime.now().strftime("%d/%m/%Y - %H:%M") 
    
    @staticmethod
    def verify_new_class_data(data):

        class_number = data.get('number')

        if not class_number:
            return 'Necessario enviar o campo "number" e o seu respectivo valor'
        
        if type(class_number) != int:
            return 'O valor da propriedade "number" deve ser um número inteiro, maior ou igual a 100 e menor que 1000'
        
        if class_number < 100 or class_number >= 10000:
            return 'O valor da propriedade "number" deve ser um número inteiro, maior ou igual a 100 e menor que 1000'


    @staticmethod
    def verify_if_exist_class_data(number, classes_data):

        db_classes_number_list = [x.get('number') for x in classes_data]
        
        if number in db_classes_number_list:
            return 'Já existe uma turma registrada com este número'


def create_month_timeline(year):

    d_28 = [2]
    d_30 = [4,6,9,11]

    month_timeline = {}
    leap_year = True if isleap(year) else False

    for month in range(1,13):
        days_range = 31
        if month in d_30:
            days_range -= 1
        elif month in d_28 and leap_year:
            days_range -= 2
        elif month in d_28:
            days_range -= 3 
        
        days_timeline ={}
        for day in range(1, days_range + 1):
            str_day = fill_str_number(day)
            days_timeline.update({str_day: {}})

        str_month = fill_str_number(month)
        month_timeline[str_month] = days_timeline

    return {str(year): month_timeline}


def fill_str_number(number):

        if number < 10:
            return f'0{str(number)}'
        else:
            return str(number)
