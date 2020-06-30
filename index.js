const div = document.querySelector('.graph')
const ctx = document.getElementById('myChart');

async function main() {
    const res = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1`).then(res=>res.json())
    const data = await res.data
    let arrRecovereds = []
    let arrStates = []
    let arrCases = []
    let arrDeaths = []
    let arrSuspects = []
    for (item of data){
        arrRecovereds.push(item.refuses)
        arrStates.push(item.state)
        arrCases.push(item.cases)
        arrDeaths.push(item.deaths)
        arrSuspects.push(item.suspects)
        const element = document.createElement('h1')
        element.appendChild(document.createTextNode(`${item.state} ja tem ${item.cases} casos, ${item.deaths} mortes, ${item.suspects} suspeitas e ${item.refuses} casos dispensados`))
        div.appendChild(element)
    }
    console.log(data)
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrStates,
            datasets: [{
                label: 'Coronavirus cases',
                backgroundColor: '#B22222',
                borderColor: '#B22222',
                data: arrCases
            },
            {
                label: 'Coronavirus deaths',
                backgroundColor: 'rgb(0, 0, 0)',
                borderColor: 'rgb(0, 0, 0)',
                data: arrDeaths
            },
            {
                label: 'Coronavirus recovereds',
                backgroundColor: 'rgb(144,238,144)',
                borderColor: 'rgb(144,238,144)',
                data: arrRecovereds
            },
            {
                label: 'Coronavirus suspects',
                backgroundColor: '#cccccc',
                borderColor: '#cccccc',
                data: arrSuspects
            }
        ],

        },
    })
}
main()