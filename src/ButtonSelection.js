import React from "react";
import Select from "react-select";
import { Button } from "react-bootstrap";
import { LoremIpsum } from 'react-lorem-ipsum';
const colourOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "yellow", label: "Yellow" }
];
let textcolor;
const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    console.log({ data, isDisabled, isFocused, isSelected });
    return {
      ...styles,
      backgroundColor: isFocused ? "#999999" : null,
      color: "#333333",




    };
  }
};

const ShowParagraph = () => (
  // <div className="text-wrapper" style={{color:textcolor}}>
     <div className="text-wrapper" >
    <LoremIpsum p={1} avgWordsPerSentence={1000} />
  </div>
)
class ButtonSelection extends React.Component {
  constructor(props) {
    super(props);
    this.ParagraphButtonOnClick = this.ParagraphButtonOnClick.bind(this);
    this.PictureButtonOnClick = this.PictureButtonOnClick.bind(this);
    
    this.state = {
      color: "green",
      longtext: "",
      paragraph:false
    };
   
  }

  handleChange(value) {
    this.setState({ color: value });
  }
  ParagraphButtonOnClick() {
   
    this.setState({ paragraph: true });
  }
  PictureButtonOnClick() {
   
    this.setState({ paragraph: true });
  }
  componentDidMount()
{
  textcolor=this.state.color;
}
  render() {
    return (
      <div style={{ justifyContent: 'center', alignItems: 'center', alignItems: 'center', margin: 20 }}>
      
        <div style={{ alignSelf: "center", alignItems: 'center', width: "300px", marginBottom: 25 }}>
        <b style={{marginBottom:"25px"}}> Select Button Color</b>
          <Select
            defaultValue={colourOptions[1]}
            label="Single select"
            options={colourOptions}
            onChange={value => this.handleChange(value.value)}
            styles={colourStyles}

          />

        </div>

        <Button variant="default" size="lg"
          onClick={this.ParagraphButtonOnClick}
          style={{ color: "white", background: this.state.color,marginRight:15, width: "250px", height: '45px', alignItems: 'center' }}>
         <b> Show lorem ipsum</b>
        </Button>

        
        { this.state.paragraph ? <ShowParagraph /> : null }
      </div>
    );
  }

}
export default ButtonSelection;