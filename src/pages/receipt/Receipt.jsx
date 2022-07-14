import React, { useEffect } from "react";
import { Header } from "../../components/header/Header";
import ApiService from "../../services/ApiService";
import PDFViewer from "pdf-viewer-reactjs";

function Receipt() {
  const [receipt, setReceipt] = React.useState([]);
  useEffect(() => {
    // ApiService.download()
    //   .then((res) => {
    //     console.log(res.data);
    //     setReceipt(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    window.open("http://10.81.4.242:2022/user/pdf/generate", "_blank");
  }, []);
  return (
    <>
      <Header />
      <PDFViewer
        document={{
          url: "http://10.81.4.242:2022/user/pdf/generate",
        }}
      />
    </>
  );
}

export default Receipt;
