import React from 'react'
import AppIntro from './AppIntro.jsx'
import CSVUpload from './CSVUpload.jsx'
import Form from './Form.jsx'

import './index.css'

const App = () => {
  return (
    <div id="main-content">
      <AppIntro />

      <div className="grid">
        <div className="item">
          <Form />
        </div>
        <div className="item">
          <CSVUpload />
        </div>
      </div>

      <div className="alert" style={{ marginTop: '3em' }}>
        <p>
          Two sets of APORs were published for certain dates in 2017, one on the
          Bureau’s web site and one on the FFIEC’s web site. The APOR values
          published by the FFIEC and incorporated into the FFIEC’s rate spread
          calculator are available in{' '}
          <a href="https://www.ffiec.gov/ratespread/aportables.htm">
            the tables on the FFIEC’s web site
          </a>. The APOR values published by the Bureau and incorporated into
          the Bureau’s rate spread calculator are available in the tables
          accessible from this page. In addition, APOR values previously
          published by the Bureau between December 28, 2017 and December 31,
          2017 are available in{' '}
          <a href="https://s3.amazonaws.com/cfpb-hmda-public/prod/apor/122817-123117%20APOR%20Values.csv">
            this table
          </a>.
        </p>
      </div>
    </div>
  )
}

export default App
