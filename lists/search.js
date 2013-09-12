function (head, req) {
  var payload = {}
    , rows = []
    , row

  start({'headers': {'Content-Type' : 'application/json'}, 'code' : 200})

  while (row = getRow()) {
    rows.push(row.doc)
  }

  payload.total = head.total_rows
  payload.rows = rows
  payload.offset = head.offset

  send(JSON.stringify(payload))
}
