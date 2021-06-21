import React, { forwardRef } from "react";
import Uploady from "@rpldy/uploady";
import { asUploadButton } from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";



const filterBySize = (file) => {
  //filter out images larger than 5MB
  return file.size <= 5242880;
};
const UploadButton  = asUploadButton(forwardRef(
  (props, ref) =>
      <div {...props} style={{ cursor: "pointer",color: "white", background: "green",marginRight:15, width: "250px", height: '45px', display: "flex",
     alignItems: "center",
      justifyContent: "center"}}>
         <h5>Upload Image</h5>
      </div>
));
class UploadPicture extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
  
    };
   
  }

  render() {
    return (
      <div style={{ flex:1, alignItems: 'center', margin: 20 }}>
      
      <Uploady
    destination={{ url: "my-server.com/upload" }}
    fileFilter={filterBySize}
    accept="image/*"
  >
    <UploadButton />
    <UploadPreview />   
  </Uploady>
      </div>
    );
  }

}
export default UploadPicture;