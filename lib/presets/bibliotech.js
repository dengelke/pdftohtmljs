

exports.load = function(pdf2htmlex) {
  pdf2htmlex.add_options([
      '--zoom 1.3', 
      '--tounicode 1', 
      '--optimize-text 1',
      // '--embed-css 0',
      '--embed-image 0', 
      '--embed-javascript 0',
      '--embed-outline 0',
      '--outline-filename outline.html',
      '--dest-dir tmp'
  ]);
  return pdf2htmlex
}
