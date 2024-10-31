import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import { tableHeaderDataPesanan } from "../data/index";
import { tableDataPesanan } from "../data/index";
import { useState } from "react";

const tes = () => {

    const [showForm, setShowForm] = useState(false);
    const handleClickButton = () => {
        setShowForm(!showForm);
    }

    // function isinomor() {
    //     const table = document.getElementById("datatable");
    //     const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    //     for (let i = 0; i < rows.length; i++){
    //         rows[i].getElementsByTagName("td")[0].innerText = i + 1;
    //     }
    // }
    return (
        <div>
            <Container fluid className="data-pesanan">
                <Row>
                    <Col className="content mb-1 text-center">
                        <h1>Data Program</h1>
                        <Button variant="primary" className="button" onClick={handleClickButton}>
                            {showForm ? "sembunyikan form" : "Tambah Program"}
                        </Button>
                        {showForm && (
                            <Form className="form">
                                <div className="form-data">
                                    <Form.Label htmlFor="inputProgram" className="name">Nama</Form.Label>
                                    <Form.Control
                                        className="form-control"
                                        type="text"
                                        id="inputProgram"
                                        placeholder="Masukan nama program"
                                    />
                                </div>
                                <div className="form-data">
                                    <Form.Label htmlFor="title" className="name">Title</Form.Label>
                                    <Form.Control
                                        className="form-control"
                                        type="text"
                                        id="title"
                                        placeholder="Masukan title"
                                    />
                                </div>
                                <div className="form-data">
                                    <Form.Label htmlFor="target" className="name">Target</Form.Label>
                                    <Form.Control
                                        className="form-control"
                                        type="text"
                                        id="target"
                                        placeholder="Masukan target dari donasi yang diinginkan"
                                    />
                                </div>
                            </Form>
                        )}
                    </Col>
                </Row>
                <Row className="content-body pt-3">
                    <Col >
                        <Table responsive id="datatable">
                            <thead>
                                {tableHeaderDataPesanan.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <th>{data.no} </th>
                                            <th>{data.nama} </th>
                                            <th>{data.email} </th>
                                            <th>{data.merekKendaraan} </th>
                                            <th>{data.platKendaraan} </th>
                                            <th>{data.layanan} </th>
                                            <th>{data.tanggal} </th>
                                            <th>{data.jam} </th>
                                            <th>{data.alamat} </th>
                                            <th>{data.pesanan} </th>
                                            <th>Aksi</th>
                                        </tr>
                                    );
                                })}
                            </thead>
                            <tbody>

                                {tableDataPesanan.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <td  ></td>
                                            <td> {data.nama} </td>
                                            <td> {data.telepon} </td>
                                            <td> {data.email} </td>
                                            <td> {data.merekKendaraan} </td>
                                            <td> {data.platKendaraan} </td>
                                            <td> {data.layanan} </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default tes; 