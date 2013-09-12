Annouch
=======

Annouch is a CouchApp that can store annotations from [Annotator][1].

[1]: http://okfnlabs.org/annotator/

## use the annotateit.org Bookmarklet
**1. create an account on annotateit.org**

**2. Copy and configure (i used XYZ.iriscouch.com/store) the following code into a bookmarklet of your browser**

```js
javascript:(
  function(a, b) {
    a._annotatorConfig = {
      auth: {
        tokenUrl: "http://annotateit.org/api/token"
      },
      store: {
        prefix: "http://YOUR_OWN_API_ENDPOINT"
      },
      tags: !0
    }, s = b.body.appendChild(b.createElement("script")), s.language = "javascript", s.src = "http://assets.annotateit.org/bookmarklet/bootstrap.js"
  }
)(this,this.document);
```
**3. configure a vhost** (local.ini)
```
[vhosts]
XYZ.iriscouch.com/store = DBNAME/_design/annouch/_rewrite
```
**4. enable CORS** (local.ini)
```
[cors]
headers = Accept, Origin, x-annotator-auth-token, Content-Type
methods = PUT, POST, GET, OPTIONS, DELETE
origins = *
```

License
-------

Annouch is licensed under the MIT License.
