import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TableData from "./TableData";

export default function TabTable() {
  return (
    <div className="table-data">
      <Tabs defaultActiveKey="AED" className="">
        <Tab eventKey="AED" title="AED">
          <TableData />
        </Tab>
        <Tab eventKey="SAR" title="SAR">
          <TableData />
        </Tab>
      </Tabs>
    </div>
  );
}
