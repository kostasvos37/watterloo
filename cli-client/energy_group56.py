import click
import requests
from datetime import datetime
from click_option_group import optgroup, RequiredMutuallyExclusiveOptionGroup

baseURL = 'https://localhost:8765/energy/api'

class Date(click.ParamType):
    name = 'date'

    def __init__(self, formats=None):
        self.formats = formats or [
            '%Y-%m-%d',
            '%Y-%m',
            '%Y'
        ]

    def get_metavar(self, param):
        return '[{}]'.format('|'.join(self.formats))

    def _try_to_convert_date(self, value, format):
        try:
            return datetime.strptime(value, format).date()
        except ValueError:
            return None

    def convert(self, value, param, ctx):
        for format in self.formats:
            date = self._try_to_convert_date(value, format)
            if date:
                return date

        self.fail(
            'invalid date format: {}. (choose from {})'.format(
                value, ', '.join(self.formats)))

    def __repr__(self):
        return 'Date'

@click.group()
def energy_group56():
    pass

@energy_group56.command()
@click.option('--area', required=True, type = str)
@click.option('--timeres', required=True, type=click.Choice(['PT15M', 'PT30M','PT60M'], case_sensitive=True))
@optgroup.group(cls=RequiredMutuallyExclusiveOptionGroup)
@optgroup.option('--date', type=Date(formats=['%Y-%m-%d']))
@optgroup.option('--month', type=Date(formats=['%Y-%m']))
@optgroup.option('--year', type=Date(formats=['%Y']))
def ActualTotalLoad(area, timeres, date, month, year):
    if(date != None):
        Day = date.day
        Month = date.month
        Year = date.year
    if(month != None):
        Month = month.month
        Year = month.year
    if(year != None):
        Year = year.year

@energy_group56.command()
@click.option('--area', required=True, type = str)
@click.option('--timeres', required=True, type=click.Choice(['PT15M', 'PT30M','PT60M'], case_sensitive=True))
@click.option('--type', required=True)
@optgroup.group(cls=RequiredMutuallyExclusiveOptionGroup)
@optgroup.option('--date', type=Date(formats=['%Y-%m-%d']))
@optgroup.option('--month', type=Date(formats=['%Y-%m']))
@optgroup.option('--year', type=Date(formats=['%Y']))
def AggregatedGenerationPerType(area, timeres, type, date, month, year):
    if(date != None):
        Day = date.day
        Month = date.month
        Year = date.year
    if(month != None):
        Month = month.month
        Year = month.year
    if(year != None):
        Year = year.year

@energy_group56.command()
@click.option('--area', required=True, type = str)
@click.option('--timeres', required=True, type=click.Choice(['PT15M', 'PT30M','PT60M'], case_sensitive=True))
@optgroup.group(cls=RequiredMutuallyExclusiveOptionGroup)
@optgroup.option('--date', type=Date(formats=['%Y-%m-%d']))
@optgroup.option('--month', type=Date(formats=['%Y-%m']))
@optgroup.option('--year', type=Date(formats=['%Y']))
def DayAheadTotalLoadForecast(area, timeres, date, month, year):
    if(date != None):
        Day = date.day
        Month = date.month
        Year = date.year
    if(month != None):
        Month = month.month
        Year = month.year
    if(year != None):
        Year = year.year

@energy_group56.command()
@click.option('--area', required=True, type = str)
@click.option('--timeres', required=True, type=click.Choice(['PT15M', 'PT30M','PT60M'], case_sensitive=True))
@optgroup.group(cls=RequiredMutuallyExclusiveOptionGroup)
@optgroup.option('--date', type=Date(formats=['%Y-%m-%d']))
@optgroup.option('--month', type=Date(formats=['%Y-%m']))
@optgroup.option('--year', type=Date(formats=['%Y']))
def ActualvsForecast(area, timeres, date, month, year):
    if(date != None):
        Day = date.day
        Month = date.month
        Year = date.year
    if(month != None):
        Month = month.month
        Year = month.year
    if(year != None):
        Year = year.year

@energy_group56.command()
def login():
    url = baseURL + 'login'
    username = click.prompt("Username")
    password = click.prompt("Password", hide_input=True)
    data = {
        'username' : username
        'password' : password
    }
    headers = {'content-type': 'application/x-www-form-urlencoded'}
    Post = requests.post(url, data = data, headers = headers)

if __name__ == '__main__':
    energy_group56()