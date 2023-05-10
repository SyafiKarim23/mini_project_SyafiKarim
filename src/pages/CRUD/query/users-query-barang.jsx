import { gql } from "@apollo/client";

// Read Data
export const GET_BARANG = gql`
  query barang {
    barang(order_by: { timeStamp: asc }) {
      uuid
      avatar
      namaBarang
      harga
    }
  }
`;

// Create Data
export const ADD_BARANG = gql`
  mutation barang($object: barang_insert_input!) {
    insert_barang_one(object: $object) {
      uuid
    }
  }
`;

// Update Data
export const UPDATE_BARANG = gql`
  mutation barang(
    $pk_columns: barang_pk_columns_input!
    $_set: barang_set_input!
  ) {
    update_barang_by_pk(pk_columns: $pk_columns, _set: $_set) {
      uuid
    }
  }
`;

// Delete Data
export const DELETE_BARANG = gql`
  mutation barang($uuid: uuid!) {
    delete_barang_by_pk(uuid: $uuid) {
      uuid
    }
  }
`;
