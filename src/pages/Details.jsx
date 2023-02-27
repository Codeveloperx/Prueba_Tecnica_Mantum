import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListRoutesStation from "../components/ListRoutesStation";
import Button from "react-bootstrap/Button";
import { useAxios } from "../hooks/useAxios";

const Details = () => {
  const { uri_station } = useParams();
  const { station, isLoading } = useAxios();
  const navigate = useNavigate();

  const detalle = station.find((item) => item.uri === uri_station);
  
  return (
    <>
      {isLoading && <h2 className="loading">Cargando...</h2>}
      {detalle && (
        <div className="card_list mt-5">
          <Card style={{ width: "18rem" }} className="mb-2">
            <Card.Header className="ps-0">
              <Button
                onClick={() => navigate(-1)}
                variant="link"
                size="sm"
                className="me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
              </Button>
              Station Detail
            </Card.Header>
            <Card.Body>
              <Card.Title>{detalle.name}</Card.Title>
              <Card.Text>{detalle.agency}</Card.Text>
            </Card.Body>
            <ListRoutesStation routesStion={detalle.routes} />
          </Card>
        </div>
      )}
    </>
  );
};

export default Details;
