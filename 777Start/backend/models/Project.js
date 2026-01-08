import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  product: String,
  audience: String,
  style: String,
  contentUrls: [String],
  generatedText: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
