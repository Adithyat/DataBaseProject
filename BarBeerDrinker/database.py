import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy import sql
#import MySQLdb
from BarBeerDrinker import config

engine = create_engine(config.database_uri)



def find_Q(name):
    with engine.connect() as con:
        
        query = sql.text(name)
        rs = con.execute(query)
        if rs is None:
                return None
        return [dict(row) for row in rs]

        

def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT name, license, state, city, phone, address FROM bars;")
        return [dict(row) for row in rs]

def find_bar(name):
    with engine.connect() as con:
        query = sql.text(
            "SELECT name, license, city, phone, address FROM bars WHERE name = :name;"
        )
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)


def get_top_spender(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT DISTINCT drinkers.name, ROUND(SUM(total),2) as grand FROM bills JOIN drinkers ON drinkers.drinker_ID = bills.drinker_ID JOIN	bars ON bars.bar_ID = bills.bar_ID WHERE bars.name = :bar GROUP BY drinkers.name ORDER BY grand DESC LIMIT 10')
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        return results

def get_best_seller(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT      items.name as beer, manfs.name as seller, SUM(transactions.quantity) as quantity    FROM     transactions 		JOIN     items ON transactions.item_ID = items.item_ID         JOIN     manfs ON manfs.manf_ID = items.manf_ID 		JOIN  	bills on bills.bill_ID = transactions.bill_ID 		JOIN 	bars ON bars.bar_ID = bills.bar_ID  WHERE bars.name = :bar GROUP BY items.name ORDER BY quantity  DESC LIMIT 10')
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        return results

def get_busy_time(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT     day, COUNT(*) as count FROM    transactions		JOIN 	bills on bills.bill_ID = transactions.bill_ID		JOIN	bars ON bars.bar_ID = bills.bar_ID WHERE bars.name = :bar GROUP BY day ORDER BY  count DESC LIMIT 10')
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        return results
def get_busy_week(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT     date, COUNT(*) as count FROM    transactions		JOIN 	bills on bills.bill_ID = transactions.bill_ID		JOIN	bars ON bars.bar_ID = bills.bar_ID WHERE bars.name = :bar GROUP BY date ORDER BY  count DESC')
        rs = con.execute(query, bar=bar_name)
        results =[{"date":1,"count":0},{"date":2,"count":0},{"date":3,"count":0},{"date":4,"count":0}]
        for row in rs:
                nwk=round((int(str(row[0])[8:10])/30)*4)
                if (nwk==0):
                        results[0]["count"]= results[0]["count"]  + row[1]
                elif(nwk==1):
                        results[1]["count"]= results[1]["count"]  + row[1]
                elif(nwk==2):
                        results[2]["count"]= results[2]["count"]  + row[1]
                else:
                        results[3]["count"]= results[3]["count"]  + row[1]
        #results = [dict(row) for row in rs]
        return results


def get_drinkers():
    with engine.connect() as con:
        rs = con.execute('SELECT name, state, city, phone, address FROM drinkers;')
        return [dict(row) for row in rs]

def find_drinker(name):
    with engine.connect() as con:
        query = sql.text(
            "SELECT name FROM drinkers WHERE name = :name;"
        )
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)



def get_likes(drinker_name):
    """Gets a list of beers liked by the drinker provided."""

    with engine.connect() as con:
        query = sql.text('SELECT      items.name as beer, SUM(quantity) as total FROM     transactions 		JOIN     items ON transactions.item_ID = items.item_ID 		JOIN  	bills on bills.bill_ID = transactions.bill_ID 		JOIN 	bars ON bars.bar_ID = bills.bar_ID 		JOIN 	drinkers ON drinkers.drinker_ID = transactions.drinker_ID  WHERE drinkers.name = :name AND items.manf_ID >0 GROUP BY items.name ORDER BY total DESC LIMIT 10')
        rs = con.execute(query, name=drinker_name)
        return [dict(row) for row in rs]


def get_drinker_trans(drinker_name):
    with engine.connect() as con:
        query = sql.text('SELECT      bills.bill_ID as bill, bars.name as bar, items.name as item, quantity, date, transactions.time as time FROM     transactions 		JOIN     items ON transactions.item_ID = items.item_ID 		JOIN  	bills on bills.bill_ID = transactions.bill_ID 		JOIN 	bars ON bars.bar_ID = bills.bar_ID 		JOIN 	drinkers ON drinkers.drinker_ID = transactions.drinker_ID  WHERE drinkers.name = :name ORDER BY date DESC')
        rs = con.execute(query, name=drinker_name)
        results = [dict(row) for row in rs]
        for r in results:
                r['date'] = str(r['date'])[:10]
                r['time'] = str(r['time'])[:2] + ':'+ str(r['time'])[2:]
        return results

def get_drinker_bills(drinker_name):
    with engine.connect() as con:
        query = sql.text('SELECT     bills.bill_ID as bill, bars.name as bar, SUM(bills.total+bills.tax+bills.tip) as total, transactions.date , bills.time as time FROM     transactions 		JOIN     items ON transactions.item_ID = items.item_ID 		JOIN  	bills on bills.bill_ID = transactions.bill_ID 		JOIN 	bars ON bars.bar_ID = bills.bar_ID 		JOIN 	drinkers ON drinkers.drinker_ID = transactions.drinker_ID  WHERE drinkers.name = :name GROUP BY bars.name ORDER BY date DESC')
        rs = con.execute(query, name=drinker_name)
        return [dict(row) for row in rs]




def get_beers():
    """Gets a list of beer names from the beers table."""

    with engine.connect() as con:
        rs = con.execute('SELECT items.name as name, manfs.name as manf FROM  items JOIN manfs ON manfs.manf_ID = items.manf_ID')
        return [dict(row) for row in rs]


def get_bars_selling(beer):
    with engine.connect() as con:
        query = sql.text('SELECT      bars.name as name, SUM(quantity) as total FROM     transactions 		JOIN     items ON transactions.item_ID = items.item_ID 		JOIN  	bills on bills.bill_ID = transactions.bill_ID 		JOIN 	bars ON bars.bar_ID = bills.bar_ID   WHERE items.name = :name AND items.manf_ID >0 GROUP BY bars.name ORDER BY total DESC LIMIT 10')
        rs = con.execute(query, name=beer)
        results = [dict(row) for row in rs]
        return results


def get_top_consumer(beer):
    with engine.connect() as con:
        query = sql.text(
            'SELECT      drinkers.name as name, SUM(quantity) as total FROM     transactions 		JOIN     items ON transactions.item_ID = items.item_ID 		JOIN  	bills on bills.bill_ID = transactions.bill_ID 		JOIN 	bars ON bars.bar_ID = bills.bar_ID 		JOIN 	drinkers ON drinkers.drinker_ID = transactions.drinker_ID  WHERE items.name = :name AND items.manf_ID >0 GROUP BY drinkers.name ORDER BY total DESC LIMIT 10')
        rs = con.execute(query, name=beer)
        
        results = [dict(row) for row in rs]
        return results

def get_top_day(beer):
    with engine.connect() as con:
        query = sql.text(
            'SELECT      day, SUM(quantity) as total FROM     transactions 		JOIN     items ON transactions.item_ID = items.item_ID 		JOIN  	bills on bills.bill_ID = transactions.bill_ID 		JOIN 	bars ON bars.bar_ID = bills.bar_ID  WHERE items.name = :name AND items.manf_ID >0 GROUP BY day ORDER BY total DESC')
        rs = con.execute(query, name=beer)
        results = [dict(row) for row in rs]
        return results







def filter_beers(max_price):
    with engine.connect() as con:
        query = sql.text(
            "SELECT * FROM sells WHERE price < :max_price;"
        )

        rs = con.execute(query, max_price=max_price)
        results = [dict(row) for row in rs]
        for r in results:
            r['price'] = float(r['price'])
        return results


def get_bar_menu(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT 	items.name as beer , manfs.name as manf FROM    items        		JOIN	manfs ON manfs.manf_ID = items.manf_ID        JOIN    (SELECT         beer_id, quantity    FROM        inventories    WHERE        bar_id = (SELECT                 bar_id            FROM                bars            WHERE                name = :bar)    GROUP BY beer_id    ORDER BY quantity DESC    LIMIT 10) AS q ON beers.beer_id = q.beer_id\
            ')
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        return results













def get_beer_manfs(beer):
    with engine.connect() as con:
        if beer is None:
            rs = con.execute('SELECT DISTINCT manfs.name as manf FROM manfs;')
            return [row['manf'] for row in rs]

        query = sql.text('SELECT items.name, manfs.name FROM  beers  JOIN items ON beers.item_ID = items.item_id  JOIN manfs ON beers.manf_ID = manfs.manf_ID  WHERE items.name = :beer;')
        rs = con.execute(query, beer=beer)
        result = rs.first()
        if result is None:
            return None
        return result['manf']



def get_bar_frequent_counts():
    with engine.connect() as con:
        query = sql.text('SELECT bar, count(*) as frequentCount \
                FROM frequents \
                GROUP BY bar; \
            ')
        rs = con.execute(query)
        results = [dict(row) for row in rs]
        return results


def get_bar_cities():
    with engine.connect() as con:
        rs = con.execute('SELECT DISTINCT city FROM bars;')
        return [row['city'] for row in rs]







