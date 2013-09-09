function(doc, req) {
	var resp = {headers: {'Content-Type': 'application/json'}}
	var data;

	if (req.body.length === 0) {
		resp.code = 417
		resp.body = JSON.stringify({error: 'aborted', reason: 'no content'})
		return [null,resp]
	}	

	try {
		data = JSON.parse(req.body)
	} catch (e) {
		resp.code = 500
		resp.body = JSON.stringify({error: 'aborted', reason: 'could not parse content'})
		return [null,resp]
	}
	

	if (!doc) {
		//create a new annotation
		doc = data
		doc._id = doc.id = req.uuid //the bookmarklet expects the property id
		resp.code = 201
	} else {
		//update an annotation
		for (p in data) {
			if (p !== '_id' && data.hasOwnProperty(p)) {
				doc[p] = data[p]
			}
		}
		resp.code = 202
	}
	
	resp.body = JSON.stringify(doc)

	return [doc,resp]
}