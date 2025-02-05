```javascript
// Correct way to update an array element using the positional operator or arrayFilters
db.collection.updateOne({"_id": 1, "myArray": {"$elemMatch": {"index": 0}}}, {"$inc": {"myArray.$[].value": 1}});
//OR
db.collection.updateOne({"_id": 1}, {"$inc": {"myArray.0.value": 1}});
//myArray schema should be like this [{index: 0, value: 1}]
```