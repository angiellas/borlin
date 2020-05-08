import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
export const mystyle = {
  color: "white",
  backgroundColor: "black",
  padding: "10px",
  fontFamily: "Arial",
};
const Popup = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button style={mystyle} onClick={toggle} style={{ marginBottom: "1rem" }}>
        DESCRIPTION
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Popup;