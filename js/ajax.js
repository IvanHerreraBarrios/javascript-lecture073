(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment()

    console.log(xhr)

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return
        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log(xhr)
            console.log("Succesful")
            console.log(xhr.responseText)
            let json = JSON.parse(xhr.responseText)
            console.log(json)

            json.forEach(el => {
                const $li = document.createElement("li")
                $li.innerHTML = ` ${el.name} -- ${el.email}--${el.phone}`
                $fragment.appendChild($li)
            })

            $xhr.appendChild($fragment)
        } else {
            console.log("error")
            let message = xhr.statusText || "Error"
            $xhr.innerHTML = ` Error ${xhr.status}: ${message}`
        }

        console.log("Load")
    })
    xhr.open("GET", "https://jsonplaceholder.lypicode.com/users")//get -> url

    xhr.send()
})()

    (() => {
        const $fetch = document.getElementById("fetch"),
            $fragment = document.createDocumentFragment()

        fetch("https://jsonplaceholder.lypicode.com/users")
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                console.log(json)
                $fetch.innerHTML = json

                json.forEach(el => {
                    const $li = document.createElement("li")
                    $li.innerHTML = ` ${el.name} -- ${el.email}--${el.phone}`
                    $fragment.appendChild($li)
                })

                $fetch.appendChild($fragment)
            })
            .catch(err => {
                console.log(err)
                let message = err.statusText || "Error"
                $fetch.innerHTML = ` Error ${err.status}: ${message}`

            }).finally(() => {
                console.log("This is executed regardless of the result")
            })
    })()

    (() => {
        const $fetchAsync = document.getElementById("fetch-async"),
            $fragment = document.createDocumentFragment()

        async function getData() {
            try {
                let res = await fetch("https://jsonplaceholder.lypicode.com/users"), json = await res.json()

                console.log(res, json)

                if (res.ok) throw { status: res.status, statusText: res.statusText }

                json.forEach(el => {
                    const $li = document.createElement("li")
                    $li.innerHTML = ` ${el.name} -- ${el.email}--${el.phone}`
                    $fragment.appendChild($li)
                })

                $fetchAsync.appendChild($fragment)
            } catch (error) {
                console.log(err)
                let message = err.statusText || "Error"
                $fetchAsync.innerHTML = ` Error ${err.status}: ${message}`
            } finally {
                console.log("This is executed regardless of the result")
            }

        }

        getData()

    })()

    (() => {
        const $axios = document.getElementById("axios"),
            $fragment = document.createDocumentFragment()

        axios
            .get("https://jsonplaceholder.lypicode.com/users")
            .then(res => {
                console.log(res)
                let json = res.data

                json.forEach(el => {
                    const $li = document.createElement("li")
                    $li.innerHTML = ` ${el.name} -- ${el.email}--${el.phone}`
                    $fragment.appendChild($li)
                })

                $axios.appendChild($fragment)

            })
            .catch(err => {
                console.log(err.response)
                let message = err.response.statusText || "Error"
                $axios.innerHTML = ` Error ${err.resposne.status}: ${message}`
            })
            .finally(() => {
                console.log("This is executed regardless of the result")
            })

    })()

    (() => {
        const $axiosAsync = document.getElementById("axios-async"),
            $fragment = document.createDocumentFragment()



        async function getData() {
            try {
                let res = await axios.get("https://jsonplaceholder.lypicode.com/users"), json = await res.data

                console.log(res, json)

                json.forEach(el => {
                    const $li = document.createElement("li")
                    $li.innerHTML = ` ${el.name} -- ${el.email}--${el.phone}`
                    $fragment.appendChild($li)
                })

                $axiosAsync.appendChild($fragment)
            } catch (err) {
                console.log(err.response)
                let message = err.response.statusText || "Error"
                $axiosAsync.innerHTML = ` Error ${err.resposne.status}: ${message}`
            } finally {
                console.log("This is executed regardless of the result")
            }
        }

        getData()
    })()