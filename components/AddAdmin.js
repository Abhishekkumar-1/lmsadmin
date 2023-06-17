import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Spinner from "@/components/Spinner";
import {ReactSortable} from "react-sortablejs";

export default function ProductForm({
  _id,
  name:existingName,
  mail:existingMail,
}) {
    
  const [name,setName] = useState(existingName || '');
  const [mail,setMail] = useState(existingMail || '');
  const [goToProducts,setGoToProducts] = useState(false);
 
  const router = useRouter(); 

  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      name,mail
    };
    if (_id) {
      //update
      await axios.put('/api/admins', {...data,_id});
    } else {
      //create
      await axios.post('/api/admins', data);
    }
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push('/products');
  }

  return (
      <form onSubmit={saveProduct}>
        <label>Admin Name</label>
        <input
          type="text"
          placeholder="book name"
          value={name}
          onChange={ev => setName(ev.target.value)}/>
        <label>Admin mail</label>
        <input
          type="text"
          placeholder="author name"
          value={mail}
          onChange={ev => setMail(ev.target.value)}/>
        <button
          type="submit"
          className="btn-primary">
          Save
        </button>
      </form>
  );
}
