// import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";
import { Admin } from "@/models/Admin";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();
  await isAdminRequest(req,res);

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Admin.findOne({_id:req.query.id}));
    } else {
      res.json(await Admin.find());
    }
  }
 
  if (method === 'POST') {
    const {name,mail} = req.body;
    const adminDoc = await Admin.create({
      name,mail
    })
    res.json(adminDoc);
  }

  if (method === 'PUT') {
    const {name,mail} = req.body;
    await Admin.updateOne({_id}, {name,mail});
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Admin.deleteOne({_id:req.query?.id});
      res.json(true);
    }
  }}
