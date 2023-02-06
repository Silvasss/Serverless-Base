// http://localhost:8888/.netlify/functions/hello

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: "Netlify function example!"
    }
}