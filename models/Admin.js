import mongoose, {model, Schema, models} from "mongoose";

const AdminSchema = new Schema({
  name: {type:String, required:true},
  mail: {type:String, required:true},
}, {
  timestamps: true,
});

export const Admin = models.Admin || model('Admin', AdminSchema);