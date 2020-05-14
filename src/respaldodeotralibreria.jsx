import React from "react";
import { PDFReader } from "reactjs-pdf-reader";

class App extends React.Component {
  render() {
    return (
      <div style={{ overflow: "scroll", height: 600 }}>
        <PDFReader url="/samplereport.pdf" />
      </div>
    );
  }
}

export default App;
