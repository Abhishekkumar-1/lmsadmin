import Layout from "@/components/Layout";
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";

export default function OrdersPage() {
  const [admins,setAdmin] = useState([]);
  useEffect(() => {
    axios.get('/api/admins').then(response => {
      setAdmin(response.data);
    });
  }, []);
  return (
    <Layout>
    <Link className="btn-primary rounded-lg" href={'/admins/new'}>Add new admin</Link>
      <table className="basic">
        <thead>
          <tr>
            <th>New Admin Name</th>
            <th>New Admin E-mail</th>
          </tr>
        </thead>
        <tbody>
        {admins.map(admin => (
            <tr key={admin._id}>
              <td>{admin.name}</td>
              <td>{admin.mail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
