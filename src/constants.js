// Used for setting up the base URL for the API calls
const dev = {
    BASEURL  : "http://localhost:8000"
}

const prod = {
    BASEURL  : "https://documentqna-backend.onrender.com"
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
