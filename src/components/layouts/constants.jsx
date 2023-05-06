import { Link } from "react-router-dom";
import { Button } from "antd";

export const MENU_ITEM = [
  {
    label: <Link to="/beranda">Beranda</Link>,
    key: "1",
  },
  {
    label: <Link to="/landingpage">Pembelian</Link>,
    key: "2",
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
    key: "3",
  },
];
