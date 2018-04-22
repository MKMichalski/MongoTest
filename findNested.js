// db = connect("localhost:27017/films")

use films

 db.films.insert({"title" :"Jaja","Year":1967, "director":{"firstName":"Quentin","lastName":"Tara","birthday":"1972-01-22"}})

db.films.find({"director.lastName":"Tara"})
cursor = db.films.find().pretty()
while (cursor.hasNext()){
	printjson(cursor.next());
}

db.films.aggregate(
[
	{
		$group : {
		_id: '$year',
		total : {$sum:1}
		}
		}
	]
)