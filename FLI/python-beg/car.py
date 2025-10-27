class Car:
    def __init__(self, model, year):
        self.model = model
        self.year = year

    def describe(self):
        return f"{self.model}, {self.year}"
