import express from 'express';
// import { PORT } from './secrete.ts'
import petRoutes from "./routes/pet.js";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
// 🔧 FIX: Add leading slash to 'api/'
app.use('/api', petRoutes);
// Optional root route
app.get('/', (req, res) => {
    res.send('API is running');
});
// 🔧 Use imported PORT instead of hardcoded value
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map