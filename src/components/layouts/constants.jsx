import { Link } from "react-router-dom";
import { Button } from "antd";

export const MENU_ITEM = [
  {
    label: <Link to="/feature">Tentang Kami</Link>,
    key: "1",
  },
  {
    label: <Link to="/aboutme">Daftar Barang</Link>,
    key: "2",
  },
  {
    label: <Link to="/landingpage">Pembelian</Link>,
    key: "3",
  },
  {
    label: <Link to="/crudbarangpt">CRUD BARANG</Link>,
    key: "4",
  },

  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "5",
  },
];
