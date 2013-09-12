function(newDoc, oldDoc, userCtx, secObj) {
  var v = require("commonjs/validate").init(newDoc, oldDoc, userCtx, secObj)
    , is_admin = v.isAdmin()
 
  if (newDoc._deleted === true) {
    if (is_admin || newDoc.user === oldDoc.user) {
      return
    } else {
      v.unauthorized('Only admins may delete other user annotations.')
    }
  }

  if (is_admin) return

  v.require('consumer','id','quote','ranges','uri','user')
  v.unchanged('user')
  v.unchanged('uri')
  
}