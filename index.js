const app= require('./app');
const {PORT} = process.env;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
process.env.PORT = 3000;
app.listen(3000, () => {