function(doc) {
  if (!doc.consumer || doc.consumer !== 'annotateit')
    return
  
  if (!doc.uri || doc.uri.length === 0)
    return

  emit(doc.uri, null);
}