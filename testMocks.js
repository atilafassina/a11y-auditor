const sampleIssue = {
  code: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H37',
  context:
    '<img src="//images.ctfassets.net/q33z48p65a6w/7JfqU7Latq4gs242smQUoA/9fff89c240396f694320b914241f6ab7/insurance.491f913a.jpg?&amp;fm=jpg&amp;fl=progressive" draggable="false" class="ha">',
  message:
    'Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.',
  type: 'error',
  typeCode: 1,
  selector:
    '#main > div > div:nth-child(6) > div > div > div:nth-child(2) > div > div > div > a:nth-child(3) > div > div > article > img'
}

exports.outlineReport = {
  issues: [sampleIssue]
}

exports.pa11yReport = {
  documentTitle: 'mock report',
  pageUrl: 'https://foo.bar',
  issues: [sampleIssue]
}

exports.fullReport = req => ({
  documentTitle: exports.pa11yReport.documentTitle,
  pageUrl: req.pageUrl,
  date: '1970-01-01T00:00:00.022Z',
  issues: [...exports.pa11yReport.issues, ...exports.outlineReport.issues]
})
