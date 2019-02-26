# DB Setup
Make sure you have got mysql installed in your system. You can download it from [MySQL Website](https://dev.mysql.com/downloads/mysql/)

Once installed, open ('./src/config/sequelize.js') and update the user information as per your mysql installation. 

# Starting backend server

run below commands in order

`npm i`

`npm run setup`

`npm start`

The backend server will be started at `http://localhost:4567`

## API Documentation

API documentation is available at [Swagger](https://app.swaggerhub.com/apis/mark28234/fest-be/0.1)

For product search API, you can use below operators as part of request body

`$eq : equals`
`$ne: not equals`
`$gte: greater than or equal`
`$gt: greater than`
`$lte: less than or equal`
`$lt: less than`
`$not: not equals`
`$in: in`
`$notIn: not in`
`$like: like`
`$notLike: not like`
`$between: between`
`$notBetween: not between`
`$and: and`
`$or: or`

An example of the request body is given below:

`{
	"$or": [
		{
			"name": {
				"$like" : "%smart%"
			}
		},
		{
			"price": {
				"$gt": 10000
			}
		}
	]
}`