
export const BASE_URL = 'http://localhost:9600';
function getResponseData(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const getMatchs = (param, setIsLoading) => {
    let url = new URL(`${BASE_URL}/api/v1/match/`)
    url.search = new URLSearchParams(param).toString();
    setIsLoading(true)
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
        .then((res) => {
            return getResponseData(res)
        })
        .then(data => data)
} 