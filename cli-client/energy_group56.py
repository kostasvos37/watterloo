import click, requests, json, os
from datetime import datetime
from click_option_group import optgroup, RequiredMutuallyExclusiveOptionGroup

baseURL = 'https://localhost:8765/energy/api'
tokenPATH = 'HOME'
tokenNAME = 'softeng19bAPI.token'

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
@click.option('--username', required=True, type = str)
@click.option('--passw', required=True, type = str)
def login(username, passw):
    url = baseURL + '/Login'
    data = {
        'username' : username,
        'password' : passw
    }
    p = requests.post(url, data = data)

    with open(tokenPATH + tokenNAME, 'w') as outfile:
        json.dump(p, outfile)
    
    click.echo("You have logged in successfully.")

@energy_group56.command()
def logout():
    url = baseURL + '/Logout'
    with open(tokenPATH + tokenNAME) as json_file:
        f = json.load(json_file)
        t = f['token']
    p = requests.post(url, token = t)

    if os.path.exists(tokenPATH + tokenNAME):
        os.remove(tokenNAME)
        click.echo("You have logged out successfully.")
    else:
        click.echo("The API token is missing.")

@energy_group56.command()
@click.option('--area', required=True, type = str)
@click.option('--timeres', required=True, type=click.Choice(['PT15M', 'PT30M','PT60M'], case_sensitive=True))
@optgroup.group(cls=RequiredMutuallyExclusiveOptionGroup)
@optgroup.option('--date', type=Date(formats=['%Y-%m-%d']))
@optgroup.option('--month', type=Date(formats=['%Y-%m']))
@optgroup.option('--year', type=Date(formats=['%Y']))
def ActualTotalLoad(area, timeres, date, month, year):
    url = baseURL + '/ActualTotalLoad/' + area + '/' + timeres
    if(date != None):
        Day = date.day
        Month = date.month
        Year = date.year
        url = url + '/date/' + Year + '-' + Month + '-' + Day
    if(month != None):
        Month = month.month
        Year = month.year
        url = url + '/month/' + Year + '-' + Month
    if(year != None):
        Year = year.year
        url = url + '/year/' + Year
    with open(tokenPATH + tokenNAME) as json_file:
        f = json.load(json_file)
        t = f['token']
    g = requests.get(url, token = t)
    
  
@energy_group56.command()
@click.option('--area', required=True, type = str)
@click.option('--timeres', required=True, type=click.Choice(['PT15M', 'PT30M','PT60M'], case_sensitive=True))
@click.option('--productiontype', required=True)
@optgroup.group(cls=RequiredMutuallyExclusiveOptionGroup)
@optgroup.option('--date', type=Date(formats=['%Y-%m-%d']))
@optgroup.option('--month', type=Date(formats=['%Y-%m']))
@optgroup.option('--year', type=Date(formats=['%Y']))
def AggregatedGenerationPerType(area, timeres, productiontype, date, month, year):
    url = baseURL + '/AggregatedGenerationPerType/' + area + '/' + productiontype + '/' + timeres
    if(date != None):
        Day = date.day
        Month = date.month
        Year = date.year
        url = url + '/date/' + Year + '-' + Month + '-' + Day
    if(month != None):
        Month = month.month
        Year = month.year
        url = url + '/month/' + Year + '-' + Month
    if(year != None):
        Year = year.year
        url = url + '/year/' + Year
    with open(tokenPATH + tokenNAME) as json_file:
        f = json.load(json_file)
        t = f['token']
    g = requests.get(url, token = t)


@energy_group56.command()
@click.option('--area', required=True, type = str)
@click.option('--timeres', required=True, type=click.Choice(['PT15M', 'PT30M','PT60M'], case_sensitive=True))
@optgroup.group(cls=RequiredMutuallyExclusiveOptionGroup)
@optgroup.option('--date', type=Date(formats=['%Y-%m-%d']))
@optgroup.option('--month', type=Date(formats=['%Y-%m']))
@optgroup.option('--year', type=Date(formats=['%Y']))
def DayAheadTotalLoadForecast(area, timeres, date, month, year):
    url = baseURL + '/DayAheadTotalLoadForecast/' + area + '/' + timeres
    if(date != None):
        Day = date.day
        Month = date.month
        Year = date.year
        url = url + '/date/' + Year + '-' + Month + '-' + Day
    if(month != None):
        Month = month.month
        Year = month.year
        url = url + '/month/' + Year + '-' + Month
    if(year != None):
        Year = year.year
        url = url + '/year/' + Year
    with open(tokenPATH + tokenNAME) as json_file:
        f = json.load(json_file)
        t = f['token']
    g = requests.get(url, token = t)

@energy_group56.command()
@click.option('--area', required=True, type = str)
@click.option('--timeres', required=True, type=click.Choice(['PT15M', 'PT30M','PT60M'], case_sensitive=True))
@optgroup.group(cls=RequiredMutuallyExclusiveOptionGroup)
@optgroup.option('--date', type=Date(formats=['%Y-%m-%d']))
@optgroup.option('--month', type=Date(formats=['%Y-%m']))
@optgroup.option('--year', type=Date(formats=['%Y']))
def ActualvsForecast(area, timeres, date, month, year):
    url = baseURL + '/ActualvsForecast/' + area + '/' + timeres
    if(date != None):
        Day = date.day
        Month = date.month
        Year = date.year
        url = url + '/date/' + Year + '-' + Month + '-' + Day
    if(month != None):
        Month = month.month
        Year = month.year
        url = url + '/month/' + Year + '-' + Month
    if(year != None):
        Year = year.year
        url = url + '/year/' + Year
    with open(tokenPATH + tokenNAME) as json_file:
        f = json.load(json_file)
        t = f['token']
    g = requests.get(url, token = t)

@energy_group56.command()
def HealthCheck():
    url = baseURL + '/HealthCheck'
    g = requests.get(url)
    if g['status'] == 'OK':
        click.echo("Health check completed successfully")
    else:
        click.echo("Health check was unsuccessfull")

@energy_group56.command()
def Reset():
    url = baseURL + '/Reset'
    g = requests.get(url)
    if g['status'] == 'OK':
        click.echo("Reset completed successfully")
    else:
        click.echo("Reset was unsuccessfull")


@energy_group56.command()   
def Reset():
    url = baseURL + '/Reset'

if __name__ == '__main__':
    energy_group56()