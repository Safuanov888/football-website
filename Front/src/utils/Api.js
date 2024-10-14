
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
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
        .then((res) => {
            return getResponseData(res)
        })
        .then(data => data)
}

export const getMonthMatch = (param, setIsLoading) => {
    let url = new URL(`${BASE_URL}/api/v1/calendar/`)
    url.search = new URLSearchParams(param).toString();
    setIsLoading(true)
    return fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
        .then((res) => {
            return getResponseData(res)
        })
        .then(data => data)
}

export const getTournament = (setIsLoading) => {
    setIsLoading(true)
    return fetch(`${BASE_URL}/api/v1/tournament/`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
        .then((res) => {
            return getResponseData(res)
        })
        .then(data => data)
}

export const getCommands = (setIsLoading) => {
    setIsLoading(true)
    return fetch(`${BASE_URL}/api/v1/command/`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
        .then((res) => {
            return getResponseData(res)
        })
        .then(data => data)
}
