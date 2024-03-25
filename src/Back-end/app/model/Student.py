from datetime import datetime

class Student():
    def __init__(self, **kwargs):
        self.nome = kwargs['nome']
        self.turma = kwargs['turma']
        self.email = kwargs['email']
        self.email = kwargs['email']
    
    @staticmethod
    def verify_student_data(data: dict):
    
        available_keys = ['nome', 'email', 'turma']
        
        if not all(key in data for key in available_keys):
            return "Por favor, preencha todos os dados para criação do aluno."