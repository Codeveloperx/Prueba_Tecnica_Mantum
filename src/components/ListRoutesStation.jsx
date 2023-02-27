import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const ListRoutesStation = ({ routesStion }) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Routes</Accordion.Header>
        <Accordion.Body>
            <ul>
                {(routesStion.length > 0)?
                    routesStion.map((item)=>(
                        <li key={item.route_group_id}>{item.name}</li>
                    )):<li>No Routes Found</li>
                }

            </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default ListRoutesStation
