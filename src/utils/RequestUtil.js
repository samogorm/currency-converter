export const RequestConfig = (type, data = null, contentType = null, acceptType = null) => {
    let config = {
        method: type
    };

    if (data !== null) config.body = data;

    return config;
}