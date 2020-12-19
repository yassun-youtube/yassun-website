export default function GTag() {
  return (
    <amp-analytics type="gtag" data-credentials="include">
      <script type="application/json"
              dangerouslySetInnerHTML={ {
                __html: `
                      {
                          "vars": {
                              "gtag_id": "UA-143764658-3",
                              "config" : {
                                  "UA-143764658-3": { "groups": "default" }
                              }
                          }
                      }
                  `
              } }>
      </script>
    </amp-analytics>
  )
}
