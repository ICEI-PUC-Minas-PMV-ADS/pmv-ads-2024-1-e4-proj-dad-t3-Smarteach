from app.services import verify_data_format

class Activity():
    def __init__(self, **kwargs):
        self.name = kwargs['name']
        self.subject = kwargs["subject"]
        self.teacher_email = kwargs["teacher_email"]
    
    @staticmethod
    def verify_new_class_activity_data(data, collection):
        
        if not data.get('class_number'):
            return 'Necessario enviar o campo "number" e o seu respectivo valor numérico'

        classes_data = collection.find({})
        class_number = int(data.get('class_number'))
        class_data = collection.find_one({'number': class_number})
        activity_date = data.get('date') or ''
        activity_time = data.get('time')
        
        db_classes_number_list = [x.get('number') for x in classes_data]
        if class_number not in db_classes_number_list:
            return 'Turma inexistente'
        
        if not activity_date:
            return 'Necessário enviar o data desta aula'
        
        if not verify_data_format(activity_date, "DATE"):
            return 'Formato da data inválido! ele deve ser: "dd/mm/aaaa"'
        
        if not activity_date:
            return 'Necessário enviar o horário desta aula'

        if verify_data_format(activity_time, "TIME"):
            return 'Formato do horário inválido! ele deve ser: hh:min'
        
        day, month, year = activity_date.split('/')

        daily_class_list = [x for x in class_data.get('timeline').get(year).get(month).get(day)]
        if activity_time in daily_class_list:
                return 'Já existe uma aula registrada neste horário!'
